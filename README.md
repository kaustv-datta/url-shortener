# url-shortener

## Get started:

 * Clone repository
 ```javascript
 git clone https://github.com/kaustv-datta/url-shortener.git
 ```
 * Install dependencies
 ```javascript
 npm install
 ```
 or
  ```javascript
 yarn
 ```
 * Start application
 ```javascript
 yarn start
 ```
 or
  ```javascript
 npm start
 ```
 * Run tests
  ```javascript
 npm test
 ```
 * Test coverage
  ```javascript
 npm test -- --coverage
 ```
 * Change proxy server port configurations (change both simultaneously)
 ```javascript
 proxy.js --> const TARGET_PORT
 src/config.js --> const PROXY_PORT
 ```
  * Production build
  ```javascript
 npm run build
 ```

### Running application screenshots

![default state](https://user-images.githubusercontent.com/6747425/32241311-ceb27c9c-be95-11e7-8223-0303091d642a.png)

![loading state](https://user-images.githubusercontent.com/6747425/32241404-071da660-be96-11e7-8672-f5843c79fe78.png)

![populated state](https://user-images.githubusercontent.com/6747425/32241439-1df3e822-be96-11e7-9990-e1f54ffa91a6.png)

![error state](https://user-images.githubusercontent.com/6747425/32241461-2e508b76-be96-11e7-9601-f7799e819ae1.png)

### Stuff used to make this:

 * [create-react-app](https://github.com/facebookincubator/create-react-app) for bootstrapping application.

 * [socket.io](https://socket.io/) websockets

 * [redux](http://redux.js.org/) state management

 * [redux-saga](https://redux-saga.js.org/) redux side effects management

### Todos:

* Merge config files into one.
* Add more test scenarios.
* Add more animations for UX.
* End-to-end testing.
