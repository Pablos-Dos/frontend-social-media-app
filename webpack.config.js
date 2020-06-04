const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    // mode: 'development',
    // entry: {
    //   myfile: './src/engine.js'
    // },
    // output: {
    //   path: path.resolve(__dirname, 'build'),
    //   filename: 'js/main.js',
    //   publicPath: '/assets/'
    // },
    // devServer: {
    //   port: 1234,
    //   contentBase: path.join(__dirname, 'dist')
    // },
    module: {
        rules: [

          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                },
              },
            ],
          },

          {
                  test: /\.(js|jsx)$/,
                  exclude: /node_modules/,
                  use: {
                    loader: "babel-loader"
                  }
                },

                {
                        test: /\.html$/,
                        use: [
                          {
                            loader: "html-loader"
                          }
                        ]
                      },

            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
  new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  })
]
}
