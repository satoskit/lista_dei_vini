FROM node:12.4.0-alpine 
#as build

RUN apk add --update-cache \
    python \
    python-dev \
    py-pip \
    build-base \
  && pip install virtualenv \
  && rm -rf /var/cache/apk/*

ONBUILD COPY . /app
ONBUILD RUN virtualenv /env && /env/bin/pip install -r /app/requirements.txt

WORKDIR /app

COPY package.json \
      package-lock.json \
      app.json ./
RUN npm install expo-cli
RUN npm install

COPY . .

# ARG REACT_APP_API_BASE_URL
ENV ADB_IP="192.168.1.1"
ENV REACT_NATIVE_HOSTNAME="192.168.1.78"

EXPOSE 19000
EXPOSE 19001

RUN apk update && \
  apk add --no-cache adb jq

RUN npm --network-timeout 100000

CMD adb connect $ADB_IP && \
  npm run android

RUN npm run build
