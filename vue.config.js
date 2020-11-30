const path = require('path');  //引如path模块
function resolve(dir) {
    return path.join(__dirname,dir)   //设置绝对路径
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
        //set第一个参数设置别名，第二个参数设置路径
            .set('@', resolve('./src'))
            .set('assets', resolve('./src/assets'))
            .set('components', resolve('./src/components'))
            .set('view',resolve('src/views'))
    }
}