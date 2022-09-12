import nconf from "nconf";
import _ from "lodash";

export const loadSettings = ({ appSettingsPath }) =>
  new Promise((resolve, reject) => {
    try {
      if (_.isEmpty(appSettingsPath)) {
        throw new Error("Configuration settings path is required.");
      }
      nconf.file({
        file: appSettingsPath,
        // Setting the separator as dot for nested objects
        logicalSeparator: ".",
      });
      resolve();
    } catch (err) {
      reject(err);
    }
  });
