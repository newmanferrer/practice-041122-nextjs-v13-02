import { PrismaClient } from '@prisma/client'

interface IProductHeadProps {
  params: {
    productId: string
  }
}

export default async function ProductHead({ params }: IProductHeadProps) {
  const prisma = new PrismaClient()
  const product = await prisma.product.findFirst({ where: { id: +params.productId } })

  if (!product) throw new Error('Issue not found!')

  return (
    <>
      <title>{`Details Page | ${product.name}`}</title>
      <meta name='description' content={`Details Page | ${product.name}`} />
    </>
  )
}
