const fs = require("fs");
const { WASI } = require("wasi");
const path = "wasm_files"

async function run_wasi(file){
    // Create new WASI context
    let wasi = new WASI({ returnOnExit: true });
    let importObject = { wasi_snapshot_preview1: wasi.wasiImport };
    // Load module and create instance
    let instance = await WebAssembly.compile(
      fs.readFileSync(file)
    ).then(
        wasm => WebAssembly.instantiate(wasm, importObject)
    );
    // Run Wasm 🏃‍♂️
    wasi.start(instance);
}

console.log("Hello Javascript!");
//Loop over Wasm files
fs.promises.readdir( path ).then(
    files => files.forEach(
        f => {run_wasi(`${path}/${f}`)}
    )
);