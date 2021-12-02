FROM node:17.1.0-slim 

WORKDIR /user/src/app

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm","start"]