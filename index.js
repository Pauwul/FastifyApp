import nconf from "nconf";
import { createServer } from "./server";
import { loadSettings } from "./config/configurationAdaptor";

const appSettingsPath = process.env.APP_SETTINGS_FILE_PATH;
console.log(appSettingsPath);
loadSettings({ appSettingsPath })
  .then(() => {
    // TODO connect to db, if any

    // read the config property required for starting the server
    const serverOptions = {
      logSeverity: nconf.get("logSeverity"),
    };
    createServer(serverOptions);
    // TODO start the server
  })
  .catch((err) => {
    console.log(err);
  });
