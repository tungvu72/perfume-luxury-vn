import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContent'
import { productType } from './product'
import { brandType } from './brand'
import { postType } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [blockContentType, productType, brandType, postType],
}
