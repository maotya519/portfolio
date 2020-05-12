var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");

gulp.task("copy-third_party.clean", () => {
	return del("./third_party/**/*", {cwd: config.path.output});
});


gulp.task("copy-third_party.jquery", ["copy-third_party.clean"], () => {
	gulp.src("./jquery/dist/**/*", { cwd: config.path.node_modules })
		.pipe(gulp.dest("./third_party/jquery", { cwd: config.path.output }));
});

gulp.task("copy-third_party.mdbootstrap", ["copy-third_party.clean"], () => {
	gulp.src("./mdbootstrap/**/*", { cwd: config.path.node_modules })
		.pipe(gulp.dest("./third_party/mdbootstrap", { cwd: config.path.output }));
});

gulp.task("copy-third_party.@fortawesome", ["copy-third_party.clean"], () => {
	gulp.src("./@fortawesome/fontawesome-free/**/*", { cwd: config.path.node_modules })
		.pipe(gulp.dest("./third_party/@fortawesome", { cwd: config.path.output }));
});


gulp.task("copy-third_party", [
	"copy-third_party.jquery",
	"copy-third_party.mdbootstrap",
	"copy-third_party.@fortawesome"

]);
