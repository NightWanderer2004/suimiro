module.exports = config => {
   config.addFilter('limit', (array, limit) => array.slice(0, limit))

   config.addPassthroughCopy('src/posts')
   config.addPassthroughCopy('src/assets')
   config.addPassthroughCopy('src/scripts')
   config.addPassthroughCopy('src/CNAME')

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
