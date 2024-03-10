# /backend/Dockerfile

# Base image
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install --production=false

# Bundle app source
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD [ "npx", "nodemon", "src/server.js" ]

