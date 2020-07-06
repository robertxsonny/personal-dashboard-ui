module.exports = {
  client: {
    service: {
      name: 'pd-app',
      // URL to the GraphQL API
      url: process.env.VUE_APP_GRAPHQL_ENDPOINT,
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}
