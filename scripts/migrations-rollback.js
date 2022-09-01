const { runShellCommand } = require("./baseExec");
const { scriptsConfig } = require("./config");

const rollbackMigrations = () => {
  runShellCommand(
    `${scriptsConfig.baseTypeormCommand} migration:revert -d ${scriptsConfig.dataSourcePath}`
  );
};

rollbackMigrations();
