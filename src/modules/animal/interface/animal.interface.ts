import { Document } from 'mongoose';

export interface Animal extends Document {
  name: string;
  type: string;
}
