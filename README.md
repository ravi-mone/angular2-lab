# Introduction

Note: 
Actual reference 
https://github.com/mgechev/angular2-seed, 
https://github.com/justindujardin/ng2-material

Thanks to the Great Brains @mgechev, @justindujardin

Would also like to thank the  angular channel kind people help.

This is my Experiental App, The way to learn angular2, Please co-operate if it breaks some-were(There is not much to break though ;) ) 
Please Give your Feed-back if you have any.


# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

```bash
git clone https://github.com/ravi-mone/angular2-lab.git
cd angular2-lab
npm install       # or `npm run reinstall` if you get an error
npm start         # start with --env dev
npm run docs      # api document for app
```
_Does not rely on any global dependencies._

 

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# Now to extend?

If you want to use your custom libraries:

```bash
npm install my-library --save
vim tools/config.js
```
Add reference to the installed library in `PATH.src.jslib` (or whatever you like).

# Running test

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window
```
 

# License

MIT
