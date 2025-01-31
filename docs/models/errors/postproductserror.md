# PostProductsError

## Example Usage

```typescript
import { PostProductsError } from "mpesaflow/models/errors";

let value: PostProductsError = {
  issues: [
    {
      code: "invalid_type",
      path: [
        "images",
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
        "name",
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `issues`                                                                 | [errors.PostProductsIssues](../../models/errors/postproductsissues.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |