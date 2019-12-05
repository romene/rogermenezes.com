const path = require('path');


module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blogTemplate.js');
    const res = await graphql(`
      {
  allContentfulBlogPost(
    sort: {fields: createdAt, order: ASC}
    )
{

    edges{
      node{
       slug
       id
      }
    }
  }
}
    `)

    res.data.allContentfulBlogPost.edges.forEach(item => {
      console.log(item)
        const slug = item.node.slug
        createPage({
            component: blogTemplate,
            path: `/blog/${slug}`,
            contenxt: {
                id: item.node.id
            }
        })
    })
}