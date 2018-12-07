
FROM nginx
COPY dist /usr/share/nginx/html

RUN rm -v /etc/nginx/conf.d/default.conf
ADD prod.nginx.conf /etc/nginx/conf.d/

EXPOSE 80

# docker build -t vue-web -f nginx.Dockerfile .
# docker run --name app-v1 -d -p 8080:80 vue-web
