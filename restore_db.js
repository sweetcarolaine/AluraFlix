const fs = require("fs");

const restoreDB = () => {
  fs.copyFileSync("./db_original.json", "./db.json");
  console.log("Banco de dados restaurado para o estado original.");
};

restoreDB();
