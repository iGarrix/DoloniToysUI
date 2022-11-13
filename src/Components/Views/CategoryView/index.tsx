import { useEffect } from "react";
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";
import { ImageCombiner, ImagePaths } from "../../../Configurations/api/resources/api.resourceimage";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks/hooks";
import { GetAllCategory } from "../../../Redux/reducers/categoryReducer/action"
import { CategoryCard } from "../../CustomComponent/Cards/CategoryCard";

export const CategoryView : React.FC = () => {

    const { t } = useTranslation();
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const { categories } = useAppSelector(state => state.categoryReducer);

    async function fetchCategory(page: number, take: number) {
        await dispatch(GetAllCategory(page, take));
    }

    useEffect(() => {
        if (!categories) {
            fetchCategory(1, 200);
        }
    }, [categories]);

    function onSelectCategory(title: string) {
        nav(title);
        window.location.reload();
    }

    return (
        <div className="w-full flex flex-col bg-light items-center pt-[2vw] gap-[2vw]">
            <h1 className="text-3xl font-bold">{t(`Catalog`)}</h1>
            <div className="flex justify-center bg-bluesky-100 w-full h-full py-[4vw] relative">
                <div className="grid grid-cols-4 gap-[1.5vw] z-10">
                    {
                        categories?.pageables?.map(item => {
                            return (
                                <CategoryCard key={item.image} onSelect={() => { onSelectCategory(item.title); } } src={ImageCombiner(ImagePaths.Category, item.image)} title={item.title} />
                                // <div key={item.image} className="grid grid-cols-1 rounded-md bg-white w-[250px] overflow-hidden cursor-pointer select-none transition-all hover:scale-105">
                                //     <div className="">
                                //         <img className="w-full h-full aspect-square object-contain" src={ImageCombiner(ImagePaths.Category, item.image)} />
                                //     </div>
                                //     <div className="w-full flex justify-center h-full py-[0.8vw] px-[10%]">
                                //         <p className="text-center font-medium">{item.title}</p>
                                //     </div>
                                // </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}