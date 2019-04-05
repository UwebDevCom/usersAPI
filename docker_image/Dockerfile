# FROM ec2-3-16-206-117.us-east-2.compute.amazonaws.com:nodejs.v8.11.4
FROM node:10
COPY ./app.tar /opt/dtrace-analytics-report/
RUN cd /opt/dtrace-analytics-report && \
    tar -xvf app.tar && rm -rf app.tar
RUN npm install -g http-server
# check that the application port is the same, or that it gets all trafic from 4200 (nginx)
EXPOSE 3300
WORKDIR /opt/dtrace-analytics-report
ENV NODE_ENV=qa
RUN echo "Node.js env: $NODE_ENV"
#CMD ["npm", "run", "db-upgrade", "&&", "npm", "start"]
#CMD npm run db-upgrade ; npm start
CMD npm run start