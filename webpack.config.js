module.exports = {
    entry: "./app/index.jsx"
    , output: {
        path: __dirname + "/public/"
        , filename: "bundle.js"
    }

    , devServer: {
        inline: true
        , port: 8010
        , contentBase: __dirname + "/public/"
        , hot: true
    }
    , module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    'env',
                    'react',
                    'stage-0'
                ],
            },
            exclude: ['/node_modules'],
        }],
    }

    , resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css']
    }

};