export const product ={
    title: 'Product',
    name: 'product',
    type: 'document',
    fields: [
        {
        title: 'Name',
        name: 'name',
        type: 'string',
        },
        {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
            source: 'name',

        }
       },
        {
        title: 'Price',
        name: 'currentPrice',
        type: 'number',
        },
        {
            name: 'originalPrice',
            type: 'number',
            title: 'Original Price',
            description: 'Price before discount (if any)',
        },
        {
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
            options: {
              layout: 'tags',
            },
            description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
          },
                {
        name: 'available',
        type: 'boolean',
        title: 'Available',
        description: 'Availability status of the food item',
      },
        {
        title: 'Image',
        name: 'image',
        type: 'array',
        of: [{type: 'image'}],
        },
        {
        title: 'Description',
        name: 'description',
        type: 'text',
        },

    ],
}