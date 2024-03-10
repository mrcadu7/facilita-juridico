# Dockerfile
# Stage 1 - the build process
FROM node:14 as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./

# Durante o desenvolvimento, inicie o servidor de desenvolvimento do React
CMD [ "npm", "start" ]

# Expose port
EXPOSE 3001
