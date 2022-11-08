import { PrismaClient } from '@prisma/client'
import { ProductDetails } from './ProductDetails'
import styles from './page.module.css'

interface IProductDetailsPageProps {
  params: {
    productId: string
  }
}

export default async function ProductDetailsPage({ params }: IProductDetailsPageProps) {
  const prisma = new PrismaClient()
  const product = await prisma.product.findFirst({ where: { id: +params.productId } })

  if (!product) throw new Error('Product not found!')

  return (
    <div className={styles.container}>
      <header>
        <h1>Product Details Page</h1>
      </header>
      <ProductDetails product={product} />
    </div>
  )
}
