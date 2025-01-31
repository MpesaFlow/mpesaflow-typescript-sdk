# PaymentLinks
(*paymentLinks*)

## Overview

### Available Operations

* [list](#list) - List of all payment links
* [create](#create) - Create a payment link

## list

List of all payment links

### Example Usage

```typescript
import { Mpesaflow } from "mpesaflow";

const mpesaflow = new Mpesaflow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaflow.paymentLinks.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaflowCore } from "mpesaflow/core.js";
import { paymentLinksList } from "mpesaflow/funcs/paymentLinksList.js";

// Use `MpesaflowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaflow = new MpesaflowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await paymentLinksList(mpesaflow);

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

**Promise\<[operations.GetPaymentLinksResponseBody[]](../../models/.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.GetPaymentLinksResponseBody | 404                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## create

Create a payment link

### Example Usage

```typescript
import { Mpesaflow } from "mpesaflow";

const mpesaflow = new Mpesaflow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaflow.paymentLinks.create({
    product: "Fantastic Wooden Gloves",
    metadata: {},
    afterCompletion: {
      hostedConfirmation: {
        customMessage: "<value>",
      },
    },
    url: "https://those-affect.com",
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
import { paymentLinksCreate } from "mpesaflow/funcs/paymentLinksCreate.js";

// Use `MpesaflowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaflow = new MpesaflowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await paymentLinksCreate(mpesaflow, {
    product: "Fantastic Wooden Gloves",
    metadata: {},
    afterCompletion: {
      hostedConfirmation: {
        customMessage: "<value>",
      },
    },
    url: "https://those-affect.com",
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
| `request`                                                                                                                                                                      | [operations.PostPaymentLinksRequestBody](../../models/operations/postpaymentlinksrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostPaymentLinksResponseBody](../../models/operations/postpaymentlinksresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.PostPaymentLinksResponseBody | 422                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |