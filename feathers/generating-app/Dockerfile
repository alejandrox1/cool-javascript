FROM node:10.16.3

WORKDIR /app
RUN apt-get update -y \
    && apt-get install -y vim \
    && npm install @feathersjs/cli -g 

USER node

ENTRYPOINT ["/bin/bash"]
