const path = require('path')

const  postCSSPlugins  = [
   require ('postcss-import') ,       //loads only parent css file and contents of imported css file instead of loading all css file in browser
   require ('postcss-mixins'),        /*Helps working with @media queries in css which makes it easier. '@media{}' adjust the size of elements according to screen size defines\
                                      Example: @media(min-width){font-size:3.8rem;}
                                      */
   require ('postcss-simple-vars'),   
   require ('postcss-nested'),        // Helps to create nested css which is not supported in browser
   require ('autoprefixer')                  //npm install postcss-simple-vars postcss-nested autoprefixer --save-dev                                           //npm install postcss-import --save-dev
]

module.exports = {
    entry :'./app/assets/scripts/App.js',        // Location of file that need to be bundeled
    output:{
        filename : 'bundled.js',                 // Naming a File to be placed after bundling
        path : path.resolve(__dirname, 'app')    // set Location of bundeled file to be created
    },
  devServer: {
    before: function(app, server) {
      server._watch('./app/**/*.html')             // webpack reloads a browser when we save a chnage to our html file
    },
    contentBase: path.join(__dirname, 'app'),                       // Point to directory where we want webpack to serve up
    hot: true,                                     // Inject new css and javascript into browsers memory onfly without refresh
    port: 3000 ,
    host: '0.0.0.0'                                //View our site on any device  connected to the same WIFI/Network as the computers were working on
    
  },
  mode: 'development',                           // setting mode to development for avoiding unecessary messages in console(DEVELOPMENT PHASE)
  //watch: true,                                 // Doesn't need to run "webpack run dev" command every time to bundle new changes
  module:{
    rules:[                           //Configuring webpack for understanding and processing css files
      {
        test: /\.css$/i,              // rules for file ends(extension) with .css
        use: ["style-loader", "css-loader?url=false", { loader: "postcss-loader", options: { plugins: postCSSPlugins }  }]           // Uses Css loader package for unserstanding on bundle .css file and style laoder apply or uses the style in browser
      }                                                                                              //postcss is an empty canvas in which we can add postcss plugins
    ]
  }
}