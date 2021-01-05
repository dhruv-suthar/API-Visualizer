# API Visualizer

The Objective is not only fetch API's but it also Visualize it's in various templates.

**Live Here** - https://api-visualizer.herokuapp.com/

**Note** - if unable to fetch api data from local url endpoints or avoid cors error then use the `Allow CORS: Access-Control-Allow-Origin` extension to your browser.
            `Allow CORS: Access-Control-Allow-Origin` - https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf


**Methods**

- `GET` - Requests retrieve resource information
- `POST` - The server creates a new entry in a database
- `PUT` - Updates an existing resource
- `DELETE` - Deletes resource or related component

Visualize an API in the following templates.

**Visualization Templates**

- `Table`
- `LineChart`
- `BarChart` 
- `ColumnChart`
- `AreaChart`
- `Histogram`
- `PieChart`
- `ScatterChart`

Other templates coming soon...

![alt text](https://raw.githubusercontent.com/dhruv-suthar/API-Visualizer/master/src/assets/1.png)

![alt text](https://raw.githubusercontent.com/dhruv-suthar/API-Visualizer/master/src/assets/4.png)

![alt text](https://raw.githubusercontent.com/dhruv-suthar/API-Visualizer/master/src/assets/5.png)

**FrameWork used**

- `Vue.js -> Vuex` - https://vuejs.org/

**Components used**

- `vue-slim-tabs` - https://github.com/egoist/vue-slim-tabs
- `vue-json-pretty`- https://github.com/leezng/vue-json-pretty
- `vue-google-charts` - https://github.com/devstark-com/vue-google-charts


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
