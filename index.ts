import rawData from "./data.json";

type Opening = {
  available: boolean;
  url?: string;
};

type Job = {
  intern?: Opening;
  newGrad?: Opening;
  senior?: Opening;
  manager?: Opening;
};

type Company = {
  url?: string;
  jobs: {
    softwareEngineer?: Job;
    dataScientist?: Job;
    productManager?: Job;
  };
};

export const data: {
  [name: string]: Company;
} = rawData;
