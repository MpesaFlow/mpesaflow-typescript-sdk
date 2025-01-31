# PostCustomersError

## Example Usage

```typescript
import { PostCustomersError } from "mpesaflow/models/errors";

let value: PostCustomersError = {
  issues: [
    {
      code: "invalid_type",
      path: [
        "phone_number",
      ],
      message: "Required",
    },
  ],
  name: "ZodError",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `issues`                                                                   | [errors.PostCustomersIssues](../../models/errors/postcustomersissues.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |