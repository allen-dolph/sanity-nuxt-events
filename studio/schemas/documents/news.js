import icon from 'react-icons/lib/md/assignment'

export default {
    name: 'news',
    type: 'document',
    title: 'News',
    icon,
    fields: [
        {
            name: 'headline',
            type: 'string',
            'title': 'Headline'
        },
        {
          name: 'image',
          type: 'mainImage',
          title: 'Image'
        },
        {
          name: 'summary',
          type: 'text',
          title: 'Short summary',
          description: 'For previews, social media etc.'
        },
        {
          name: 'article',
          type: 'bodyPortableText',
          title: 'Article',
          description: 'Full article content'
        }
    ],
    preview: {
      select: {
        title: 'headline',
        subtitle: 'summary',
        media: 'image'
      },
      prepare ({title, subtitle, media}) {
        return {
          title,
          media,
          subtitle
        }
      }
    }
}
