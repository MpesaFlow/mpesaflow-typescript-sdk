<!-- Start SDK Example Usage [usage] -->
```typescript
import { Mpesaflow } from "mpesaflow";

const mpesaflow = new Mpesaflow({
  bearer: process.env["MPESAFLOW_BEARER"] ?? "",
});

async function run() {
  const result = await mpesaflow.businesses.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->