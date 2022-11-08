import { ProductCard } from './ProductCard'
import { IProduct } from '../../models'
import styles from './ProductsList.module.css'

interface IProductsListProps {
  products: IProduct[]
}

export function ProductsList({ products }: IProductsListProps) {
  return (
    <>
      <div className={styles.container}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
