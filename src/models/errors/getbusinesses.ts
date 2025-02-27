/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Businesses Not Found
 */
export type GetBusinessesResponseBodyData = {
  message: string;
};

/**
 * Businesses Not Found
 */
export class GetBusinessesResponseBody extends Error {
  /** The original data that was passed to this error instance. */
  data$: GetBusinessesResponseBodyData;

  constructor(err: GetBusinessesResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.name = "GetBusinessesResponseBody";
  }
}

/** @internal */
export const GetBusinessesResponseBody$inboundSchema: z.ZodType<
  GetBusinessesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
})
  .transform((v) => {
    return new GetBusinessesResponseBody(v);
  });

/** @internal */
export type GetBusinessesResponseBody$Outbound = {
  message: string;
};

/** @internal */
export const GetBusinessesResponseBody$outboundSchema: z.ZodType<
  GetBusinessesResponseBody$Outbound,
  z.ZodTypeDef,
  GetBusinessesResponseBody
> = z.instanceof(GetBusinessesResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBusinessesResponseBody$ {
  /** @deprecated use `GetBusinessesResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetBusinessesResponseBody$inboundSchema;
  /** @deprecated use `GetBusinessesResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetBusinessesResponseBody$outboundSchema;
  /** @deprecated use `GetBusinessesResponseBody$Outbound` instead. */
  export type Outbound = GetBusinessesResponseBody$Outbound;
}
