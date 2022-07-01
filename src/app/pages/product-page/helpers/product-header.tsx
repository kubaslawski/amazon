import {Link} from "react-router-dom";
import {IProduct} from "../../../../interfaces/products";

interface IProductHeader {
    product: IProduct
}


const ProductHeader: React.FC<IProductHeader> = ({product}) => {

    return (
        <span className='product-line'>
            <Link to={{pathname: `/category/${product.category.pk}`}}>
                {product.category.title}
            </Link>
                {' -> '}
            {product.sub_category && (
                <>
                    <Link to={{pathname: `/sub_category/${product.sub_category.id}`}}>
                        {product.sub_category.title}
                    </Link>
                    {' -> '}
                </>
            )}

            <Link to={{pathname: `/product/${product.id}`}}>
                {product.name}
            </Link>
        </span>
    )
}

export default ProductHeader
