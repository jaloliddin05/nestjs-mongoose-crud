import * as mongoose from 'mongoose';

export const AnimalTypeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'animal_type',
  },
);
