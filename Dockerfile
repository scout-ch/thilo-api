###############################################################################################
# THILO API - BASE
###############################################################################################
FROM node:lts as thilo-api-base

RUN mkdir -p /docker
WORKDIR /srv/app

RUN apt-get update
RUN apt-get install dos2unix -y

###############################################################################################
# THILO API - PRODUCTION
###############################################################################################
FROM thilo-api-base as thilo-api-production

COPY ./docker/custom_entrypoint.sh /docker/custom_entrypoint.sh
RUN chmod +x /docker/custom_entrypoint.sh
RUN dos2unix /docker/custom_entrypoint.sh

COPY ./docker/set_env_secrets.sh /docker/set_env_secrets.sh
RUN chmod +x /docker/set_env_secrets.sh
RUN dos2unix /docker/set_env_secrets.sh

# Install strapi
COPY . .
RUN npm install
RUN npm run build

EXPOSE 1337
ENTRYPOINT [ "/docker/custom_entrypoint.sh" ]
