var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglify-es').default,
	cleancss     = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	rsync        = require('gulp-rsync'),
	handlebars	 = require('gulp-handlebars'),
	del          = require('del');

// Local Server
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		online: true, // Work offline without internet connection
		// tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
	})
});
function bsReload(done) { browserSync.reload(); done(); };

// Custom Styles
gulp.task('styles', function() {
	return gulp.src([
		'app/sass/**/*.sass'
	])
	.pipe(sass({
		outputStyle: 'expanded',
		includePaths: [__dirname + '/node_modules']
	}))
	.pipe(concat('styles.min.css'))
	.pipe(autoprefixer({
		grid: true,
		overrideBrowserslist: ['last 10 versions']
	}))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Optional. Comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

gulp.task('scripts', function() {
	return gulp.src([
		// 'node_modules/jquery/dist/jquery.min.js',

		// bootstrap
		// 'node_modules/bootstrap/dist/js/bootstrap.min.js',
		
		// data manipulations || docs: https://lodash.com
		//'node_modules/lodash/lodash.js',

		// form validation || docs: https://jqueryvalidation.org
		// 'node_modules/jquery-validation/dist/jquery.validate.js',
		// 'node_modules/jquery-validation/dist/localization/messages_ru.min.js',
		'app/js/_src/main.js'
	])
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('img', async function () {
	return gulp.src('app/img/src/**/*')
	.pipe(gulp.dest('app/img/'))
});

// Clean @*x IMG's
gulp.task('cleanimg', function() {
	return del(['app/img/*'], { force: true })
});

// Code & Reload
gulp.task('code', function() {
	return gulp.src('app/**/*.html')
	.pipe(browserSync.reload({ stream: true }))
});

// Deploy
gulp.task('rsync', function() {
	return gulp.src('app/')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Included files
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excluded files
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

gulp.task('watch', function() {
	gulp.watch('app/sass/main.sass', gulp.parallel('styles'));
	gulp.watch(['app/js/_src/main.js'], gulp.parallel('scripts'));
	gulp.watch('app/*.html', gulp.parallel('code'));
	gulp.watch('app/img/src/**/*', gulp.parallel('img'));
});

gulp.task('default', gulp.parallel('img', 'styles', 'scripts', 'browser-sync', 'watch'));
