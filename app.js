require("colors");
const { inquirerMenu, pause } = require("./helpers/inquirer");
// const { pause, showMenu } = require("./helpers/messages");

console.clear();

const main = async () => {
  console.log("Hello world!");

  do {
    opt = await inquirerMenu();

    await pause();
  } while (opt !== "0");
};

main();
