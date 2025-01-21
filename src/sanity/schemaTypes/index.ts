import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import chef from './chef'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, chef],
}
