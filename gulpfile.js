var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browserSync',['css'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
	gulp.watch('css/*css',['css']);
	gulp.watch('./*html').on('change',browserSync.reload);
});

// or...

/*gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
});*/
gulp.task('css',function(){
	gulp.src(['css/*css'])
	.pipe(gulp.dest('css-sdt/'))
	.pipe(browserSync.reload({
		stream: true
	}))
	
})
gulp.task('default',['browserSync']);