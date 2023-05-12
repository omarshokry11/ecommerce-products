import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import "./Style/Product.scss";

export default function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(1);
    const params = useParams();
    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then((res) => res.json())
            .then((product) => setProduct(product));
    }, [])

    return (
        <div className="main-product-details text-center">
            <div className="product-details">
                <div className="img"><Image src={product.image} /></div>
                <div className="details-body">
                    <h4>Title: {product.title}</h4>
                    <p className='price-item'>Description: {product.description}</p>
                    <h6 className='price'>Price: {product.price * count}</h6>
                    <div className='count'>
                        <button onClick={() => setCount(count + 1)}>+</button>
                        <span>{count}</span>
                        {count === 1 ? <button>-</button> : <button onClick={() => setCount(count - 1)}>-</button>}

                    </div>
                    <button className='btn btn-danger buy'>add to cart</button>
                </div>
            </div>
        </div>
    )
}