import React from "react";
import './search-result.scss';
import {Link} from "react-router-dom";
// others
import {IProduct} from "../../../interfaces/products";
import {baseAppUrl} from "../../variables";

interface ISearchResult {
    product: IProduct
}

const SearchResult: React.FC<ISearchResult> = ({product}) => {

    return (
        <Link
            to={{
                pathname: `/product/${product.id}`
            }}>
            <div className={'search-result'}>
                    <img className={'search-result__image'} src={`${baseAppUrl}${product.photo}`} alt={'product-preview'}/>
                    <span>{product.category.title}</span>
                    {product.sub_category && (
                        <span>{`-> ${product.sub_category.title}`}</span>
                    )}
                    <span>{`-> ${product.name}`}</span>
            </div>
        </Link>
    )
}

export default SearchResult;