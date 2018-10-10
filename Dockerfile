FROM node:9.11.1

WORKDIR /just-shorten

COPY package.json /just-shorten
RUN npm install --only=production

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]