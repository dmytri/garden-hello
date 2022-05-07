FROM nginx@sha256:efc09388b15fb423c402f0b8b28ca70c7fd20fe31f8d7531ae1896bbb4944999
# image tag nginx:1.21.6-alpine
COPY src/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
