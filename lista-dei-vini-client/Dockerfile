FROM node:12.16.3-buster-slim
#as build

#ENV ADB_IP="192.168.78.1"
# ENV REACT\_NATIVE\_PACKAGER\_HOSTNAME="192.186.78.1"

RUN mkdir -p /app-client
WORKDIR /app-client

COPY package.json \
      package-lock.json \
      app.json ./
RUN npm install expo-cli --global --no-optional
# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apt-get update \
    && apt install -y --no-install-recommends build-essential \
    procps \
    python \
   # make \
    #g++ \
    android-tools-adb \
    && npm install --no-optional --no-audit \
    && apt -y remove build-essential
# RUN npm install

COPY App.js ./
COPY screens ./screens
COPY components ./components
COPY functions ./functions
COPY assets ./assets
COPY web-build ./web-build
COPY babel.config.js ./
COPY coverage ./coverage

# RUN npm set progress=false && \
    # npm install -g exp
# CMD [ "expo", "start" ]
CMD adb connect $ADB_IP \
    && expo start