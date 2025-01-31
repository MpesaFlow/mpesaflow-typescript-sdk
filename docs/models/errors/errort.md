# ErrorT

## Example Usage

```typescript
import { ErrorT } from "mpesaflow/models/errors";

let value: ErrorT = {
  issues: [
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
        "test_envs",
      ],
      message: "Required",
    },
    {
      code: "invalid_type",
      path: [
        "live_envs",
      ],
      message: "Required",
    },
  ],
  name: "ZodError",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `issues`                                         | [errors.Issues](../../models/errors/issues.md)[] | :heavy_check_mark:                               | N/A                                              |
| `name`                                           | *string*                                         | :heavy_check_mark:                               | N/A                                              |