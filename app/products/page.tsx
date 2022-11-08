import { PrismaClient } from '@prisma/client'
import { ProductsList } from './ProductsList'
import styles from './page.module.css'

export default async function ProductsPage() {
  const prisma = new PrismaClient()
  const products = await prisma.product.findMany()

  return (
    <div className={styles.container}>
      <header>
        <h1>OUR PRODUCTS</h1>
      </header>
      <ProductsList products={products} />
    </div>
  )
}
