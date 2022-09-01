const scriptsConfig = {
  baseTypeormCommand:
    "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js",
  migrationsPath: "./src/database/migrations/",
  dataSourcePath: "./src/database/index.ts",
};

module.exports = { scriptsConfig };
