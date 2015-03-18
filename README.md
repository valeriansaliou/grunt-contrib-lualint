# grunt-contrib-lualint

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/valeriansaliou/grunt-contrib-lualint?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Grunt task for validating Lua code.


[![Build Status](https://semaphoreci.com/api/v1/projects/b0580a5f-c120-4481-a1dd-03dc56add6fa/376003/shields_badge.svg)](https://semaphoreci.com/valeriansaliou/grunt-contrib-lualint)


## Getting started

You need to have the `luac` command available on your system.

This plugin requires Grunt `~0.4.0`

```
npm install grunt-contrib-lualint --save-dev
```

```javascript
grunt.loadNpmTasks('grunt-contrib-lualint');
```

## Usage

```javascript
grunt.initConfig({
  lualint: {
    src: ['**/*.lua']
  }
});

grunt.loadNpmTasks('grunt-contrib-lualint');
```

### Options

#### force

Type: `Boolean` Default value: `false`

Set `force` to true to report errors but not fail the task.

## License

This package is published under the MIT license.
