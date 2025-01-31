# PostFilesError

## Example Usage

```typescript
import { PostFilesError } from "mpesaflow/models/errors";

let value: PostFilesError = {
  issues: [
    {
      code: "invalid_type",
      path: [
        "expires_at",
      ],
      message: "Required",
    },
    {
      code: "invalid_type",
      path: [
        "filename",
      ],
      message: "Required",
    },
    {
      code: "invalid_type",
      path: [
        "purpose",
      ],
      message: "Required",
    },
    {
      code: "invalid_type",
      path: [
        "size",
      ],
      message: "Required",
    },
    {
      code: "invalid_type",
      path: [
        "type",
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `issues`                                                           | [errors.PostFilesIssues](../../models/errors/postfilesissues.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |