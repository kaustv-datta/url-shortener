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

### Stuff used to make this:

 * [create-react-app](https://github.com/facebookincubator/create-react-app) for Markdown parsing

### Todos:

* Merge config files into one.
* Add more test scenarios.
* Add more animations for UX.
* End-to-end testing.
