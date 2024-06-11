import { products } from '@/mocks/products'

export function filterProductsByCategory(category: string) {
  return products.filter((product) => product.category === category)
}

export function filterSingleProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}
