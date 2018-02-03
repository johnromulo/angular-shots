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

const pathProd = ["./app/min-js/*.js"];
const pathDev  = [
  "./app/app.js",
  "./app/utils/**/*.module.js",
  "./app/utils/**/*.routes.js",
  "./app/utils/**/*.factory.js",
  "./app/utils/**/*.service.js",
  "./app/utils/**/*.controller.js",
  "./app/pages/**/*.module.js",
  "./app/pages/**/*.routes.js",
  "./app/pages/**/*.factory.js",
  "./app/pages/**/*.service.js",
  "./app/pages/**/*.controller.js",
  "!./app/pages/**/*.spec.js",
]

gulp.task('sass',  () => {
  return gulp.src(['./app/app.scss','./app/pages/**/*.scss','./app/components/**/*.scss'])
    .pipe(concat('app.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('clean-files', function () {
  if(isProduction){
      console.log("Removendo arquivo de minificação ...");
      return gulp.src('./app/min-js/*.js')
      .pipe(clean({force: true}))
      //.pipe(gulp.dest('../webapp/min-js/backup-min-js/'));
  }else{
      return null;
  }
});  

// Minificação  dos Arquivos JS.
gulp.task("minify-js", () => {
  if(isProduction){
      console.log("Minificando aquivos .js para produção...");
      return gulp.src(pathDev)
      .pipe(concat("script."+date.getTime()+".min.js"))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write()) 
      .pipe(gulp.dest("./app/min-js/"));
  }else{
      return null;
  }
});


gulp.task('index', () => {
  if(isProduction)
  console.log("Adicionando dependência do aquivo .js minificado ao index.html");
  else
  console.log("Adicionando dependência dos aquivos .js de desenvolvimento no index.html");

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
  console.log('Task para minificar todos os js para enviar para produção: gulp managerjs --prod');
  console.log('Task para a adicionar todos os js para o index.html: gulp managerjs');
})

gulp.task('default', ['help'])

gulp.task('sass:watch', function () {
  gulp.watch(['./app/pages/**/*.scss','./app/app.scss','./app/components/**/*.scss'], ['sass']);
});

gulp.task('managerjs:watch', function () {
  if(isProduction)
  gulp.watch(pathDev, ['managerjs']);
  else
  console.log('Reinicie o comando com  o "--prod"')
});