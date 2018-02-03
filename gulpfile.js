'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const inject = require('gulp-inject');
const argv = require('yargs').argv;
const runSequence = require('run-sequence');
const clean = require('gulp-clean');
 

let isProduction = (argv.prod === undefined) ? false : true;
let date = new Date();

const pathProd = ["./min-js/*.js"];
const pathDev  = [
  "./app.js",
  "./utils/**/*.module.js",
  "./utils/**/*.routes.js",
  "./utils/**/*.factory.js",
  "./utils/**/*.service.js",
  "./utils/**/*.controller.js",
  "./pages/**/*.module.js",
  "./pages/**/*.routes.js",
  "./pages/**/*.factory.js",
  "./pages/**/*.service.js",
  "./pages/**/*.controller.js",
]

gulp.task('sass',  () => {
  return gulp.src(['./app.scss','./pages/**/*.scss'])
    .pipe(concat('app.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('clean-files', function () {
  if(isProduction){
      console.log("Removendo arquivo de minificação ...");
      return gulp.src('./min-js/*.js')
      .pipe(clean({force: true}))
      //.pipe(gulp.dest('../webapp/min-js/backup-min-js/'));
  }else{
      return null;
  }
});  

// Minificação  dos Arquivos JS.
gulp.task("minify-js", () => {
  if(isProduction){
      console.log("Minificando aquivos JS para produção...");
      return gulp.src(pathDev)
      .pipe(concat("script."+date.getTime()+".min.js"))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write()) 
      .pipe(gulp.dest("./min-js/"));
  }else{
      return null;
  }
});


gulp.task('index', () => {
  if(isProduction)
  console.log("Adicionando dependência do aquivo minificado no index.html");
  else
  console.log("Adicionando dependência dos aquivo JS de desenvolvimento no index.html");

  let target = gulp.src('./index.html');
  let path = (isProduction) ?  pathProd : pathDev;
  let sources = gulp.src(path, {read: false});
 
  return target.pipe(inject(sources,{relative: true}))
    .pipe(gulp.dest('./'));

});

gulp.task('managerjs',() => {
  runSequence('clean-files','minify-js', 'index', () => {
      console.log("Fim ! :D");
  });
})
 
gulp.task('help', ()=>{
  console.log('Task List')
  console.log('Task para compilar os aquivos ".scss" : gulp sass');
  console.log('Task para minificar todos os js para enviar para produção: gulp genaratejs --prod');
  console.log('Task para a adicionar todos os js para o index.html: gulp genaratejs');
})

gulp.task('default', ['help'])

gulp.task('sass:watch', function () {
  gulp.watch(['./pages/**/*.scss','./app.scss'], ['sass']);
});

gulp.task('managerjs:watch', function () {
  if(isProduction)
  gulp.watch(pathDev, ['genaratejs']);
  else
  console.log('Reinicie o comando com  o "--prod"')
});