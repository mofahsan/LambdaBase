step 1 :- Create your app like you normally do
step 2 :- npm i serverless-http
step 3 :- now add 
const serverless = require('serverless-http');
and
module.exports.handler = serverless(app);
step 5 :- install serverless CLI :-  npm install -g serverless
step 6 :-  serverless config credentials --provider aws --key ACCESS_KEY ?secret SECRET_KEY 
change ACCESS_KEY & SECRET_KEY to actual keys
step 7 :- create serverless.yml
and write your serverless configuration
step 8 :-  serverless deploy
your code is deployed and you'll receive endpoints


Tutorial followed :- https://hevodata.com/learn/lambda-express/#:~:text=With%20AWS%20Lambda%20and%20API,directory%20using%20the%20following%20command.


note:- .serverless is generated by cli automatically while deployement for fresh deployement delete .serverless 