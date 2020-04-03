![angular ssr pm2](https://www.cnc.io/assets/images/blog/angular_ssr/service_setting.png)
# angular9 ssr docker pm2
build angular ssr production with PM2

## Clone angular9 project
```bash
$ git clone https://github.com/sutin1234/angular-ssr-docker-pm2.git
$ cd angular-ssr-docker-pm2
```

## build and run docker & pm2
```bash
$ docker-compose up --build -d
$ http://localhost:4000
```

### Note
```bash
# at server.ts before build angular ssr please make sure use port 8000
# path to run dist/angular-project/server/main.js
```
