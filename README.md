# Ukázka applikace s memory leakem

aplikace obsahuje stupidní memory leak a používá doporučené balíčky

*Doporučené balíčky a funkce*
- [heapdump](https://www.npmjs.com/package/heapdump)
- [node-memwatch](https://www.npmjs.com/package/node-memwatch)
- [process.memoryUsage()](https://nodejs.org/api/process.html#process_process_memoryusage)

*Typy jak se vyhnout memory leakum*
- Explicitně nullovat reference pokud to je možné
- Neprovádět kopirovai objektu pomoci Object.assign() ale pomoci JSON.parse(JSON.stringify())
- Používat [pure fukce] (https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976) vsude kde to jde
- Pro praci s datovyma strukturama pouzivat [immutable.js](https://facebook.github.io/immutable-js/) a vyuzivat [rambda](http://ramdajs.com/)

*Typy pro lepší odhalování/lazení memory leaků*
- Sbírat memory leaky z produkce
- Používat node-memwatch balíček
- Zobrazovat v grafu hodnoty z process.memoryUsage()

*Clanky*
- https://www.alexkras.com/simple-guide-to-finding-a-javascript-memory-leak-in-node-js/
- https://blog.risingstack.com/node-js-at-scale-node-js-garbage-collection/
- https://blog.risingstack.com/finding-a-memory-leak-in-node-js/
- https://marmelab.com/blog/2018/04/03/how-to-track-and-fix-memory-leak-with-nodejs.html
- https://www.nearform.com/blog/self-detect-memory-leak-node/
- https://www.toptal.com/nodejs/debugging-memory-leaks-node-js-applications
- https://tech.residebrokerage.com/debugging-node-js-memory-problems-d450787d9253