// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'pinterest clone',
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      /* These are the default options. You don't need to set any options to get going.*/
      options: {
        // tailwindConfig: './some/file/js',
        // purgeConfig: {},
        // presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        // shouldTimeTravel: true,
        // shouldPurgeUnusedKeyframes: true,
      }

    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
