const webpack = require("webpack");
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
const { store } = require(`./node_modules/gatsby/dist/redux`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    let slugPath = "";
    const separatorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separatorIndex ? separatorIndex + 2 : 0;

    if (node.frontmatter && node.frontmatter.slug) {
      slugPath = node.frontmatter.slug;
    } else {
      slugPath = `${separatorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`;
    }

    createNodeField({
      node,
      name: `slug`,
      value: slugPath
    });
    createNodeField({
      node,
      name: `prefix`,
      value: separatorIndex ? slug.substring(1, separatorIndex) : ""
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve("./src/templates/PostTemplate.js");
    const pageTemplate = path.resolve("./src/templates/PageTemplate.js");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: { id: { regex: "//posts|pages//" }, frontmatter: { draft: { ne: true } } }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                    prefix
                  }
                  frontmatter {
                    draft
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create posts and pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          const slug = edge.node.fields.slug;
          const isPost = /posts/.test(edge.node.id);
          createPage({
            path: slug,
            component: isPost ? postTemplate : pageTemplate,
            context: {
              slug: slug
            }
          });
        });
      })
    );
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "build-javascript":
      {
        let components = store.getState().pages.map(page => page.componentChunkName);
        components = _.uniq(components);
        config.plugin("CommonsChunkPlugin", webpack.optimize.CommonsChunkPlugin, [
          {
            name: `commons`,
            chunks: [`app`, ...components],
            minChunks: (module, count) => {
              const vendorModuleList = []; // [`material-ui`, `lodash`];
              const isFramework = _.some(
                vendorModuleList.map(vendor => {
                  const regex = new RegExp(`[\\\\/]node_modules[\\\\/]${vendor}[\\\\/].*`, `i`);
                  return regex.test(module.resource);
                })
              );
              return isFramework || count > 1;
            }
          }
        ]);
        // config.plugin("BundleAnalyzerPlugin", BundleAnalyzerPlugin, [
        //   {
        //     analyzerMode: "static",
        //     reportFilename: "./report/treemap.html",
        //     openAnalyzer: true,
        //     logLevel: "error",
        //     defaultSizes: "gzip"
        //   }
        // ]);
      }
      break;
  }
  return config;
};

exports.modifyBabelrc = ({ babelrc }) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([`syntax-dynamic-import`, `dynamic-import-webpack`])
  };
};
