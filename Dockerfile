# Use an official Node.js image
FROM node:18

# Install netcat (nc) for checking database availability
RUN apt-get update && apt-get install -y netcat

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the wait-for-it.sh script (ensure this file exists in your project root)
COPY wait-for-it.sh /usr/src/app/
RUN chmod +x /usr/src/app/wait-for-it.sh

# Copy the rest of the application files
COPY . .

# Start the application
CMD ["npm", "start"]