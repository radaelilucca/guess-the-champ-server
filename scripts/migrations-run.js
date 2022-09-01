const { runShellCommand } = require("./baseExec");
const { scriptsConfig } = require("./config");

const runMigrations = () => {
  runShellCommand(
    `${scriptsConfig.baseTypeormCommand} migration:run -d ${scriptsConfig.dataSourcePath} `
  );
};

runMigrations();
