import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '../../models'
import styles from './ProductCard.module.css'

interface IProductCardProps {
  product: IProduct
}

export function ProductCard({ product }: IProductCardProps) {
  return (
    <article className={styles.card}>
      <Image width={250} height={250} src={product.picture} alt={product.name} />
      <h2>{product.name}</h2>
      <p>
        <span>${product.price}</span>
      </p>
      <p>
        <Link href={`/products/${product.id}`}>View Details</Link>
      </p>
    </article>
  )
}
