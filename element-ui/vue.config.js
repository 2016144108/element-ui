module.exports = {
    publicPath:'./',
    outputDir:'dist',
    assetsDir:'static',
    devServer: {
        proxy: {
            '/business': {
                target: 'https://rw.stavrlink.com/', //API服务器的地址
                ws: true, //代理websockets
                changeOrigin: true, // 虚拟的站点需要更管origin
                pathRewrite: {  //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                    '^/api': ''
                }
            }
        },
    },
}
