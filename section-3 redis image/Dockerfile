# Use an existing base image
FROM alpine 

# Download Dependency

RUN apk add --update redis
RUN apk add --update gcc

#On Startup 

CMD ["redis-server"]