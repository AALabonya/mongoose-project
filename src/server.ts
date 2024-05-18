import config from "./app/config";

// getting-started.js
const mongoose = require('mongoose');


async function main() {
  await mongoose.connect(config.database_url);

}


app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
  })