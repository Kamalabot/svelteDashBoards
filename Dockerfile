FROM node:18-alpine
#got the image in
WORKDIR /svelteDashBoards
#assigned the work directory 
COPY . .
#copying the current context contents inside the docker
RUN npm install 
#setting the network timeout to large number and installing packages
CMD ["npm","run","dev"]
