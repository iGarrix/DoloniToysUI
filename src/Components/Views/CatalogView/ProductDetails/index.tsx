import { useParams } from "react-router-dom"


export const ProductDetails : React.FC = () => {

    const {article} = useParams();

    return (
        <div>
            Details
            {article}
        </div>
    )
}