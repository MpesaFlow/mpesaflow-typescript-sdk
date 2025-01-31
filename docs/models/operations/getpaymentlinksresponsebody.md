# GetPaymentLinksResponseBody

## Example Usage

```typescript
import { GetPaymentLinksResponseBody } from "mpesaflow/models/operations";

let value: GetPaymentLinksResponseBody = {
  id: "<id>",
  product: "Incredible Steel Salad",
  active: false,
  metadata: {},
  afterCompletion: {
    hostedConfirmation: {
      customMessage: "<value>",
    },
  },
  currency: "Lari",
  livemode: false,
  submitType: "pay",
  inactiveMessage: "<value>",
  url: "https://unconscious-mom.org/",
  created: "<value>",
  updated: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `product`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `active`                                                                                               | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | [operations.GetPaymentLinksMetadata](../../models/operations/getpaymentlinksmetadata.md)               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `afterCompletion`                                                                                      | [operations.GetPaymentLinksAfterCompletion](../../models/operations/getpaymentlinksaftercompletion.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `currency`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `livemode`                                                                                             | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `submitType`                                                                                           | [operations.GetPaymentLinksSubmitType](../../models/operations/getpaymentlinkssubmittype.md)           | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `inactiveMessage`                                                                                      | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `url`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `created`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updated`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |