const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function fib(index)
{
  if(index==0)
  {
    return 0;
  }
  if(index<0)
  {
    return;
  }
  var fib1=0;
  var fib2=1;
  var fibo;
  for(var i=1;i<=index;i++)
  {
    fibo=fib1+fib2;
    fib1=fib2;
    fib2=fibo;
  }
  return fib1;
}

sub.on('message', (channel, message) => {
    redisClient.hset('values', message, fib(parseInt(message)));
  });
  sub.subscribe('insert');