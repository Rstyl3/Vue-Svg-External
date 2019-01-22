# svg-icons3
Using svg and importing external svg files. Using [vue-svg-loader](https://vue-svg-loader.js.org) dependency and special config  
more options here: https://github.com/svg/svgo   
### Basic config:   
<code>vue.config.js</code>
```javascript
module.exports = {
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
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
