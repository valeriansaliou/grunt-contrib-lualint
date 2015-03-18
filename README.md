# grunt-contrib-lualint

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/valeriansaliou/grunt-contrib-lualint?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Grunt task for validating Lua code.


[![build status](https://ci.hakuma.holdings/projects/71/status.png?ref=master)](https://ci.hakuma.holdings/projects/71?ref=master)


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
