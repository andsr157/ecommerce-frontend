export interface FeatureType {
  title: string
}

export type cartProduct = {
  id: number
  title: string
  price: number
  quantity: number
  total: number
}

export type CartType = {
  id: number
  products: cartProduct[]
  total: number
  totalProducts: number
}

export type ProductType = {
  id: number
  title: string
  price: number
  description: string
  discountpercentage: number
  rating: number
  stock: number
  category: string
  brand: string
  thumbnail: string
  images: string[]
  image: string
}

export interface productProp {
  color: Array<{
    name: string
    code: string
    isAvailable: boolean
    isactive: boolean
  }>
  size: Array<{
    unit: string
    isAvailable: boolean
    isactive: boolean
  }>
}

export interface FooterLinkType {
  heading: string
  links: []
}
