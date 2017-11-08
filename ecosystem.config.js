module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'admin',
      error_file: "/var/log/pm2/err.log",
      out_file  : "/var/log/pm2/out.log",
      script    : '/home/vagrant/admin/bin/www',
      env: {
        PORT: 8080,
        NODE_ENV: 'staging',
        SECRET:'keyboard cat'
      },
    },
    {
      name      : 'web',
      error_file: "/var/log/pm2/web/err.log",
      out_file  : "/var/log/pm2/web/out.log",
      script    : '/home/vagrant/admin/server.js',
      env: {
        PORT: 8081,
        NODE_ENV: 'staging',
        SECRET:'gordon lightfoot'
      },
    },
  ]
};
