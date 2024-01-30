import { Fragment, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../Redux/hooks/hooks';
import { GetAllCategory } from '../../../Redux/reducers/categoryReducer/action';
import { MainBannerOne } from '../../CustomComponent/Banners/MainBannerOne';
import { SimpleMainBanner } from '../../CustomComponent/Banners/SimpleMainBanner';
import { Carousel } from '../../CustomComponent/Carousels/Carousel';
import { CarouselFullscreen } from '../../CustomComponent/Carousels/CarouselFullscreen';
import { MainFooter } from '../../CustomComponent/Footers/MainFooter';
import { RecommendBlock } from '../../CustomComponent/RecommendBlock';
import { Section } from '../../CustomComponent/Section';

import style from './style.main.module.scss';
const bg1 = require('../../../Assets/NewBgs/main/below1.png');
const bg2 = require('../../../Assets/NewBgs/main/below2.png');
const bg3 = require('../../../Assets/NewBgs/main/below3.png');
const bg4 = require('../../../Assets/NewBgs/main/below4.png');
const bg5 = require('../../../Assets/NewBgs/main/below5.png');

const mbg1 = require('../../../Assets/Backgrounds/bg6.jpg');
const mbg2 = require('../../../Assets/Backgrounds/bg7.jpg');
const mbg3 = require('../../../Assets/Backgrounds/bg8.jpg');
// const mbg1 = require('../../../Assets/Backgrounds/mini_banner1.png');
// const mbg2 = require('../../../Assets/Backgrounds/mini_banner2.png');
// const mbg3 = require('../../../Assets/Backgrounds/mini_banner3.png');

const banner1 = require('../../../Assets/NewBgs/main/banners/1.png');
const banner2 = require('../../../Assets/NewBgs/main/banners/2.png');
const banner3 = require('../../../Assets/NewBgs/main/banners/3.png');
const banner4 = require('../../../Assets/NewBgs/main/banners/4.png');
const banner5 = require('../../../Assets/NewBgs/main/banners/5.png');

export const MainView: React.FC = () => {
	const dispatch = useAppDispatch();
	const rf = useRef<HTMLDivElement | any>();
	const nav = useNavigate();

	useEffect(() => {
		rf.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}, []);

	function selectCatalog(title: string) {
		nav(`/catalog/` + title);
	}

	return (
		<section className="flex flex-col bg-light">
			<CarouselFullscreen
				selectedIndex={0}
				images={[banner1, banner2, banner3, banner4, banner5]}
			/>
			<section
				className={`${style.slidercarouserContainer}`}
				id="main_carousel">
				<img alt="bg1" src={bg1} className={`${style.item}`} />
				<img alt="bg1" src={bg3} className={`${style.item}`} />
				<img alt="bg1" src={bg4} className={`${style.item}`} />
				<img alt="bg1" src={bg2} className={`${style.item}`} />
				<img alt="bg1" src={bg5} className={`${style.item}`} />
			</section>
			<section className={`${style.thirdblockImages}`}>
				<img alt="mbg1" src={mbg1} className={`${style.item}`} />
				<img alt="mbg2" src={mbg2} className={`${style.item}`} />
				<img alt="mbg3" src={mbg3} className={`${style.item}`} />
			</section>
			<RecommendBlock />
			{/* <Section /> */}
			{/* <MainBannerOne /> */}
			<SimpleMainBanner />
		</section>
	);
};
