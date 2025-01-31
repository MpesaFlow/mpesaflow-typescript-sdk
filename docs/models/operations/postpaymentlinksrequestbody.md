# PostPaymentLinksRequestBody

The payment link to create

## Example Usage

```typescript
import { PostPaymentLinksRequestBody } from "mpesaflow/models/operations";

let value: PostPaymentLinksRequestBody = {
  product: "Recycled Metal Towels",
  metadata: {},
  afterCompletion: {
    hostedConfirmation: {
      customMessage: "<value>",
    },
  },
  url: "https://insignificant-noon.com",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `product`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `active`                                                                 | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metadata`                                                               | [operations.Metadata](../../models/operations/metadata.md)               | :heavy_check_mark:                                                       | N/A                                                                      |
| `afterCompletion`                                                        | [operations.AfterCompletion](../../models/operations/aftercompletion.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `currency`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `livemode`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `submitType`                                                             | [operations.SubmitType](../../models/operations/submittype.md)           | :heavy_minus_sign:                                                       | N/A                                                                      |
| `inactiveMessage`                                                        | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `url`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |