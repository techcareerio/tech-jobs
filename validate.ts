import Ajv, { DefinedError, Schema } from 'ajv';
import data from './data.json' assert { type: 'json' };
import schemas from './schemas.json' assert { type: 'json' };

const ajv = new Ajv();
ajv.addSchema(schemas as Schema);
if (!ajv.validate('#/definitions/JobsData', data)) {
  for (const error of ajv.errors as DefinedError[]) {
    console.error(error);
  }
  throw new Error('Validation failure');
}
