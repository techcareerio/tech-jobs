import Ajv, { JSONSchemaType, DefinedError } from "ajv";
import type { Opening, Job, Company, JobsData } from "./index";
import data from "./data.json" assert { type: "json" };

const openingSchema: JSONSchemaType<Opening> = {
  type: "object",
  required: ["available"],
  properties: {
    available: { type: "boolean" },
    url: { type: "string", nullable: true },
  },
  additionalProperties: false,
};

const jobSchema: JSONSchemaType<Job> = {
  type: "object",
  required: [],
  properties: {
    intern: { ...openingSchema, nullable: true },
    newGrad: { ...openingSchema, nullable: true },
    senior: { ...openingSchema, nullable: true },
    manager: { ...openingSchema, nullable: true },
  },
  additionalProperties: false,
};

const companySchema: JSONSchemaType<Company> = {
  type: "object",
  required: ["jobs"],
  properties: {
    url: { type: "string", nullable: true },
    jobs: {
      type: "object",
      required: [],
      properties: {
        softwareEngineer: { ...jobSchema, nullable: true },
        dataScientist: { ...jobSchema, nullable: true },
        productManager: { ...jobSchema, nullable: true },
      },
      additionalProperties: false,
    },
  },
  additionalProperties: false,
};

const schema: JSONSchemaType<JobsData> = {
  type: "object",
  required: [],
  additionalProperties: companySchema,
};

// @ts-ignore
const ajv: Ajv = new Ajv.default();
const validate = ajv.compile(schema);
if (!validate(data)) {
  for (const error of validate.errors as DefinedError[]) {
    console.error(error);
  }
  throw new Error("Validation failure");
}
