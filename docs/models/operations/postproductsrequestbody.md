# PostProductsRequestBody

The task to create

## Example Usage

```typescript
import { PostProductsRequestBody } from "mpesaflow/models/operations";

let value: PostProductsRequestBody = {
  images: [
    "<value>",
  ],
  metadata: {},
  name: "<value>",
  url: "https://dependent-valentine.net",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `active`                                                                           | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `defaultPrice`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `description`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `images`                                                                           | *string*[]                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `metadata`                                                                         | [operations.PostProductsMetadata](../../models/operations/postproductsmetadata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `livemode`                                                                         | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |