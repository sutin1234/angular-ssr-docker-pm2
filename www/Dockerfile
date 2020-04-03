FROM keymetrics/pm2:latest-alpine

RUN mkdir -p /var/www/html && chown -R node:node /var/www/html
RUN mkdir -p /var/www/html/node_modules && chown -R node:node /var/www/html/node_modules
WORKDIR /var/www/html
USER node

COPY package.json .
COPY ecosystem.config.js .
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production
EXPOSE 8000

RUN ls -al -R

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]