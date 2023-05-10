import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image'
import "./Style/Products.scss";
import { Link } from 'react-router-dom';

export default function Product() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const getProducts = () => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }
    const getCategories = () => {
        fetch(`${api_url}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }
    const getProductsCategory = (catName) => {
        fetch(`${api_url}/category/${catName}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);
    return (
        <div className="main-product text-center">
            <div className="main-filter">
                <button className='btn btn-success' onClick={() => { getProducts() }}>
                    All
                </button>
                {categories.map((cat) => {
                    return <button className='btn btn-success'
                        key={cat}
                        onClick={() => { getProductsCategory(cat) }}
                    >
                        {cat}
                    </button>
                })}
            </div>
            <div className="container-fluid">
                <div className="row">
                    {products.map((product) => <div className="col-lg-3 col-md-4 col-12" key={product.id}>
                        <div className="card">
                            <div className="img"><Image src={product.image} /></div>
                            <div className="card-body">
                                <h6>{product.title}</h6>
                                <p className='price-item'>Price: {product.price}</p>
                                <Link to={`/product/${product.id}`} className='btn btn-danger'>Details</Link>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}