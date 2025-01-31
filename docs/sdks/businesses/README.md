# Businesses
(*businesses*)

## Overview

### Available Operations

* [list](#list) - List of all businesses
* [create](#create) - Create a business

## list

List of all businesses

### Example Usage

```typescript
import { Mpesaflow } from "mpesaflow";

const mpesaflow = new Mpesaflow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaflow.businesses.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaflowCore } from "mpesaflow/core.js";
import { businessesList } from "mpesaflow/funcs/businessesList.js";

// Use `MpesaflowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaflow = new MpesaflowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await businessesList(mpesaflow);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResponseBody[]](../../models/.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.GetBusinessesResponseBody | 404                              | application/json                 |
| errors.APIError                  | 4XX, 5XX                         | \*/\*                            |

## create

Create a business

### Example Usage

```typescript
import { Mpesaflow } from "mpesaflow";

const mpesaflow = new Mpesaflow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaflow.businesses.create({
    name: "<value>",
    testEnvs: {
      passKey: "<value>",
      consumerKey: "<value>",
      consumerSecret: "<value>",
      businessShortCode: "<value>",
    },
    liveEnvs: {
      passKey: "<value>",
      consumerKey: "<value>",
      consumerSecret: "<value>",
      businessShortCode: "<value>",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaflowCore } from "mpesaflow/core.js";
import { businessesCreate } from "mpesaflow/funcs/businessesCreate.js";

// Use `MpesaflowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaflow = new MpesaflowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await businessesCreate(mpesaflow, {
    name: "<value>",
    testEnvs: {
      passKey: "<value>",
      consumerKey: "<value>",
      consumerSecret: "<value>",
      businessShortCode: "<value>",
    },
    liveEnvs: {
      passKey: "<value>",
      consumerKey: "<value>",
      consumerSecret: "<value>",
      businessShortCode: "<value>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostBusinessesRequestBody](../../models/operations/postbusinessesrequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostBusinessesResponseBody](../../models/operations/postbusinessesresponsebody.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PostBusinessesResponseBody | 422                               | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |