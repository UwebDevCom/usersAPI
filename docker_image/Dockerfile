# FROM ec2-3-16-206-117.us-east-2.compute.amazonaws.com:nodejs.v8.11.4
FROM node:10
COPY ./app.tar /opt/users/
RUN cd /opt/users && \
    tar -xvf app.tar && rm -rf app.tar
#RUN npm install -g http-server
# check that the application port is the same, or that it gets all trafic from 4200 (nginx)
EXPOSE 8080
WORKDIR /opt/users
#ENV NODE_ENV=qa
RUN echo "start running"
#CMD ["npm", "run", "db-upgrade", "&&", "npm", "start"]
#CMD npm run db-upgrade ; npm start
RUN cd /src
CMD node server.js