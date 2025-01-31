# Files
(*files*)

## Overview

### Available Operations

* [list](#list) - List all files
* [create](#create) - Create a file

## list

List all files

### Example Usage

```typescript
import { Mpesaflow } from "mpesaflow";

const mpesaflow = new Mpesaflow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaflow.files.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MpesaflowCore } from "mpesaflow/core.js";
import { filesList } from "mpesaflow/funcs/filesList.js";

// Use `MpesaflowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaflow = new MpesaflowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await filesList(mpesaflow);

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

**Promise\<[operations.GetFilesResponseBody[]](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.GetFilesResponseBody | 404                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## create

Create a file

### Example Usage

```typescript
import { Mpesaflow } from "mpesaflow";

const mpesaflow = new Mpesaflow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaflow.files.create({
    expiresAt: "1741097688610",
    filename: "example.file",
    purpose: "<value>",
    size: "<value>",
    type: "<value>",
    url: "https://granular-hornet.biz/",
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
import { filesCreate } from "mpesaflow/funcs/filesCreate.js";

// Use `MpesaflowCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mpesaflow = new MpesaflowCore({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const res = await filesCreate(mpesaflow, {
    expiresAt: "1741097688610",
    filename: "example.file",
    purpose: "<value>",
    size: "<value>",
    type: "<value>",
    url: "https://granular-hornet.biz/",
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
| `request`                                                                                                                                                                      | [operations.PostFilesRequestBody](../../models/operations/postfilesrequestbody.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostFilesResponseBody](../../models/operations/postfilesresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.PostFilesResponseBody | 422                          | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |