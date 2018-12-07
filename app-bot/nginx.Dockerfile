#FROM node:10
#COPY ["package.json", "package-lock.json", "/usr/app-bot/"]
#WORKDIR /usr/app-bot
#RUN npm i
#COPY [".", "/usr/app-bot/"]
#EXPOSE 80
#CMD [ "npm", "serve" ]

FROM nginx
COPY dist /usr/share/nginx/html

RUN rm -v /etc/nginx/conf.d/default.conf
ADD prod.nginx.conf /etc/nginx/conf.d/

EXPOSE 80

# docker build -t vue-web -f nginx.Dockerfile .
# docker run -d -p 8081:80 vue-web
# docker exec -it vue-web