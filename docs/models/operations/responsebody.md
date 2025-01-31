# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "mpesaflow/models/operations";

let value: ResponseBody = {
  id: "<id>",
  user: "Katharina_Mitchell",
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `user`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `object`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `active`                                                                             | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `created`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `livemode`                                                                           | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `businessIcon`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `businessLogo`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `testEnvs`                                                                           | [operations.GetBusinessesTestEnvs](../../models/operations/getbusinessestestenvs.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `liveEnvs`                                                                           | [operations.GetBusinessesLiveEnvs](../../models/operations/getbusinessesliveenvs.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |