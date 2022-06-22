import {Link} from "react-router-dom";
import {IProduct} from "../../../../interfaces/products";

interface IProductHeader {
    product: IProduct
}


const ProductHeader: React.FC<IProductHeader> = ({product}) => {

    return (
        <span className='product-line'>
        <Link to={{pathname: `/category/${product.category.value}`}}>
            {product.category.label}
        </Link>
            {' -> '}
            <Link to={{pathname: `/product/${product.id}`}}>
            {product.name}
        </Link>
        </span>

    )
}

export default ProductHeader
