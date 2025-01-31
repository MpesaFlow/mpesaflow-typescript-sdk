# PostPaymentLinksError

## Example Usage

```typescript
import { PostPaymentLinksError } from "mpesaflow/models/errors";

let value: PostPaymentLinksError = {
  issues: [
    {
      code: "invalid_type",
      path: [
        "product",
      ],
      message: "Required",
    },
    {
      code: "invalid_type",
      path: [
        "metadata",
      ],
      message: "Required",
    },
    {
      code: "invalid_type",
      path: [
        "after_completion",
      ],
      message: "Required",
    },
    {
      code: "invalid_type",
      path: [
        "url",
      ],
      message: "Required",
    },
  ],
  name: "ZodError",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `issues`                                                                         | [errors.PostPaymentLinksIssues](../../models/errors/postpaymentlinksissues.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |