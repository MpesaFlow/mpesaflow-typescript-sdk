/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCustomersResponseBody = {
  id: string;
  business: string;
  user: string;
  balance: string;
  object: string;
  created: string;
  livemode: boolean;
  phoneNumber: string;
  currency: string;
  email: string | null;
  updated: string | null;
};

/** @internal */
export const GetCustomersResponseBody$inboundSchema: z.ZodType<
  GetCustomersResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  business: z.string(),
  user: z.string(),
  balance: z.string(),
  object: z.string(),
  created: z.string(),
  livemode: z.boolean(),
  phone_number: z.string(),
  currency: z.string(),
  email: z.nullable(z.string()),
  updated: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "phone_number": "phoneNumber",
  });
});

/** @internal */
export type GetCustomersResponseBody$Outbound = {
  id: string;
  business: string;
  user: string;
  balance: string;
  object: string;
  created: string;
  livemode: boolean;
  phone_number: string;
  currency: string;
  email: string | null;
  updated: string | null;
};

/** @internal */
export const GetCustomersResponseBody$outboundSchema: z.ZodType<
  GetCustomersResponseBody$Outbound,
  z.ZodTypeDef,
  GetCustomersResponseBody
> = z.object({
  id: z.string(),
  business: z.string(),
  user: z.string(),
  balance: z.string(),
  object: z.string(),
  created: z.string(),
  livemode: z.boolean(),
  phoneNumber: z.string(),
  currency: z.string(),
  email: z.nullable(z.string()),
  updated: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    phoneNumber: "phone_number",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCustomersResponseBody$ {
  /** @deprecated use `GetCustomersResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetCustomersResponseBody$inboundSchema;
  /** @deprecated use `GetCustomersResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetCustomersResponseBody$outboundSchema;
  /** @deprecated use `GetCustomersResponseBody$Outbound` instead. */
  export type Outbound = GetCustomersResponseBody$Outbound;
}

export function getCustomersResponseBodyToJSON(
  getCustomersResponseBody: GetCustomersResponseBody,
): string {
  return JSON.stringify(
    GetCustomersResponseBody$outboundSchema.parse(getCustomersResponseBody),
  );
}

export function getCustomersResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetCustomersResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCustomersResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCustomersResponseBody' from JSON`,
  );
}
