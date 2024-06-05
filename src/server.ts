import { Server } from 'http';
import app from './app';
import config from './app/config';

// getting-started.js
import mongoose from 'mongoose';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('MongoDB Database Connected Successfully');

    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();

process.on('unhandleRejection', () => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
