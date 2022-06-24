## Compile to WebAssembly

[Open a Terminal](didact://?commandId=vscode.didact.startTerminalWithName&text=exciting-wasm)

[Show C Hello World](didact://?commandId=vscode.open&projectFilePath=languages/C/helloworld.c)


[compile C](didact://?commandId=vscode.didact.sendNamedTerminalAString&text=exciting-wasm$$emcc%20languages%2FC%2Fhelloworld.c%20-s%20STANDALONE_WASM%20-o%20wasm_files%2Fhello_C.wasm)

## Run standalone with Wasm Runtime

- [run with wasmedge](didact://?commandId=vscode.didact.sendNamedTerminalAString&text=exciting-wasm$$wasmedge%20wasm_files%2Fhello_C.wasm)
- [run with wasmtime](didact://?commandId=vscode.didact.sendNamedTerminalAString&text=exciting-wasm$$wasmtime%20wasm_files%2Fhello_C.wasm)
- [run with wasmer](didact://?commandId=vscode.didact.sendNamedTerminalAString&text=exciting-wasm$$wasmer%20wasm_files%2Fhello_C.wasm)

[show wasm folder](didact://?commandId=vscode.didact.sendNamedTerminalAString&text=exciting-wasm$$ls%20-lah%20wasm_files)

## Run from another language (JS)

[Show JS Polyglot example](didact://?commandId=vscode.open&projectFilePath=runtimes/node/wasm.js)

[run from Node](didact://?commandId=vscode.didact.sendNamedTerminalAString&text=exciting-wasm$$node%20--experimental-wasi-unstable-preview1%20runtimes%2Fnode%2Fwasm.js)

## Kubernetes

### Wasmtime runtime
- [docker build wasmtime](didact://?commandId=vscode.didact.sendNamedTerminalAString&text=exciting-wasm$$docker%20build%20runtimes%2Fkubernetes%20-f%20runtimes%2Fkubernetes%2FDockerfile.wasmtime%20--tag%200xe282b0%2Fhello_wasi%3Ademo-wasmtime)
- [kubectl run wasmtime](didact://?commandId=vscode.didact.sendNamedTerminalAString&text=exciting-wasm$$kubectl%20run%20-it%20--rm%20--restart%3DNever%20wasmtime-demo%20--image%3D0xe282b0%2Fhello_wasi%3Ademo-wasmtime)

### Runtimeless
- [docker build runtimeless](didact://?commandId=vscode.didact.sendNamedTerminalAString&text=exciting-wasm$$docker%20build%20runtimes%2Fkubernetes%20-f%20runtimes%2Fkubernetes%2FDockerfile.runtimeless%20--tag%200xe282b0%2Fhello_wasi%3Ademo-wasi)
- [kubectl run runtimeless](didact://?commandId=vscode.didact.sendNamedTerminalAString&text=exciting-wasm$$kubectl%20run%20-it%20--rm%20--restart%3DNever%20wasi-demo%20--image%3D0xe282b0%2Fhello_wasi%3Ademo-wasi%20--annotations%3D%22module.wasm.image%2Fvariant%3Dcompat%22%20%2Fwasm%2Fhello_rust.wasm)

- [docker images](didact://?commandId=vscode.didact.sendNamedTerminalAString&text=exciting-wasm$$docker%20images)
