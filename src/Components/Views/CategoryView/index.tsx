import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
	ImageCombiner,
	ImagePaths,
} from '../../../Configurations/api/resources/api.resourceimage';
import { LanguageType } from '../../../Configurations/globals';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks/hooks';
import { GetAllCategory } from '../../../Redux/reducers/categoryReducer/action';
import { CategoryCard } from '../../CustomComponent/Cards/CategoryCard';

import style from './categoryview.module.scss';

export const CategoryView: React.FC<any> = (props: { isEco: boolean }) => {
	const { t } = useTranslation();
	const nav = useNavigate();
	const dispatch = useAppDispatch();
	const { categories } = useAppSelector((state) => state.categoryReducer);

	async function fetchCategory(page: number, take: number) {
		await dispatch(
			GetAllCategory(page, take, props.isEco ? 'eco' : 'standart')
		);
	}

	useEffect(() => {
		if (!categories) {
			fetchCategory(1, 200);
		}
	}, [categories]);

	useEffect(() => {
		fetchCategory(1, 200);
	}, [props.isEco]);

	function onSelectCategory(title: string) {
		nav(title);
	}

	return (
		<div className={style.catview}>
			<h1 className={style.title}>{t(`Catalog`)}</h1>
			<div className={style.wrapper}>
				<div className={style.gridView}>
					<div className="col-span-full grid grid-cols-12 gap-[1rem] mm:flex mm:flex-col sm:grid">
						<button
							className={`text-center font-black text-2xl py-[.5rem] rounded-xl flex items-center justify-center col-span-5 col-start-2 px-[1rem] ${
								props.isEco ? 'bg-neutral-400/70' : 'bg-lime-400'
							}`}
							onClick={() => {
								nav('/catalog');
							}}>
							{t(`Standart Product Line`)}
						</button>
						<button
							className={`text-center font-black text-2xl py-[.5rem] rounded-xl flex items-center justify-center col-span-5 px-[1rem] ${
								props.isEco ? 'bg-lime-400' : 'bg-neutral-400/70'
							}`}
							onClick={() => {
								nav('/catalog/eco');
							}}>
							{t(`Eco-Product Line`)}
						</button>
					</div>
					{categories?.pageables?.map((item) => {
						return (
							<CategoryCard
								key={item.image}
								onSelect={() => {
									onSelectCategory(item.title);
								}}
								src={ImageCombiner(ImagePaths.Category, item.image)}
								title={
									localStorage.getItem('lang') == LanguageType.EN
										? item.title
										: item.uaTitle
								}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
