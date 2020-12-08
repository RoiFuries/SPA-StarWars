// //Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
// const path = require('path');
// //Archivo necesario para trabajar con HTML que lo requerimos del paquete que instalamos
// const HtmlWebPackPlugin = require('html-webpack-plugin');

// //Aquí se encuentra toda la configuración de lo que va a suceder y sera el modulo para exportar.
// module.exports = {
//     //Punto de entrada con su dirección y es aquí donde vive el código inicial y de aquí parte al desarrollo.
//     entry: './src/index.js',
//     //Donde se envía el proyecto estructurado y compilado listo para producción, este sera un objeto
//     output:{
//         //Ponemos la ruta del lugar donde se exportara el proyecto, usando el path que importamos
//         //con el dirname le decimos que donde se encuentre esta carpeta ahi creara la carpeta dist = distribution
//         path: path.resolve(__dirname, 'dist'),
//         /*le diremos como se llamaremos el archivo que vamos a crear donde estara el compilado final cuando
//         envienmos a produccion*/
//         filename: 'main.js'
//     },
//     /*trabajaremos sobre las extenciones que va a utilizar nuestro proyecto donde usaremos resolve
//     generando otro objeto*/
//     resolve: {
//         /*Pasamos un arreglo de las extenciones que vamos a utilizar*/
//         extensions: ['.js'],
//     },
//     /*creamos un modulo con las reglas necesarias de babel*/
//     module:{
//         /*estas seran las reglas que pasaremos por medio de un arreglo*/
//         rules: [
//             //Elementos que necesitamos
//             {
//                 /*Estructura de babel generando un test de como vamos a identificar estos archivos*/
//                 /*test que va a tener regex para establecer valores que queremos filtral de una ruta,
//                 de unos elementos o de los archivos que vamos a estar utilizando 
//                 / punto de entrada - extenciones js */
//                 test: /\.js?$/,
//                 //Exluimos la carpeta node_modules y todos los archivos js
//                 exclude: /node_modules/,
//                 /*utilizamos un loader o una configuracion establecida para trabajar todo nuestro codigo
//                 y es que el loader que instalamos de babel*/
//                 use: {
//                     loader: 'babel-loader',
//                 }
//             }

//         ]
//     },
//     //necestiamos establecer los plugin que vamos a utilizar
//     /*webpack plugin de html que nos va a permitir trabajar con estos archivos pasando un arreglo*/
//     plugins: [
//         /*instanciamos el plugin de html que instanciamos a inicio de este documento, pasandoles un 
//         arreglo y despues un objeto que vamos a llenar con la configuracion*/
//         new HtmlWebPackPlugin(
//             {
//                 //inject como vamos a un archivo html a injectar un valor 
//                 inject: true,
//                 //necesimos un template principal y le damos una ruta de este template base de html
//                 template: './public/index.html',
//                 /*ahora le decimos donde tiene que guardarlo y seria nuestra carpeta dist donde le damos
//                 un nombre*/
//                 filename: './index.html',
//             }
//         ),

//     ]
// }





// Oscar

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),
    new CopyWebpackPlugin([{
      from: './src/styles/styles.css',
      to: ''
    }])
  ]
}




// // MIO

// const path = require('path'); //Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
// const HtmlWebpackPlugin = require('html-webpack-plugin'); //Archivo necesario para trabajar con HTML.
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// module.exports = {  //Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.
//     entry: './src/index.js', //Punto de entrada con su dirección. Aquí vive el código inicial y de aquí parte al desarrollo.
//     output: { //Donde se envía el proyecto estructurado y compilado listo para producción.
//         path: path.resolve(__dirname, 'dist'),  //Creamos el lugar dónde se exportará el proyecto.
//         filename: 'main.js' //Este es el nombre del archivo final para producción.
//     },
//     resolve: {
//         extensions: ['.js'], //Extensiones que vamos a utilizar.
//     },
//     module: { //Se crea un modulo con las reglas necesarias que vamos a utilizar.
//         rules: [    //Reglas
//             {   // Estructura de Babel
//                 test: /\.js?$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
//                 exclude: /node_modules/,    //Excluimos la carpeta de node modules
//                 use: {
//                     loader: 'babel-loader',    //Utilizar un loader como configuración establecida.
//                 }
//             }
//         ]
//     },
//     plugins: [  //Establecemos los plugins que vamos a utilizar
//         new HtmlWebpackPlugin(   //Permite trabajar con los archivos HTML
//             {
//                 inject: true,   //Cómo vamos a inyectar un valor a un archivo HTML.
//                 template: './public/index.html',    //Dirección donde se encuentra el template principal
//                 filename: './index.html',    //El nombre que tendrá el archivo
//             }
//         ),
//         new CopyWebpackPlugin([{
//             from: './src/styles/styles.css',
//             to: ''
//         }])
//     ]
// }