# GetTransactionsResponseBody

## Example Usage

```typescript
import { GetTransactionsResponseBody } from "mpesaflow/models/operations";

let value: GetTransactionsResponseBody = {
  id: "<id>",
  business: "<value>",
  user: "Marcia_Grady",
  customer: "<value>",
  object: "<value>",
  amount: "977.50",
  phoneNumber: "1-492-997-6828 x60319",
  created: "<value>",
  currency: "Cayman Islands Dollar",
  description: "astride fidget abaft knottily ethyl covenant",
  mpesaCheckoutRequestId: "<id>",
  mpesaMerchantRequestId: "<id>",
  mpesaResults: {
    resultCode: 7885.46,
    resultDesc: "<value>",
    transactionAmount: 568.48,
    transactionDate: "<value>",
    transactionPhoneNumber: "<value>",
    receiptNumber: "<value>",
  },
  status: "failed",
  type: "donation",
  updated: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `business`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `user`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `customer`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `object`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `amount`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `phoneNumber`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `created`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `currency`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `description`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `mpesaCheckoutRequestId`                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `mpesaMerchantRequestId`                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `mpesaResults`                                                     | [operations.MpesaResults](../../models/operations/mpesaresults.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `status`                                                           | [operations.Status](../../models/operations/status.md)             | :heavy_check_mark:                                                 | N/A                                                                |
| `type`                                                             | [operations.Type](../../models/operations/type.md)                 | :heavy_check_mark:                                                 | N/A                                                                |
| `updated`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |