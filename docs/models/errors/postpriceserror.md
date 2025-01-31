# PostPricesError

## Example Usage

```typescript
import { PostPricesError } from "mpesaflow/models/errors";

let value: PostPricesError = {
  issues: [
    {
      code: "invalid_type",
      path: [
        "product",
      ],
      message: "Required",
    },
  ],
  name: "ZodError",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `issues`                                                             | [errors.PostPricesIssues](../../models/errors/postpricesissues.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |