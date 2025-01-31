# PostBusinessesResponseBody

Create a Business

## Example Usage

```typescript
import { PostBusinessesResponseBody } from "mpesaflow/models/operations";

let value: PostBusinessesResponseBody = {
  id: "<id>",
  user: "Hunter.Windler",
  object: "<value>",
  active: false,
  created: "<value>",
  livemode: false,
  businessIcon: "<value>",
  businessLogo: "<value>",
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `user`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `object`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `active`                                                                               | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `created`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `livemode`                                                                             | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `businessIcon`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `businessLogo`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `testEnvs`                                                                             | [operations.PostBusinessesTestEnvs](../../models/operations/postbusinessestestenvs.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `liveEnvs`                                                                             | [operations.PostBusinessesLiveEnvs](../../models/operations/postbusinessesliveenvs.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |