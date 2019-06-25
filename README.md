# Just-Shorten
**Just-Shorten** is a modern, simple and ergonomic URL shortener with support for custom domains.

## Configuration
You can configure just-shorten by setting the following environment variables:
* HOST=0.0.0.0
* PORT=3333
* NODE_ENV=production
* CACHE_VIEWS=false
* APP_NAME=JustShorten
* APP_URL=http://${HOST}:${PORT}
* APP_KEY=<SOME SECRET>
* HASH_DRIVER=bcrypt
* DB_CONNECTION=mysql
* DB_HOST=
* DB_PORT=
* DB_USER=
* DB_PASSWORD=
* DB_DATABASE=just_shorten

## Deploy
### Option 1
You can just download just-shorten by typing the following command:
```bash
npm install @xstoudi/just-shorten
```
or by cloning the git repository.

### Docker
You can run just-shorten with Docker with the following image:
https://hub.docker.com/r/xstoudi/just-shorten
