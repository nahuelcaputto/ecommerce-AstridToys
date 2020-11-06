import React from 'react'
import ProductCard from '../_productCard/productCard';

const ProductList = ({product}) => {
    return (
        <div>
            <h2 className="py-3 pl-5">Catalogue</h2>
            <div className="d-flex flex-wrap ml-2 text-center">
                {product.map((p)=>(
                    <ProductCard product={p}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList;