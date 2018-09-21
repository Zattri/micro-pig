FROM node

# Working directory of the source code
WORKDIR /src

# Copy JSON package for install
COPY package*.json ./

# Install all the packages
RUN npm install

# Copy all existing code from working directory
COPY . .

EXPOSE 80

VOLUME /data

# Commands to run on container start
CMD ["npm", "start"]