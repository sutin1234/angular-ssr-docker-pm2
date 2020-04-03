module.exports = {
    apps : [{
      name: "angular_production",
      script: "./dist/angular-ssr-production/server/main.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }