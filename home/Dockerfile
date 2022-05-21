FROM nginxinc/nginx-unprivileged@sha256:a581d0821f38e5b211a5397d3f204eee2e2f9ac89335ffb5002a488603b1b69b
# image tag nginxinc/nginx-unprivileged:1.21.6-alpine-perl
user root
RUN apk --no-cache add git
RUN apk --no-cache add npm
RUN mkdir /app
COPY git_password /app/
RUN mkdir /usr/share/nginx/html/sites
RUN chown nginx:nginx /usr/share/nginx/html/sites
user nginx
COPY --chown=nginx:nginx src/ /usr/share/nginx/html/
RUN git config --global pull.ff only
RUN git config --global credential.http://onedev:6610.username cabinet
WORKDIR /usr/share/nginx/html/
EXPOSE 8080
CMD ["nginx","-g","daemon off;"]
