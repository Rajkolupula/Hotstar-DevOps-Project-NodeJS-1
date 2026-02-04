FROM node:16
WORKDIR /app
# Copy package files first for better caching
COPY package*.json ./
RUN npm install
# Copy the rest of your code
COPY . .
# Ensure the "src" folder is directly under /app
CMD ["npm", "start"]
