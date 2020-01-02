import gulp from "gulp";
import webpackstream from "webpack-stream";

import { plugins, args, config, taskTarget, browserSync } from "../utils";

import webpackConfig from "../webpack.config";

const dirs = config.directories;
const entries = config.directories.entries;

gulp.task("scripts", () => {
	return gulp
		.src(`${dirs.source}${dirs.app}${entries.script}`)
		.pipe(webpackstream(webpackConfig))
		.pipe(gulp.dest(`${taskTarget}/${dirs.scripts}`));
});
