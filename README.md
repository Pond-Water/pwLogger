# pwDB Logger

pwDB Logger is a logger that writes object and JSON messages to a datafile readable by <a href="https://github.com/Pond-Water/pwDB" target="_blank">pwDB</a>, with minimal RAM footprint since it doesn't keep a cache of the database in memory. Use it when your application doesn't need to use the database capabilities of pwDB, just the logging features. You can then use pwDB to query and modify your database.

The API and implementation interface replicates Fluentd's node logger (https://github.com/fluent/fluent-logger-node). This provides the ability to migrate with minimum impact and changes.


## API
```javascript
var Logger = require('pwDB-logger')
  , logger = new Logger({ filename: "path/to/datafile" });

logger.insert({ hello: "world", number: 42, timestamp: new Date() }, function (err) {
  // err will not be null if the object is not well formatted for pwDB
  // meaning one of the keys contains a dot or begins with a dollar sign
});

// You can insert arrays of documents
// The callback is optional
logger.insert([{ planet: "earth" }, { planet: "Mars" }]);

```

## License 

See [License](LICENSE)

## Open Source used in this product

See [LICENSES](LICENSES)

## Special Thank You!
nedb-logger - Launched this works and provided inspiration (https://github.com/louischatriot/nedb-logger)
fluentd & fluent-logger for Node.js - API and interface (https://github.com/fluent/fluent-logger-node)

