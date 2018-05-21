// Dependencies
const gulp = require ('gulp');
const babel = require ('gulp-babel');
const clean = require('gulp-clean');
const eslint = require ('gulp-eslint');
const lab = require ('gulp-lab');
const ts = require ('gulp-typescript');

const tsProject = ts.createProject ('tsconfig.json');

// Constants
const BABEL_CONFIG = {
	presets: [
		'@babel/env',
		'@babel/typescript'
	],
	plugins: [
		'@babel/proposal-class-properties',
		'@babel/proposal-object-rest-spread'
	]
};
const LAB_CONFIG =
	'--verbose ' +
	'--sourcemaps ' +
	'--colors ' +
	'--leaks';

// Tasks
gulp.task ('clean', () =>
	gulp
		.src ('dist', { read: false })
		.pipe (clean ()));

gulp.task ('typescript-check', () => gulp
	.src ('src/**/*.ts')
	.pipe (tsProject()));

gulp.task ('lint', () =>
	gulp
		.src ('src/**/*.ts')
		.pipe (eslint ())
		.pipe (eslint.format ())
		.pipe (eslint.failOnError()));

gulp.task ('build', ['lint', 'typescript-check', 'clean'], () =>
	gulp
		.src ([
			'src/**/*.ts',
			'!src/test/**'
		])
		.pipe (babel (BABEL_CONFIG))
		.pipe (gulp.dest ('dist')));

gulp.task ('build-tests', ['build'], () =>
	gulp
		.src ('src/test/**/*.ts')
		.pipe (babel (BABEL_CONFIG))
		.pipe (gulp.dest ('test')));

gulp.task ('test', ['build-tests'], () =>
	gulp
		.src ('test')
		.pipe (lab (LAB_CONFIG)));

gulp.task ('default', ['test']);
