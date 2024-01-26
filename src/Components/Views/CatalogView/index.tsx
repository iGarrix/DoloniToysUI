import { faAngleDown, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IGetProductFilter } from '../../../Configurations/api/requestmodels/models';
import { ExpressionTypes } from '../../../Configurations/api/resources/api.expressiontypes';
import {
	ImageCombiner,
	ImagePaths,
} from '../../../Configurations/api/resources/api.resourceimage';
import { LanguageType, ReplaceArticle } from '../../../Configurations/globals';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks/hooks';
import { GetAllCategory } from '../../../Redux/reducers/categoryReducer/action';
import { GetAllFilteredProduct } from '../../../Redux/reducers/productReducer/action';
import { Paginator } from '../../Common/Paginator';
import { ProductCard } from '../../CustomComponent/Cards/ProductCard';

import style from './style.catalog.module.scss';

export const CatalogView: React.FC<any> = (props: { isEco: boolean }) => {
	const { t } = useTranslation();
	const { category } = useParams();
	const nav = useNavigate();
	const [isOpen, setOpen] = useState(true);
	const { categories } = useAppSelector((state) => state.categoryReducer);
	const { products } = useAppSelector((state) => state.productReducer);
	const dispatch = useAppDispatch();

	const [isPending, startTransition] = useTransition();

	async function fetchFilterProducts(request: IGetProductFilter) {
		await dispatch(GetAllFilteredProduct(request));
	}

	async function fetchCategory(page: number, take: number) {
		await dispatch(
			GetAllCategory(page, take, props.isEco ? 'eco' : 'standart')
		);
	}

	useEffect(() => {
		fetchCategory(1, 1000);
		if (category) {
			const request: IGetProductFilter = {
				categoryTitle: category,
				filterParam: ExpressionTypes.FilterRatingOrder,
				page: 1,
				take: 24,
				isEco: props.isEco ? true : false,
			};
			fetchFilterProducts(request);
		} else {
			Filter(ExpressionTypes.FilterRatingOrder, 1);
		}
		//window.scrollTo(0,0);
	}, [category]);

	const onPaginate = async (event: number) => {
		console.log(event);
		startTransition(() => {
			Filter(ExpressionTypes.FilterRatingOrder, event);
			window.document.documentElement.scrollTo(0, 0);
		});
	};

	async function Filter(filterParams: string, page: number) {
		const request: IGetProductFilter = {
			categoryTitle: category ? category : '*',
			filterParam: filterParams,
			page: page,
			take: 24,
			isEco: props.isEco ? true : false,
		};
		fetchFilterProducts(request);
	}

	return (
		<section className={`${style.catalogContainer}`}>
			<aside className={`${style.filterGridContainer}`}>
				<div className={`${style.filterGridWrapper} overflow-auto`}>
					<div className="flex flex-col gap-[15px]">
						<div className={`${style.headerFilter}`}>
							<h1 className={`${style.title}`}>{t('Filters')}</h1>
							<FontAwesomeIcon
								icon={isOpen ? faClose : faAngleDown}
								className={`${style.turnButton}`}
								onClick={() => {
									setOpen(!isOpen);
								}}
							/>
						</div>
						<div
							className={`${style.mainFilter} ${
								isOpen ? style.opened : style.closed
							}`}>
							{categories?.pageables?.map((item) => {
								return (
									<p
										key={item.title}
										className={`${style.item} ${
											category === item.title ? style.selected : null
										}`}
										onClick={() => {
											props.isEco
												? nav(`/catalog/eco/` + item.title)
												: nav(`/catalog/` + item.title);
										}}>
										{localStorage.getItem('lang') == LanguageType.UA
											? item.uaTitle
											: item.title}
									</p>
								);
							})}
							{/* <hr />
                            <p className={`${style.item}`} onClick={() => { Filter(ExpressionTypes.FilterNameOrder) }}>
                                {t('Filter by name (ascending)')}
                            </p>
                            <p className={`${style.item}`} onClick={() => { Filter(ExpressionTypes.FilterNameOrderByDescending) }}>
                                {t('Filter by name (descending)')}
                            </p>
                            <p className={`${style.item}`} onClick={() => { Filter(ExpressionTypes.FilterRatingOrder) }}>
                                {t('Filter by rating (ascending)')}
                            </p>
                            <p className={`${style.item}`} onClick={() => { Filter(ExpressionTypes.FilterRatingOrderByDescending) }}>
                                {t('Filter by rating (descending)')}
                            </p> */}
						</div>
					</div>
				</div>
			</aside>

			{products && products.total ? (
				<aside className={`${style.productContainer}`}>
					{products?.pageables?.map((item) => {
						return (
							<ProductCard
								key={item.article}
								src={ImageCombiner(ImagePaths.Product, item.images[0])}
								title={
									localStorage.getItem('lang') == LanguageType.UA
										? item.uaTitle
										: item.title
								}
								onClick={() => {
									nav('/product/' + ReplaceArticle(item.article, true));
								}}
							/>
						);
					})}
					{products.total !== 1 && (
						<div className={`${style.paginatorContainer}`}>
							<Paginator
								total={products?.total ? products?.total : 0}
								onPaginate={onPaginate}
							/>
						</div>
					)}
				</aside>
			) : (
				<aside className={`${style.productErrorContainer}`}>
					<div className={`${style.errorContainer}`}>
						<h1 className={`${style.errorMessage}`}>
							{props.isEco
								? t('Eco-Positions not found')
								: t('Positions not found')}
						</h1>
					</div>
				</aside>
			)}
		</section>
	);
};
