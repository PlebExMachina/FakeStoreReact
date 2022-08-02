/*
    The products page contains a list of fetched products which can be filtered / sorted in several ways.
*/

// React
import { useState } from 'react'
import { Outlet } from 'react-router-dom';

// Sub Components
import ProductsList from '../components/ProductsList';
import ProductsInterface from '../components/ui/ProductsInterface';

// CSS
import styles from './Products.module.css';

function Products() {
    const [view, setView] = useState([]);           // Results after filtering / sorting.

    return (
       view && <div className={`${styles.module} ${styles.body}`}>
            <ProductsInterface view={view} setView={setView}/>
            <ProductsList view={view}/>
            <Outlet/>
        </div>
    );
}
export default Products;