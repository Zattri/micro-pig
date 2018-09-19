FROM node:8

# Working directory of the source code
WORKDIR /src

# Copy JSON package for install
COPY package*.json ./

# Install all the packages
RUN npm install

# Copy all existing code from working directory
COPY . .

# Port to expose for container
EXPOSE 80

# Commands to run on container start
CMD ["npm", "start"]