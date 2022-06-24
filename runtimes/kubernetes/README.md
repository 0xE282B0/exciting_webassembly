
docker build . -f Dockerfile.wasmtime --tag 0xe282b0/hello_wasi:demo-wasmtime         
kubectl run -it --rm --restart=Never wasmtime-demo --image=0xe282b0/hello_wasi:demo-wasmtime

docker build . -f Dockerfile.runtimeless --tag 0xe282b0/hello_wasi:demo-wasi                
kubectl run -it --rm --restart=Never wasi-demo --image=0xe282b0/hello_wasi:demo-wasi --annotations="module.wasm.image/variant=compat" /wasm/hello_rust.wasm