import Image from 'next/image'
import { IProduct } from '../../../models'
import styles from './ProductDetails.module.css'

interface IProductDetailsProps {
  product: IProduct
}

export function ProductDetails({ product }: IProductDetailsProps) {
  return (
    <article className={styles.article}>
      <header>
        <Image width={350} height={350} src={product.picture} alt={product.name} />
        <h2>{product.name}</h2>
        <p>
          <span>Price: ${product.price}</span>
        </p>
        <p>
          <span>Stock: {product.stock} units</span>
        </p>
      </header>
      <p>{product.description}</p>
    </article>
  )
}
