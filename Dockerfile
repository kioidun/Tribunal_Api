# Use an official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install  # or npm ci if you use package-lock.json

# Copy the rest of the application files
COPY . .

# Start the app
CMD ["npm", "start"]