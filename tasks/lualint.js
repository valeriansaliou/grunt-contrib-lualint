module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('lualint', 'Lint Lua files', function() {
    var exec = require('child_process').exec,
        done = this.async(),
        files = this.filesSrc,
        options = this.options({ force: false }),
        runs = 0;

    files.forEach(function(filepath) {
      grunt.verbose.writeln('Linting ' + filepath);

      exec('luac -p ' + filepath, function(err, stdout, stderr) {
        if(null !== err) {
          grunt.log.error('\n');
          grunt.log.error('Error in ' + filepath);

          if(stderr || stdout) {
            var output_split = (stderr + '\n' + stdout).trim().split('\n');

            for(var i = 0; i < output_split.length; i++) {
              grunt.log.error(output_split[i] ? ' - ' + output_split[i] : '');
            }
          }
        }

        if(++runs === files.length) {
          if(this.errorCount) {
            return done(options.force);
          }

          grunt.log.ok(files.length + ' file' + (files.length === 1 ? '' : 's') + ' lint free.');
          done();
        }
      }.bind(this));
    }.bind(this));
  });
};
