import { defineField, defineType } from 'sanity'

export const brandType = defineType({
    name: 'brand',
    title: 'Thương hiệu',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Tên thương hiệu',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Mô tả ngắn',
            type: 'text',
            rows: 4,
        }),
    ],
})
