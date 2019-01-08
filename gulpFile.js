//引入gulp模块
const gulp=require("gulp");
const uglify=require("gulp-uglify");
const htmlin=require("gulp-htmlmin");
const babel = require("gulp-babel");
const connect=require("gulp-connect");
const sass = require("gulp-sass");
const cleanCss = require("gulp-clean-css");

//制定任务
gulp.task("css",function(){
	gulp.src("src/scss/**/*.scss")
	.pipe(sass())
	.pipe(cleanCss())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
//压缩js
gulp.task("js", function(){
	gulp.src("src/js/**/*.js")
		.pipe(babel({
		    presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"))
		.pipe(connect.reload());
})
//压缩html
gulp.task("html",function(){
	gulp.src("src/**/*.html")//这样写就可以把所有的html传到dist中了
	.pipe(htmlin({  removeComments: true,//清除HTML注释
               collapseWhitespace: true,//压缩HTML
               collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
               removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
               removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
               removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
               minifyJS: true,//压缩页面JS
               minifyCSS: true//压缩页面CSS 
               }))
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());

})
//链接服务器
gulp.task("server",function(){
	connect.server({
		port:1915,
		livereload:true,
		root:"dist"
		
	})
})
//监听
gulp.task("watch",function(){
	gulp.watch("src/scss/**/*.scss",["css"])
	gulp.watch("src/js/**/*.js", ["js"]);
	gulp.watch("src/**/*.html", ["html"]);
})
//把图片转移到dist
gulp.task("static", function(){
	gulp.src("src/static/**/*")
	.pipe(gulp.dest("dist/static"))
	.pipe(connect.reload());
})
gulp.task("font", function(){
	gulp.src("src/font/**/*")
	.pipe(connect.reload())
	.pipe(gulp.dest("dist/font"));
})
gulp.task("libs",function(){
	gulp.src("src/libs/**/*")
	.pipe(gulp.dest("dist/libs"))
	.pipe(connect.reload())
})
gulp.task("api",function(){
	gulp.src("src/api/**/*")
	.pipe(gulp.dest("dist/api"))
	.pipe(connect.reload())
})

//任务全部执行
gulp.task("default",["js","html","server","watch","font","css","libs","static","api"]);
//！！！如果，相关js模块有语法错误，gulp不能成功对该模块进行操作
