import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks/hooks"
import { GetAllCategory } from "../../../Redux/reducers/categoryReducer/action";
import { MainBannerOne } from "../../CustomComponent/Banners/MainBannerOne";
import { SimpleMainBanner } from "../../CustomComponent/Banners/SimpleMainBanner";
import { CarouselMainBannerOne } from "../../CustomComponent/Carousels/CarouselPages/CarouselMainBannerOne";
import { MainCarousel } from "../../CustomComponent/Carousels/MainCarousel"
import { RecommendBlock } from "../../CustomComponent/RecommendBlock";
import { Section } from "../../CustomComponent/Section";

export const MainView : React.FC = () => {

    const { categories, error, isLoading, successMessage} = useAppSelector(state => state.categoryReducer);
    const dispatch = useAppDispatch();
    const nav = useNavigate();
    async function fetch() {
        await dispatch(GetAllCategory(1, 10));
    }

    useEffect(() => {
        fetch();
    }, []);

    function selectCatalog(title: string) {
        nav(`/catalog/` + title);
    }

    return (
        <section className="flex flex-col">
            {/* <MainCarousel /> */}
            <CarouselMainBannerOne />
            <RecommendBlock />
            <Section />
            <MainBannerOne />
            <SimpleMainBanner />
        </section>
    )
}