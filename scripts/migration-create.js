const { argv } = require("node:process");
const { runShellCommand } = require("./baseExec");
const { scriptsConfig } = require("./config");

const createMigration = () => {
  const name = argv[2];

  runShellCommand(
    `${scriptsConfig.baseTypeormCommand} migration:create ${scriptsConfig.migrationsPath}${name}`
  );
};

createMigration();
