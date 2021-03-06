// eslint-disable-next-line no-undef
module.exports = {
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')

        svgRule.uses.clear()

        svgRule
            // .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },
    css: {
        extract: false
    }
}
