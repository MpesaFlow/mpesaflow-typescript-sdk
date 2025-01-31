# Transactions
(*transactions*)

## Overview

### Available Operations

* [list](#list)

## list

### Example Usage

```typescript
import { Mpesaflow } from "mpesaflow";

const mpesaflow = new Mpesaflow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaflow.transactions.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaflowCore } from "mpesaflow/core.js";
import { transactionsList } from "mpesaflow/funcs/transactionsList.js";

// Use `MpesaflowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaflow = new MpesaflowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await transactionsList(mpesaflow);

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

**Promise\<[operations.GetTransactionsResponseBody[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |