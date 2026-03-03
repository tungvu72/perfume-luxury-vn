import { defineField, defineType } from 'sanity'

export const postType = defineType({
    name: 'post',
    title: 'Bài viết (Blog)',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tiêu đề',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mainImage',
            title: 'Ảnh bìa',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'categories',
            title: 'Danh mục',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Review', value: 'review' },
                    { title: 'Kiến thức', value: 'knowledge' },
                    { title: 'Hướng dẫn', value: 'guide' },
                    { title: 'Xu hướng', value: 'trend' },
                ],
            },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Ngày đăng',
            type: 'datetime',
            initialValue: (new Date()).toISOString(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Mô tả ngắn (SEO)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'body',
            title: 'Nội dung bài viết',
            type: 'blockContent',
        }),
    ],
})
