# PostPaymentLinksResponseBody

Create a Payment Link

## Example Usage

```typescript
import { PostPaymentLinksResponseBody } from "mpesaflow/models/operations";

let value: PostPaymentLinksResponseBody = {
  id: "<id>",
  product: "Oriental Fresh Pants",
  active: false,
  metadata: {},
  afterCompletion: {
    hostedConfirmation: {
      customMessage: "<value>",
    },
  },
  currency: "Kenyan Shilling",
  livemode: false,
  submitType: "auto",
  inactiveMessage: "<value>",
  url: "https://official-mouser.name/",
  created: "<value>",
  updated: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `product`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `active`                                                                                                 | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `metadata`                                                                                               | [operations.PostPaymentLinksMetadata](../../models/operations/postpaymentlinksmetadata.md)               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `afterCompletion`                                                                                        | [operations.PostPaymentLinksAfterCompletion](../../models/operations/postpaymentlinksaftercompletion.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `currency`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `livemode`                                                                                               | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `submitType`                                                                                             | [operations.PostPaymentLinksSubmitType](../../models/operations/postpaymentlinkssubmittype.md)           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `inactiveMessage`                                                                                        | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `url`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `created`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `updated`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |