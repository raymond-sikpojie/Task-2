const yargs = require("yargs");
const notes = require("./notes");

yargs.command({
  command: "add",
  describe: "Adding a Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("\n Title : ", argv.title);
    console.log("\n Body : ", argv.body);
  },
});

yargs.parse();
