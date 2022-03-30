FROM node
WORKDIR /cookbook

ENV NODE_ENV=production

COPY . /cookbook/
RUN npm install
EXPOSE 3000
CMD ["node", "./index.js"]