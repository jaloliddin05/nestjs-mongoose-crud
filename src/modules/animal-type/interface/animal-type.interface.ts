import { Document } from 'mongoose';

export interface AnimalType extends Document {
  type: string;
}
