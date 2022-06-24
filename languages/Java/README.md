```bash
#Compile Java code
javac bytecoder/HelloWorld.java

curl -O https://repo.maven.apache.org/maven2/de/mirkosertic/bytecoder/bytecoder-cli/2021-11-02/bytecoder-cli-2021-11-02-executable.jar

java -jar bytecoder-cli-2021-11-02-executable.jar -classpath=. -mainclass=bytecoder.HelloWorld -builddirectory=. -backend=wasm -minify=false
```
```JavaScript
var bytecoderWasmFile = 'bytecoder.wasm';
var instantiated = function(result) {
    bytecoder.init(result.instance);
    bytecoder.exports.initMemory(0);
    bytecoder.exports.bootstrap(0);
    bytecoder.initializeFileIO();

    // No Garbage collector initialized!
    // Don't try this at home!

    bytecoder.exports.main(0);
}
const fs = require('fs');
WebAssembly.instantiate(fs.readFileSync(bytecoderWasmFile), bytecoder.imports).then(instantiated)
```