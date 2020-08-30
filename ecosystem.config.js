module.exports = {
  apps : [{
    name:'app',
    script:'app.js',
    watch: '.',
    ignore_watch: [
      'node_modules',
      'logs'
    ],
  }],
  env_pro: {
    "NODE_ENV": "prod",
    "REMOTE_ADDR": ""
  },
  env_dev: {
    "NODE_ENV": "dev",
    "REMOTE_ADDR": ""
  },
  env_test: {
    "NODE_ENV": "test",
    "REMOTE_ADDR": ""
  },
  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
