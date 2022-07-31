/* https://fakestoreapi.com/ */

// Get all products
/*
    [
        {
            id:1,
            title:'...',
            price:'...',
            category:'...',
            description:'...',
            image:'...'
        },
        ...
    ]
*/
export const getProducts = () =>  fetch('https://fakestoreapi.com/products').then(res => res.json());

// Get a single product
/*
    {
        id:1,
        title:'...',
        price:'...',
        category:'...',
        description:'...',
        image:'...'
    },
*/
export const getProductByID = (id) => fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json());

// Retrieves available categories.
/*
    ["electronics","jewelery","men's clothing","women's clothing"]
*/
export const getCategories = () => fetch(`https://fakestoreapi.com/products/categories`).then(res => res.json());

// Get products in a specific category
/*
    [
        {
            id:1,
            title:'...',
            price:'...',
            category:'<category>',
            description:'...',
            image:'...'
        },
        ...
    ]
*/
export const getProductsByCategory = (category) => fetch(`https://fakestoreapi.com/products/category/${category}`).then(res => res.json());

// Filters a list of data by a search term. Checks both title and description.
export const filterByTerm = (arr, term) => arr.filter((el) => el.title.includes(term) || el.description.includes(term));