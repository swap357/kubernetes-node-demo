FROM node
MAINTAINER swap357 "swapnilpatel357@gmail.com"
EXPOSE 8000
COPY node-demo.js .
CMD /bin/bash -c 'node node-server.js'
