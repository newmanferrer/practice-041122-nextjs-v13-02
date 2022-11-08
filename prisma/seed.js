const { PrismaClient } = require('@prisma/client')

async function seed() {
  const prisma = new PrismaClient()
  await prisma.product.deleteMany()
  await prisma.product.create({
    data: {
      name: 'Gold Cap - Limited Edition',
      price: 29.99,
      picture: '/images/OCTO_GOLD_1_882x882.webp',
      brand_name: 'GitHub',
      brand_logo: '/images/GITHUB_LOGO.webp',
      stock: 73,
      description:
        '100% Washed Chino Cotton Twill Unstructured Cap with a tone-on-tone invertocat for a simple and classy hat to cap off any wardrobe choice.'
    }
  })
  await prisma.product.create({
    data: {
      name: 'Black Cap - Limited Edition',
      price: 39.99,
      picture: '/images/OCTO_BLACK_1_882x882.webp',
      brand_name: 'GitHub',
      brand_logo: '/images/GITHUB_LOGO.webp',
      stock: 73,
      description:
        'This classic structured TravisMathew logo cap with a tone-on-tone invertocat logo will cap off any attire.'
    }
  })
  await prisma.product.create({
    data: {
      name: 'Sticker Packs',
      price: 5.0,
      picture: '/images/stickers_packs_sampler_882x882.webp',
      brand_name: 'GitHub',
      brand_logo: '/images/GITHUB_LOGO.webp',
      stock: 73,
      description:
        '*Pssst*  Yeah, you over there.  That one sticker on your laptop is looking mighty lonely.  Check out these sticker packs with some of our most loved stickers.'
    }
  })
  await prisma.product.create({
    data: {
      name: 'Octocat Figurine',
      price: 30.0,
      picture: '/images/Small_Octocat_882x882.webp',
      brand_name: 'GitHub',
      brand_logo: '/images/GITHUB_LOGO.webp',
      stock: 73,
      description:
        'For years, the Octocat has been stuck in the realm of two dimensions—but no more! Now she’s crawling off your laptop and onto your desk as a 5" vinyl figurine.'
    }
  })
  await prisma.product.create({
    data: {
      name: 'Invertocat Hoodie',
      price: 59.99,
      picture: '/images/Invertocat_2.0_Hoodie_Mock_GithubShop-1_882x882.webp',
      brand_name: 'GitHub',
      brand_logo: '/images/GITHUB_LOGO.webp',
      stock: 73,
      description:
        'Sometimes coding requires working in cold environments. Its often hard to find objects which will help combat that pesky chill. Sure, you could wear fingerless gloves or a sweatervest, but why settle for garments that make you look like you cant afford fingers or sleeves. If only someone would create a body covering with a hood type of device to cover your head.'
    }
  })
  await prisma.product.create({
    data: {
      name: 'Octocat Laptop Decals',
      price: 5.0,
      picture: '/images/Chloe-Jackman-Photography-Github-laptop-Decals-2017-9_882x882.webp',
      brand_name: 'GitHub',
      brand_logo: '/images/GITHUB_LOGO.webp',
      stock: 73,
      description:
        'Mona is here to save the day—and save your laptop from blending in. Choose from two game-inspired designs: Boxing Mona is ready to knock out tasks with a one-two punch and Adventure Mona is fearlessly leading the way to her next ship. Decals work for all laptop brands and come in small for 11"-13" laptops or large for 15 inch - 17 inch laptops.'
    }
  })
}

seed()
