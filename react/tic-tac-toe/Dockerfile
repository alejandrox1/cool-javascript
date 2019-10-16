FROM node:8.16.2

WORKDIR /app
RUN apt-get update -y \
    && apt-get install -y vim

USER node

ADD ./my-app /app/my-app/

ENTRYPOINT ["/bin/bash"]
