/*
    The product details page contains more detailed information about a product and provides a way of adding items to the cart.
*/

// React
import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'

// Sub Components
import ProductDetailsInterface from '../components/ui/ProductDetailsInterface';
import ProductCard from '../components/ProductCard';

// Utils
import {getProductByID} from '../utils/FakeStoreAPI'

// CSS
import styles from "./ProductDetails.module.css";

function ProductDetails() {
    // Determines the item to fetch.
    const { id } = useParams();

    // Fetched details.
    const [details, setDetails] = useState(null);

    // Loads item details
    useEffect(()=>{
        getProductByID(id).then((obj) => {
            setDetails(obj);
        });
    }, [id]);

    return (
        <div className={`${styles.module} ${styles.body}`}>
           { details && <ProductCard {...details} image={details.image} onDoubleClick={()=>{}}>
                <ProductDetailsInterface {...details}/>
            </ProductCard> }
        </div>        

    );
}
export default ProductDetails;