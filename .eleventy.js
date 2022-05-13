module.exports = (config) => {
   config.addFilter('limit', (array, limit) => {
      return array.slice(0, limit)
   })
   return {
      dir: {
         input: 'src',
         output: 'dist',
         includes: 'includes',
         layouts: 'layouts',
         data: 'data',
      },
   }
}
