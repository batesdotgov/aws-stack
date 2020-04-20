const app = require("./server/app");
const knex = require("knex");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("live on:", PORT);
});
