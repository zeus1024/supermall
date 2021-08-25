module.exports = {
  publicPath: './' ,
  configureWebpack: {
    resolve: {
      alias: {
        "assets" : "@/assets",
        "components": "@/components",
        "views": "@/views",
        "network": "@/network",
      }
    }
  }
}

// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         'assets': '@/assets',
//         'common': '@/common',
//         'components': '@/components',
//         'network': '@/network',
//         'views': '@/views',
//       }
//     }
//   }
// }

