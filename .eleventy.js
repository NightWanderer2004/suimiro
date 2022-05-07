module.exports = (config) => {
   config.addPassthroughCopy('./src/styles/output.css')
   config.addPassthroughCopy('./src/scripts')
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
