exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query MDX_NODE_QUERY {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to craete post', result.errors);
  }
  const pages = result.data.allMdx.nodes;
  pages.forEach(({ slug }) => {
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/page.jsx'),
      context: {
        slug: slug,
      },
    });
  });
};
