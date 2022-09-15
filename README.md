# axinom sender

This is Axinom Sender

## Development

### Run locally

1. create config files using template files
   1. `cp .env.development.local.template .env.development.local`
2. create an oauth client in Receiver project (use Receiver CLI) and update the config file
3. run `npm install`
4. run `npm run dev`

### Docker
1. create config files using template files
   1. `cp .env.development.local.template .env.development.local`
2. create an oauth client in Receiver project (use Receiver CLI) and update the config file
3. run `docker-compose up`

## Api Documentation

[http://localhost:3002/api-docs/](http://localhost:3002/api-docs/)

## Production

1. create config files using template files
   1. `cp .env.production.local.template .env.production.local`
2. create an oauth client in Receiver project (use Receiver CLI) and update the config file
3. run `npm run deploy:prod`


