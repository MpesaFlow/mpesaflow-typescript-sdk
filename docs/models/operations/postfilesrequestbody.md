# PostFilesRequestBody

The file to create

## Example Usage

```typescript
import { PostFilesRequestBody } from "mpesaflow/models/operations";

let value: PostFilesRequestBody = {
  expiresAt: "1760941069475",
  filename: "example.file",
  purpose: "<value>",
  size: "<value>",
  type: "<value>",
  url: "https://dental-morbidity.com/",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `expiresAt`        | *string*           | :heavy_check_mark: | N/A                |
| `filename`         | *string*           | :heavy_check_mark: | N/A                |
| `livemode`         | *boolean*          | :heavy_minus_sign: | N/A                |
| `purpose`          | *string*           | :heavy_check_mark: | N/A                |
| `title`            | *string*           | :heavy_minus_sign: | N/A                |
| `size`             | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |
| `url`              | *string*           | :heavy_check_mark: | N/A                |