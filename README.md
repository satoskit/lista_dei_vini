# Lista dei Vini 

> This project is still work in progress.

## About the project
This is a graduation project for Java Enterprise Developer at Yrgo.  
The aim of the project was to build a mobile application, frontend with React Native and Expo CLI, backend with Java and Spring Boot, and PostgreSQL as database. 

## About the application
Have you ever had trouble remembering the wine you liked earlier when you are at a store?  
Lista dei Vini helps you to solve that problem! 

The application lets you create a list with wines which you liked. You can take a picture of the package of the wine that liked and save together with other information like name of the wine, producer, and year. You can also set a grade to see later if it was great or decent wine. By typing a name, it auto-complete the product information using the data from [Systembolaget](https://api-portal.systembolaget.se/docs/services/Product/operations/5cd7c7ceed1c2b121ce45b82, "Systembolaget Open API"). 

## Try on the computer (**work in progress**)
At the moment you can try on the computer using Docker-compose.  
But you need to modify IP address in several files (lista-dei-vini-client/functions/ipaddress.js, docker-compose.yml).

It also requires an account at Systembolaget and the subscription key to use their API.  
Then create a file called "application-secret.properties" and add a line `app.systembolaget.api.api-key=<your subscription key>` in the file.

