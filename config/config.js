var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-bookmarks'
    },
    port: 3000,
    db: 'postgres://localhost/node_bookmarks_development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-bookmarks'
    },
    port: 3000,
    db: 'postgres://localhost/node_bookmarks_test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-bookmarks'
    },
    port: 3000,
    db: 'postgres://localhost/node_bookmarks_production'
    
  }
};

module.exports = config[env];
