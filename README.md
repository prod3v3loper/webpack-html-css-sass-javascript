# Webpack-HTML-CSS-SASS-JavaScript

You can find the tutorial here:
[Webpack Project Example](https://www.tnado.com/blog/webpack-project-example/)

The following files can be used and edited here:

* HTML
* CSS
* SASS
* JavaScript

This package includes the following:

package.json
```
    "devDependencies": {
        "clean-webpack-plugin": "^0.1.19",
        "css-loader": "^0.28.11",
        "html-webpack-plugin": "^3.2.0",
        "node-sass": "^4.8.3",
        "sass-loader": "^6.0.7",
        "style-loader": "^0.20.3",
        "webpack": "^4.28.4",
        "webpack-cli": "^3.2.1",
        "webpack-dev-server": "^3.1.10",
        "webpack-merge": "^4.1.4"
    }
```

# INSTALL

You can download the project and start it directly.
Create a Project folder and open your Terminal, to switch in the project folder.
```
cd /Users/username/project/path/
```
And now install all Dev Dependencies in package.json
```
npm install
```

# USE
We added commands in our package.json to run with npm instead of npx

package.json
```
    "scripts": {
        "server": "webpack-dev-server --open --config webpack.dev.js",
        "build": "webpack --config webpack.pro.js"
    },
```

And this we use in which we npm run and our command names.
This command start the Server with the hotmodule.
```
npm run server
```
This command build the dist folder with the end product.
```
npm run build
```

# Contribute

Please [file an issue](https://github.com/prod3v3loper/Webpack-HTML-CSS-SASS-JavaScript/issues) if you
think something could be improved. Please submit Pull Requests when ever
possible.

# Authors

* **Samet Tarim** - *All works* - [ProDeveloper](https://www.tnado.com/author/prod3v3loper/)

# License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)