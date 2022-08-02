/*
    The products page contains a list of fetched products which can be filtered / sorted in several ways.
*/

// React
import { useState, useEffect, useCallback, useRef } from 'react'

// Sub Components
import ProductCard from '../components/ProductCard'

// Utils
import { useDraggable } from "react-use-draggable-scroll";
import { getProducts, getProductsByCategory, getCategories } from '../utils/FakeStoreAPI'

// Bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// CSS
import styles from './Products.module.css';

/*
    There's not much of a point breaking this one down into sub-components.
    The Bootstrap components will not get much simpler and the entire page is UI to begin with so the page would just have a single component.
*/

function Products() {
    const [term, setTerm] = useState("");           // Term must be included in either title or description.
    const [category, setCategory] = useState("");   // Category to filter the query by. Changing this will trigger a re-fetch.
    const [sortBy, setSortBy] = useState("");       // "" -> None, LT -> Lowest to Highest, GT -> Highest to Lowest. Changing this will change results without fetching.
    const [results, setResults] = useState([]);      // Literal results of the fetch.
    const [view, setView] = useState([]);           // Results after filtering / sorting.

    // Categories available for the page.
    const [categoryOptions, setCategoryOptions] = useState(["None"]);
    
    // Bind directly to the search bar value.
    const formSearch = useRef(null);

    // Update the view (filter / sort)
    const UpdateProductsView = useCallback (() => {
    const Temp = results.filter(el => el.title.toLowerCase().includes(term.toLowerCase()) || el.description.toLowerCase().includes(term.toLowerCase()));
    switch(sortBy){
        case "": 
        setView(Temp);
        break;
        case "LT": 
        setView(Temp.sort((a, b) => a.price - b.price));
        break;
        case "GT": 
        setView(Temp.sort((a, b) => b.price - a.price));
        break;
        default:
        console.log("Unexpected Sorting Parameter")
    };
    }, [results, sortBy, term]);

    // Get products then update results.
    const FetchProducts = useCallback(() => {
    (() => {
        switch(category){
        case "":
            return getProducts();
        case "None":
            return getProducts();
        default:
            return getProductsByCategory(category);
        }
    })().then(obj => {
        setResults(obj);
    });
    }, [category]);
    
    // Update search term.
    const handleSubmit = () => {
        setTerm(formSearch.current.value);
    };

    // Draggable
    const dragPoint = useRef(); 
    const { events } = useDraggable(dragPoint);

    // When category changes re-fetch.
    useEffect(() => { FetchProducts() }, [FetchProducts, category]);

    // When other query parameters then re-filter / sort data.
    useEffect(() => { UpdateProductsView() }, [UpdateProductsView, term, sortBy]);

    // On initialization only fetch categories from API
    useEffect(() => {
        getCategories().then((obj) => {
            setCategoryOptions(["None",...obj]);
        });
    }, []);

    return (
        <div className={`${styles.module} ${styles.body}`}>
        <div className="container d-flex justify-content-between p-3 m-3">
            <header className="text-center"><h1>Products</h1></header>
            <Form className="d-flex" onSubmit={()=>{ handleSubmit(); }}>
                <Form.Control type="text" ref={formSearch} placeholder="..." />
                <Button variant="primary" type="submit">Search</Button>
            </Form>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">Sort By</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>{ setSortBy(""); }}>Nothing</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{ setSortBy("LT"); }}>Least Expensive</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{ setSortBy("GT"); }}>Most Expensive</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">Category</Dropdown.Toggle>
                <Dropdown.Menu>
                    {categoryOptions.map((el, index) => <Dropdown.Item key={index} onClick={()=>{setCategory(el)}}>{el}
                    </Dropdown.Item>)}            </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className={`container ${styles.horizontalScrollable} ${styles.products}`}>
            <div className={`row text-center`} {...events} ref={dragPoint}>
                {view && view.map(el => <ProductCard key={el.id} {...el} description={null}/>)}
            </div>
        </div>

        </div>
    );
}
export default Products;