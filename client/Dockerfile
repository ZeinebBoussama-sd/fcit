FROM node:12.18.1-alpine
LABEL Name=FCIT Version=0.1.1
ENV NODE_ENV production
ENV consoleLogLevel warning
WORKDIR /app
COPY ["package.json", "package-lock.json*"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3030
CMD ["yarn", "run", "start"]