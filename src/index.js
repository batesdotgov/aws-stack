const app = require("./server/app");
const knex = require("knex");
const knexConfig = require("../knexfile");

const db = knex(knexConfig);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("live on:", PORT);
});
