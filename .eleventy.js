module.exports = (config) => {
   config.addFilter('limit', (array, limit) => {
      return array.slice(0, limit)
   })
   config.addPassthroughCopy('src/img')
   config.addPassthroughCopy('src/scripts')
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
