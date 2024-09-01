FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && \
	npm install

COPY . .

RUN npm run build

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -f http://localhost:8080 || exit 1

CMD [ "npm", "run", "dev" ]
