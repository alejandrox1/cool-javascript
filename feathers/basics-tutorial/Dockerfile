FROM node:10.16.3

WORKDIR /app
RUN apt-get update -y \
    && apt-get install -y vim

USER node

ENTRYPOINT ["/bin/bash"]
