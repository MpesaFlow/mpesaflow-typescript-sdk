# PostBusinessesRequestBody

The business to create

## Example Usage

```typescript
import { PostBusinessesRequestBody } from "mpesaflow/models/operations";

let value: PostBusinessesRequestBody = {
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
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `active`                                                   | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `livemode`                                                 | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `businessIcon`                                             | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `businessLogo`                                             | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `testEnvs`                                                 | [operations.TestEnvs](../../models/operations/testenvs.md) | :heavy_check_mark:                                         | N/A                                                        |
| `liveEnvs`                                                 | [operations.LiveEnvs](../../models/operations/liveenvs.md) | :heavy_check_mark:                                         | N/A                                                        |