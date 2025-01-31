/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The customer to create
 */
export type PostCustomersRequestBody = {
  balance?: string | undefined;
  livemode?: boolean | undefined;
  phoneNumber: string;
  currency?: string | undefined;
  email?: string | null | undefined;
};

/**
 * Create a Customer
 */
export type PostCustomersResponseBody = {
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
export const PostCustomersRequestBody$inboundSchema: z.ZodType<
  PostCustomersRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  balance: z.string().optional(),
  livemode: z.boolean().optional(),
  phone_number: z.string(),
  currency: z.string().optional(),
  email: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "phone_number": "phoneNumber",
  });
});

/** @internal */
export type PostCustomersRequestBody$Outbound = {
  balance?: string | undefined;
  livemode?: boolean | undefined;
  phone_number: string;
  currency?: string | undefined;
  email?: string | null | undefined;
};

/** @internal */
export const PostCustomersRequestBody$outboundSchema: z.ZodType<
  PostCustomersRequestBody$Outbound,
  z.ZodTypeDef,
  PostCustomersRequestBody
> = z.object({
  balance: z.string().optional(),
  livemode: z.boolean().optional(),
  phoneNumber: z.string(),
  currency: z.string().optional(),
  email: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    phoneNumber: "phone_number",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostCustomersRequestBody$ {
  /** @deprecated use `PostCustomersRequestBody$inboundSchema` instead. */
  export const inboundSchema = PostCustomersRequestBody$inboundSchema;
  /** @deprecated use `PostCustomersRequestBody$outboundSchema` instead. */
  export const outboundSchema = PostCustomersRequestBody$outboundSchema;
  /** @deprecated use `PostCustomersRequestBody$Outbound` instead. */
  export type Outbound = PostCustomersRequestBody$Outbound;
}

export function postCustomersRequestBodyToJSON(
  postCustomersRequestBody: PostCustomersRequestBody,
): string {
  return JSON.stringify(
    PostCustomersRequestBody$outboundSchema.parse(postCustomersRequestBody),
  );
}

export function postCustomersRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostCustomersRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostCustomersRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostCustomersRequestBody' from JSON`,
  );
}

/** @internal */
export const PostCustomersResponseBody$inboundSchema: z.ZodType<
  PostCustomersResponseBody,
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
export type PostCustomersResponseBody$Outbound = {
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
export const PostCustomersResponseBody$outboundSchema: z.ZodType<
  PostCustomersResponseBody$Outbound,
  z.ZodTypeDef,
  PostCustomersResponseBody
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
export namespace PostCustomersResponseBody$ {
  /** @deprecated use `PostCustomersResponseBody$inboundSchema` instead. */
  export const inboundSchema = PostCustomersResponseBody$inboundSchema;
  /** @deprecated use `PostCustomersResponseBody$outboundSchema` instead. */
  export const outboundSchema = PostCustomersResponseBody$outboundSchema;
  /** @deprecated use `PostCustomersResponseBody$Outbound` instead. */
  export type Outbound = PostCustomersResponseBody$Outbound;
}

export function postCustomersResponseBodyToJSON(
  postCustomersResponseBody: PostCustomersResponseBody,
): string {
  return JSON.stringify(
    PostCustomersResponseBody$outboundSchema.parse(postCustomersResponseBody),
  );
}

export function postCustomersResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostCustomersResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostCustomersResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostCustomersResponseBody' from JSON`,
  );
}
