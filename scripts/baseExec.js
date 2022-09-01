require("dotenv/config");
const { exec } = require("child_process");

const runShellCommand = (command) => {
  exec(command, (err, output) => {
    if (err) return console.log(err);

    console.log(output);
  });
};

module.exports = {
  runShellCommand,
};
