#docker image build -f ./Dockerfile.python.playground -t python3.9-buster --no-cache=true
FROM node:14.15.0-buster-slim

ENV APP_HOME /app
WORKDIR $APP_HOME

RUN apt-get update && apt-get install -y --no-install-recommends git apt-utils build-essential apt-transport-https ca-certificates
RUN update-ca-certificates
RUN yarn global add @vue/cli
RUN yarn global add @vue/cli-service-global
COPY . .

ENV PORT 3000

ENTRYPOINT ["yarn","serve"]