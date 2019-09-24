# Use the node v12.8 .0 image
FROM node:12.8.0

# Specify a directory for the application
WORKDIR /usr/src/figtree

# Install application dependencies
COPY package*.json ./
RUN npm install

# Bundle the application
COPY . .

# Map port 80
EXPOSE 80

# Run the application
CMD [ "node", "build/app/server.js" ]
