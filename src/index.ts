import * as nrelay from "nrelay/lib/core";

const options: nrelay.RunOptions = {
    update: false,
    forceUpdate: false,
    debug: true,
    plugins: true,
    logFile: false,
    pluginPath: "lib/plugins",
    censorGuid: false
};

nrelay.start(options);