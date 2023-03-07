export default {
    name: 'homeBanner',
    title: 'Home Banner',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            options: {
                isHighlighted: true
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'surname',
            title: 'Surname',
            type: 'string',
        },
        {
            name: 'jobPart1',
            title: 'Job part 1',
            type: 'string',
        },
        {
            name: 'jobPart2',
            title: 'Job part 2',
            type: 'string',
        },
    ]
}