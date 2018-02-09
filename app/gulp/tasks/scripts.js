var gulp=require('gulp'),
webpack=require('webpack');

gulp.task('scripts',['modernizr'],function(callback){
    console.log("JFJ");
    webpack(require("../../../webpack.config.js"),function(err,stats){
        if (err){
            console.log(err.toString());
        }

        console.log(stats.toString());
        console.log("Hooray, completed!");
        callback();
    });
});