// import React from 'react';

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {Product} from "../../app/models/product.ts";

function ProductDetails() {

    const {id} = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetch(`https://localhost:5001/api/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err));
    }, [id])

    return (
        <div>{product?.name}</div>
    );
}

export default ProductDetails;