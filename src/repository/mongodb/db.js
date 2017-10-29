import mongoose from 'mongoose';
import config from 'config3';

mongoose.Promise = global.Promise;
mongoose.connect(`${config.mongo.host}`, {
    useMongoClient: true
  });