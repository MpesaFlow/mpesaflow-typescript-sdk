# Customers
(*customers*)

## Overview

### Available Operations

* [list](#list) - List of all customers
* [create](#create) - Create a customer

## list

List of all customers

### Example Usage

```typescript
import { Mpesaflow } from "mpesaflow";

const mpesaflow = new Mpesaflow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaflow.customers.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaflowCore } from "mpesaflow/core.js";
import { customersList } from "mpesaflow/funcs/customersList.js";

// Use `MpesaflowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaflow = new MpesaflowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await customersList(mpesaflow);

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

**Promise\<[operations.GetCustomersResponseBody[]](../../models/.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.GetCustomersResponseBody | 404                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## create

Create a customer

### Example Usage

```typescript
import { Mpesaflow } from "mpesaflow";

const mpesaflow = new Mpesaflow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaflow.customers.create({
    phoneNumber: "546.713.6633 x2439",
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
import { customersCreate } from "mpesaflow/funcs/customersCreate.js";

// Use `MpesaflowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaflow = new MpesaflowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await customersCreate(mpesaflow, {
    phoneNumber: "546.713.6633 x2439",
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
| `request`                                                                                                                                                                      | [operations.PostCustomersRequestBody](../../models/operations/postcustomersrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostCustomersResponseBody](../../models/operations/postcustomersresponsebody.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.PostCustomersResponseBody | 422                              | application/json                 |
| errors.APIError                  | 4XX, 5XX                         | \*/\*                            |