# Dockerfile for Angular Frontend
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN npm run build --prod

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
