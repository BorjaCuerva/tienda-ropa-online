import { products } from '@/mocks/products'

export function filterProducts(category: string) {
  return products.filter((product) => product.category === category)
}
