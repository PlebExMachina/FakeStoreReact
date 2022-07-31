import { useParams } from 'react-router-dom'

function ProductDetails() {
    const { id } = useParams();
    return (
        <>ProductDetails Unimplemented - {id}</>
    );
}
export default ProductDetails;