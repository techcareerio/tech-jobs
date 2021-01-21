import rawData from "./data.json";

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
