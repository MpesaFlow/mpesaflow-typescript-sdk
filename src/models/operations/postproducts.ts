/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostProductsMetadata = {};

/**
 * The task to create
 */
export type PostProductsRequestBody = {
  active?: boolean | undefined;
  defaultPrice?: string | null | undefined;
  description?: string | null | undefined;
  images: Array<string>;
  metadata: PostProductsMetadata;
  livemode?: boolean | undefined;
  name: string;
  url: string | null;
};

export type PostProductsProductsMetadata = {};

/**
 * Create a Product
 */
export type PostProductsResponseBody = {
  id: string;
  active: boolean;
  defaultPrice: string | null;
  description: string | null;
  images: Array<string>;
  metadata: PostProductsProductsMetadata;
  livemode: boolean;
  name: string;
  created: string | null;
  updated: string | null;
  url: string | null;
};

/** @internal */
export const PostProductsMetadata$inboundSchema: z.ZodType<
  PostProductsMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PostProductsMetadata$Outbound = {};

/** @internal */
export const PostProductsMetadata$outboundSchema: z.ZodType<
  PostProductsMetadata$Outbound,
  z.ZodTypeDef,
  PostProductsMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostProductsMetadata$ {
  /** @deprecated use `PostProductsMetadata$inboundSchema` instead. */
  export const inboundSchema = PostProductsMetadata$inboundSchema;
  /** @deprecated use `PostProductsMetadata$outboundSchema` instead. */
  export const outboundSchema = PostProductsMetadata$outboundSchema;
  /** @deprecated use `PostProductsMetadata$Outbound` instead. */
  export type Outbound = PostProductsMetadata$Outbound;
}

export function postProductsMetadataToJSON(
  postProductsMetadata: PostProductsMetadata,
): string {
  return JSON.stringify(
    PostProductsMetadata$outboundSchema.parse(postProductsMetadata),
  );
}

export function postProductsMetadataFromJSON(
  jsonString: string,
): SafeParseResult<PostProductsMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostProductsMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostProductsMetadata' from JSON`,
  );
}

/** @internal */
export const PostProductsRequestBody$inboundSchema: z.ZodType<
  PostProductsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.boolean().optional(),
  default_price: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  images: z.array(z.string()),
  metadata: z.lazy(() => PostProductsMetadata$inboundSchema),
  livemode: z.boolean().optional(),
  name: z.string(),
  url: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "default_price": "defaultPrice",
  });
});

/** @internal */
export type PostProductsRequestBody$Outbound = {
  active?: boolean | undefined;
  default_price?: string | null | undefined;
  description?: string | null | undefined;
  images: Array<string>;
  metadata: PostProductsMetadata$Outbound;
  livemode?: boolean | undefined;
  name: string;
  url: string | null;
};

/** @internal */
export const PostProductsRequestBody$outboundSchema: z.ZodType<
  PostProductsRequestBody$Outbound,
  z.ZodTypeDef,
  PostProductsRequestBody
> = z.object({
  active: z.boolean().optional(),
  defaultPrice: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  images: z.array(z.string()),
  metadata: z.lazy(() => PostProductsMetadata$outboundSchema),
  livemode: z.boolean().optional(),
  name: z.string(),
  url: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    defaultPrice: "default_price",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostProductsRequestBody$ {
  /** @deprecated use `PostProductsRequestBody$inboundSchema` instead. */
  export const inboundSchema = PostProductsRequestBody$inboundSchema;
  /** @deprecated use `PostProductsRequestBody$outboundSchema` instead. */
  export const outboundSchema = PostProductsRequestBody$outboundSchema;
  /** @deprecated use `PostProductsRequestBody$Outbound` instead. */
  export type Outbound = PostProductsRequestBody$Outbound;
}

export function postProductsRequestBodyToJSON(
  postProductsRequestBody: PostProductsRequestBody,
): string {
  return JSON.stringify(
    PostProductsRequestBody$outboundSchema.parse(postProductsRequestBody),
  );
}

export function postProductsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostProductsRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostProductsRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostProductsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostProductsProductsMetadata$inboundSchema: z.ZodType<
  PostProductsProductsMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PostProductsProductsMetadata$Outbound = {};

/** @internal */
export const PostProductsProductsMetadata$outboundSchema: z.ZodType<
  PostProductsProductsMetadata$Outbound,
  z.ZodTypeDef,
  PostProductsProductsMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostProductsProductsMetadata$ {
  /** @deprecated use `PostProductsProductsMetadata$inboundSchema` instead. */
  export const inboundSchema = PostProductsProductsMetadata$inboundSchema;
  /** @deprecated use `PostProductsProductsMetadata$outboundSchema` instead. */
  export const outboundSchema = PostProductsProductsMetadata$outboundSchema;
  /** @deprecated use `PostProductsProductsMetadata$Outbound` instead. */
  export type Outbound = PostProductsProductsMetadata$Outbound;
}

export function postProductsProductsMetadataToJSON(
  postProductsProductsMetadata: PostProductsProductsMetadata,
): string {
  return JSON.stringify(
    PostProductsProductsMetadata$outboundSchema.parse(
      postProductsProductsMetadata,
    ),
  );
}

export function postProductsProductsMetadataFromJSON(
  jsonString: string,
): SafeParseResult<PostProductsProductsMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostProductsProductsMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostProductsProductsMetadata' from JSON`,
  );
}

/** @internal */
export const PostProductsResponseBody$inboundSchema: z.ZodType<
  PostProductsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  active: z.boolean(),
  default_price: z.nullable(z.string()),
  description: z.nullable(z.string()),
  images: z.array(z.string()),
  metadata: z.lazy(() => PostProductsProductsMetadata$inboundSchema),
  livemode: z.boolean(),
  name: z.string(),
  created: z.nullable(z.string()),
  updated: z.nullable(z.string()),
  url: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "default_price": "defaultPrice",
  });
});

/** @internal */
export type PostProductsResponseBody$Outbound = {
  id: string;
  active: boolean;
  default_price: string | null;
  description: string | null;
  images: Array<string>;
  metadata: PostProductsProductsMetadata$Outbound;
  livemode: boolean;
  name: string;
  created: string | null;
  updated: string | null;
  url: string | null;
};

/** @internal */
export const PostProductsResponseBody$outboundSchema: z.ZodType<
  PostProductsResponseBody$Outbound,
  z.ZodTypeDef,
  PostProductsResponseBody
> = z.object({
  id: z.string(),
  active: z.boolean(),
  defaultPrice: z.nullable(z.string()),
  description: z.nullable(z.string()),
  images: z.array(z.string()),
  metadata: z.lazy(() => PostProductsProductsMetadata$outboundSchema),
  livemode: z.boolean(),
  name: z.string(),
  created: z.nullable(z.string()),
  updated: z.nullable(z.string()),
  url: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    defaultPrice: "default_price",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostProductsResponseBody$ {
  /** @deprecated use `PostProductsResponseBody$inboundSchema` instead. */
  export const inboundSchema = PostProductsResponseBody$inboundSchema;
  /** @deprecated use `PostProductsResponseBody$outboundSchema` instead. */
  export const outboundSchema = PostProductsResponseBody$outboundSchema;
  /** @deprecated use `PostProductsResponseBody$Outbound` instead. */
  export type Outbound = PostProductsResponseBody$Outbound;
}

export function postProductsResponseBodyToJSON(
  postProductsResponseBody: PostProductsResponseBody,
): string {
  return JSON.stringify(
    PostProductsResponseBody$outboundSchema.parse(postProductsResponseBody),
  );
}

export function postProductsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostProductsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostProductsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostProductsResponseBody' from JSON`,
  );
}
