// Dependencies
const gulp = require ('gulp');
const clean = require('gulp-clean');
const lab = require ('gulp-lab');
const ts = require ('gulp-typescript');
const tslint = require ('gulp-tslint');

const tsProject = ts.createProject ('tsconfig.json');

// Constants
const LAB_CONFIG =
	'--verbose ' +
	'--sourcemaps ' +
	'--colors ' +
	'--leaks';

// Tasks
gulp.task ('clean', () => gulp
	.src ('dist', { read: false })
	.pipe (clean ()));

gulp.task ('lint', () => gulp
	.src ('src/**/*.ts')
	.pipe (tslint ({ formatter: 'stylish' }))
	.pipe (tslint.report()));

gulp.task ('build', ['clean', 'lint'], () => gulp
	.src ('src/**/*.ts')
	.pipe (tsProject())
	.pipe (gulp.dest ('dist')));

gulp.task ('test', ['build'], () => gulp
	.src ('dist/test')
	.pipe (lab (LAB_CONFIG)));

gulp.task ('default', ['test']);
