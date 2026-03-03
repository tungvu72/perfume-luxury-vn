import type { StructureBuilder } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Quản trị Maison de SON')
        .items([
            S.documentTypeListItem('product').title('Nước hoa'),
            S.documentTypeListItem('brand').title('Thương hiệu'),
            S.documentTypeListItem('post').title('Bài viết Blog'),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) => item.getId() && !['product', 'brand', 'post'].includes(item.getId()!)
            ),
        ])
