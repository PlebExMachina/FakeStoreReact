// Utils
import { getCategories, getProducts, getProductsByCategory } from '../../utils/FakeStoreAPI';

// React
import { useState, useEffect, useRef, useCallback } from 'react';

// Bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

// CSS
import styles from './ProductDetailsInterface.module.css'

function ProductsInterface({view, setView}) {
    const [term, setTerm] = useState("");           // Term must be included in either title or description.
    const [category, setCategory] = useState("");   // Category to filter the query by. Changing this will trigger a re-fetch.
    const [sortBy, setSortBy] = useState("");       // "" -> None, LT -> Lowest to Highest, GT -> Highest to Lowest. Changing this will change results without fetching.
    const [results, setResults] = useState([]);      // Literal results of the fetch.

    // Options available to filter by.
    const [categoryOptions, setCategoryOptions] = useState(["None"]);

    // On initialization only fetch categories from API
    useEffect(() => {
        getCategories().then((obj) => {
            setCategoryOptions(["None",...obj]);
        });
    }, []);

    // Bind directly to the search bar value.
    const formSearch = useRef(null);

    // Update search term.
    const handleSubmit = (e) => {
        e.preventDefault();
        setTerm(formSearch.current.value);
    };

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
        }, [results, sortBy, term, setView]);
    
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
        
    
    
        // When category changes re-fetch.
        useEffect(() => { FetchProducts() }, [FetchProducts, category]);
    
        // When other query parameters then re-filter / sort data.
        useEffect(() => { UpdateProductsView() }, [UpdateProductsView, term, sortBy]);

    return (
        <div className={`${styles.module} ${styles.body}`}>
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container className="d-flex justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
            <Form className="m-auto p-3" onSubmit={(e)=>{ handleSubmit(e); }}>
                <Button variant="primary" className="w-100" type="submit">Search</Button>
                <Form.Control type="text" className="w-100" ref={formSearch} placeholder="..." />
            </Form>
            <Dropdown className="m-auto p-3">
                <Dropdown.Toggle variant="success" id="dropdown-basic">Category</Dropdown.Toggle>
                <Dropdown.Menu>
                    {categoryOptions.map((el, index) => <Dropdown.Item key={index} onClick={()=>{setCategory(el)}}>{el}
                    </Dropdown.Item>)}        
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-auto p-3">
                <Dropdown.Toggle variant="success" id="dropdown-basic">Sort By</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>{ setSortBy(""); }}>Nothing</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{ setSortBy("LT"); }}>Least Expensive</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{ setSortBy("GT"); }}>Most Expensive</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
        </div>
    );
}

export default ProductsInterface;