FROM  node:latest

WORKDIR /app
COPY ["package.json" , "package-log.json*" , "./"]
COPY . .
RUN yarn
CMD [ "yarn" ,"dev" ]
