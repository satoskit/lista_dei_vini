FROM node:12.4.0-alpine 
#as build

ENV ADB\_IP="192.168.78.1"
# ENV REACT\_NATIVE\_PACKAGER\_HOSTNAME="192.186.78.1"

RUN mkdir -p /app-client
WORKDIR /app-client

COPY package.json \
      package-lock.json \
      app.json ./
RUN npm install expo-cli --global --no-optional
# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install --no-optional \
    && apk del build-dependencies
# RUN npm install 

COPY App.js ./
COPY screens ./screens
COPY components ./components
COPY functions ./functions
COPY assets ./assets
COPY coverage ./coverage

# RUN npm set progress=false && \
    # npm install -g exp
CMD [ "expo", "start" ]

# RUN apk add --update-cache \
#     python \
#     python-dev \
#     py-pip \
#     build-base \
#   && pip install virtualenv \
#   && rm -rf /var/cache/apk/*

# ONBUILD COPY . /app
# ONBUILD RUN virtualenv /env && /env/bin/pip install -r /app/requirements.txt

# WORKDIR /app


# # ARG REACT_APP_API_BASE_URL
# ENV ADB_IP="192.168.1.1"
# ENV REACT_NATIVE_HOSTNAME="192.168.1.78"

# EXPOSE 19000
# EXPOSE 19001

# RUN apk update && \
#   apk add --no-cache adb jq

# RUN npm --network-timeout 100000

# CMD adb connect $ADB_IP && \
#   npm run android

# RUN npm run build
