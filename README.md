# Tech Jobs

This is a list of technology jobs (Software Engineer, Data Scientist, Product Manager). Raw data is stored in [`data.json`](https://github.com/techcareerio/tech-jobs/blob/main/data.json).

## How to use this dataset?

We plan to publish the data in a way that can be searched and filtered soon.

## How to contribute?

If you company is hiring, you can add your job openings. You can do this in two ways:

1. Fill out this form and submit. We will review submissions and add the information you provide to our dataset.
2. Create a Pull Request to update [`data.json`](https://github.com/techcareerio/tech-jobs/blob/main/data.json). We will review your Pull Request and then merge your change.

## Data Structure

If you plan to make a Pull Request, please take a look at the schema of the JSON data structure.

First of all, the JSON is a dictionary with company names as keys. Companies are sorted alphabetically.

```
{
  "Company A": {},
  "Company B": {},
  "Company Z": {}
}
```

Within each company company, it's a structure like this:

```
"Company X": {
  "url": "https://...", /* Optional URL to the job listing page of the company */
  "jobs": {
    "softwareEngineer": { /* Optional if the company doesn't hire Software Engineer */
      "intern": { /* Optional if there's no intern opening */
        "available": true, /* Required boolean */
        "url": "https://..." /* Optional URL to the intern job page */
      },
      "newGrad": { /* Optional if there's no newGrad opening */
        "available": true, /* Required boolean */
        "url": "https://..." /* Optional URL to the new-grad job page */
      },
      "senior": { /* Optional if there's no senior opening */
        "available": true, /* Required boolean */
        "url": "https://..." /* Optional URL to the senior job page */
      },
      "manager": { /* Optional if there's no manager opening */
        "available": true, /* Required boolean */
        "url": "https://..." /* Optional URL to the manager job page */
      }
    },
    "dataScientist": {
      /* Same structure as softwareEngineer */
    },
    "productManager": {
      /* Same structure as softwareEngineer */
    }
  }
}
```

If you are adding a new company, you can use the following template and then delete unused keys:

```
"Company X": {
  "url": "https://...",
  "jobs": {
    "softwareEngineer": {
      "intern": {
        "available": false,
        "url": "https://..."
      },
      "newGrad": {
        "available": false,
        "url": "https://..."
      },
      "senior": {
        "available": false,
        "url": "https://..."
      },
      "manager": {
        "available": false,
        "url": "https://..."
      }
    },
    "dataScientist": {
      "intern": {
        "available": false,
        "url": "https://..."
      },
      "newGrad": {
        "available": false,
        "url": "https://..."
      },
      "senior": {
        "available": false,
        "url": "https://..."
      },
      "manager": {
        "available": false,
        "url": "https://..."
      }
    },
    "productManager": {
      "intern": {
        "available": false,
        "url": "https://..."
      },
      "newGrad": {
        "available": false,
        "url": "https://..."
      },
      "senior": {
        "available": false,
        "url": "https://..."
      },
      "manager": {
        "available": false,
        "url": "https://..."
      }
    }
  }
}
```
