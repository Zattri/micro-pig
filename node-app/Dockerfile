FROM node:8

# Working directory
WORKDIR /src/app

# Copy JSON package for install
COPY package*.json ./

# Install all the packages
RUN npm install

# Copy all existing code
COPY . .

# Port to expose
EXPOSE 3000

# Commands to run on container start
CMD ["npm", "start"]