# Spring React

Puting together the following technologies

## Technologies

1. Spring Boot Web
2. Spring Boot Thymeleaf
3. Spring Boot Security
4. Spring Boot Actuator
5. Spring Boot Devtools
6. Webpack
7. React
8. NodeJs


## Setup

### Puting the project together

```
npm install
./gradlew assemble
```


### Runnign the project

```
./gradlew bootRun
```

### Hot Deploy

You can modify anything in static resource while the `bootRun` task is running and then execute `processResources` and `Spring Boot Devtools` will take care of redeploying the project and reflecting your changes.

You can also modify anything in java code while  the `bootRun` task is running and then execute `compileJava` and `Spring Boot Devtools` will take care of redeploying the project and reflecting your changes.
