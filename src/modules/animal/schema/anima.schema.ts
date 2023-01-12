import * as mongoose from 'mongoose';

export const AnimalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: mongoose.Types.ObjectId,
      ref: 'AnimalType',
    },
  },
  {
    collection: 'animal',
  },
);
