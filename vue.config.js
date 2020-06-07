const path = require('path')

module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('@', path.resolve(__dirname, '.'));
        config.resolve.alias.set('@src', path.resolve(__dirname, 'src'));
        config.resolve.alias.set('@router', path.resolve(__dirname, 'src/router'));
        config.resolve.alias.set('@views', path.resolve(__dirname, 'src/router/views'));
        config.resolve.alias.set('@layouts', path.resolve(__dirname, 'src/router/layouts'));
        config.resolve.alias.set('@components', path.resolve(__dirname, 'src/components'));
        config.resolve.alias.set('@assets', path.resolve(__dirname, 'src/assets'));
        config.resolve.alias.set('@state', path.resolve(__dirname, 'src/state'));
        config.resolve.alias.set('@design', path.resolve(__dirname, 'src/design/index.scss'));
    } 
}