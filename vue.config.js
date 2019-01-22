module.exports = {
    outputDir: 'docs',
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
            .options({
                svgo: {
                    plugins: [
                        {removeDoctype: true},
                        {removeComments: true},
                        {cleanupIDs: false},
                        {collapseGroups: false},
                        {removeEmptyContainers: false},
                        {removeViewBox: false},
                        {removeDimensions: true},
                    ],
                },
            });
    },
};

// module.exports = {
//     chainWebpack: (config) => {
//         const svgRule = config.module.rule('svg');

//         svgRule.uses.clear();

//         svgRule
//             .use('vue-svg-loader')
//             .loader('vue-svg-loader');
//     },
//     configureWebpack: {
//         module: {
//             rules: [{
//                 test: /\.svg$/,
//                 loader: 'vue-svg-loader',
//                 options: {
//                     svgo: {
//                         plugins: [{
//                             removeDimensions: true
//                         }, {
//                             removeViewBox: false
//                         }]
//                     }
//                 }
//             }, ],
//         }
//     }
// };