import rawData from './data.json';
import generatedSchema from './schemas.json';

import { Schema } from 'ajv';

export type Opening = {
  available: boolean;
  url?: string;
};

export type Job = {
  intern?: Opening;
  newGrad?: Opening;
  senior?: Opening;
  manager?: Opening;
};

export type Company = {
  url?: string;
  jobs: {
    softwareEngineer?: Job;
    dataScientist?: Job;
    productManager?: Job;
  };
};

export type JobsData = {
  [name: string]: Company;
};

export const data: JobsData = rawData;
export const schema: Schema = generatedSchema;
