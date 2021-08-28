module.exports = {
  publicPath: './' ,
  configureWebpack: {
    resolve: {
      alias: {
        "assets" : "@/assets",
        "components": "@/components",
        "views": "@/views",
        "network": "@/network",
        "common": "@/common",
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

