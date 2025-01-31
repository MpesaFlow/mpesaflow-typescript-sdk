# Issues

## Example Usage

```typescript
import { Issues } from "mpesaflow/models/errors";

let value: Issues = {
  code: "<value>",
  path: [
    "/opt/bin",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `code`             | *string*           | :heavy_check_mark: | N/A                |
| `path`             | *errors.Path*[]    | :heavy_check_mark: | N/A                |
| `message`          | *string*           | :heavy_minus_sign: | N/A                |