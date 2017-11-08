module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'admin',
      cwd       : '/home/vagrant/admin/',
      script    : './bin/www',
      env: {
        PORT: 8080,
        NODE_ENV: 'staging',
        SECRET:'keyboard cat'
      },
    },
  ]
};
