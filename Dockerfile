FROM node:carbon

# Create app directory
RUN mkdir -p /dades/html/storymaps/data/
WORKDIR /dades/html/storymaps/data/

# Install app dependencies
COPY package.json /dades/html/storymaps/data/
RUN npm install

# Bundle app source
COPY . /dades/html/storymaps/data/ 

EXPOSE 8080
CMD [ "./start.sh" ]
