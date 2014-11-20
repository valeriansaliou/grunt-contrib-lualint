# grunt-contrib-lualint

Grunt task for validating Lua code.

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
  bashlint: {
    options: { force: true },
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

MIT
