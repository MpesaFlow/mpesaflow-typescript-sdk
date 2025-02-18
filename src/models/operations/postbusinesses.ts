/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TestEnvs = {
  passKey: string | null;
  consumerKey: string | null;
  consumerSecret: string | null;
  businessShortCode: string | null;
};

export type LiveEnvs = {
  passKey: string | null;
  consumerKey: string | null;
  consumerSecret: string | null;
  businessShortCode: string | null;
};

/**
 * The business to create
 */
export type PostBusinessesRequestBody = {
  active?: boolean | undefined;
  livemode?: boolean | undefined;
  businessIcon?: string | null | undefined;
  businessLogo?: string | null | undefined;
  name: string;
  testEnvs: TestEnvs;
  liveEnvs: LiveEnvs;
};

export type PostBusinessesTestEnvs = {
  passKey: string | null;
  consumerKey: string | null;
  consumerSecret: string | null;
  businessShortCode: string | null;
};

export type PostBusinessesLiveEnvs = {
  passKey: string | null;
  consumerKey: string | null;
  consumerSecret: string | null;
  businessShortCode: string | null;
};

/**
 * Create a Business
 */
export type PostBusinessesResponseBody = {
  id: string;
  user: string;
  object: string;
  active: boolean;
  created: string;
  livemode: boolean;
  businessIcon: string | null;
  businessLogo: string | null;
  name: string;
  testEnvs: PostBusinessesTestEnvs;
  liveEnvs: PostBusinessesLiveEnvs;
};

/** @internal */
export const TestEnvs$inboundSchema: z.ZodType<
  TestEnvs,
  z.ZodTypeDef,
  unknown
> = z.object({
  pass_key: z.nullable(z.string()),
  consumer_key: z.nullable(z.string()),
  consumer_secret: z.nullable(z.string()),
  business_short_code: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "pass_key": "passKey",
    "consumer_key": "consumerKey",
    "consumer_secret": "consumerSecret",
    "business_short_code": "businessShortCode",
  });
});

/** @internal */
export type TestEnvs$Outbound = {
  pass_key: string | null;
  consumer_key: string | null;
  consumer_secret: string | null;
  business_short_code: string | null;
};

/** @internal */
export const TestEnvs$outboundSchema: z.ZodType<
  TestEnvs$Outbound,
  z.ZodTypeDef,
  TestEnvs
> = z.object({
  passKey: z.nullable(z.string()),
  consumerKey: z.nullable(z.string()),
  consumerSecret: z.nullable(z.string()),
  businessShortCode: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    passKey: "pass_key",
    consumerKey: "consumer_key",
    consumerSecret: "consumer_secret",
    businessShortCode: "business_short_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TestEnvs$ {
  /** @deprecated use `TestEnvs$inboundSchema` instead. */
  export const inboundSchema = TestEnvs$inboundSchema;
  /** @deprecated use `TestEnvs$outboundSchema` instead. */
  export const outboundSchema = TestEnvs$outboundSchema;
  /** @deprecated use `TestEnvs$Outbound` instead. */
  export type Outbound = TestEnvs$Outbound;
}

export function testEnvsToJSON(testEnvs: TestEnvs): string {
  return JSON.stringify(TestEnvs$outboundSchema.parse(testEnvs));
}

export function testEnvsFromJSON(
  jsonString: string,
): SafeParseResult<TestEnvs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TestEnvs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TestEnvs' from JSON`,
  );
}

/** @internal */
export const LiveEnvs$inboundSchema: z.ZodType<
  LiveEnvs,
  z.ZodTypeDef,
  unknown
> = z.object({
  pass_key: z.nullable(z.string()),
  consumer_key: z.nullable(z.string()),
  consumer_secret: z.nullable(z.string()),
  business_short_code: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "pass_key": "passKey",
    "consumer_key": "consumerKey",
    "consumer_secret": "consumerSecret",
    "business_short_code": "businessShortCode",
  });
});

/** @internal */
export type LiveEnvs$Outbound = {
  pass_key: string | null;
  consumer_key: string | null;
  consumer_secret: string | null;
  business_short_code: string | null;
};

/** @internal */
export const LiveEnvs$outboundSchema: z.ZodType<
  LiveEnvs$Outbound,
  z.ZodTypeDef,
  LiveEnvs
> = z.object({
  passKey: z.nullable(z.string()),
  consumerKey: z.nullable(z.string()),
  consumerSecret: z.nullable(z.string()),
  businessShortCode: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    passKey: "pass_key",
    consumerKey: "consumer_key",
    consumerSecret: "consumer_secret",
    businessShortCode: "business_short_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LiveEnvs$ {
  /** @deprecated use `LiveEnvs$inboundSchema` instead. */
  export const inboundSchema = LiveEnvs$inboundSchema;
  /** @deprecated use `LiveEnvs$outboundSchema` instead. */
  export const outboundSchema = LiveEnvs$outboundSchema;
  /** @deprecated use `LiveEnvs$Outbound` instead. */
  export type Outbound = LiveEnvs$Outbound;
}

export function liveEnvsToJSON(liveEnvs: LiveEnvs): string {
  return JSON.stringify(LiveEnvs$outboundSchema.parse(liveEnvs));
}

export function liveEnvsFromJSON(
  jsonString: string,
): SafeParseResult<LiveEnvs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LiveEnvs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LiveEnvs' from JSON`,
  );
}

/** @internal */
export const PostBusinessesRequestBody$inboundSchema: z.ZodType<
  PostBusinessesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.boolean().optional(),
  livemode: z.boolean().optional(),
  business_icon: z.nullable(z.string()).optional(),
  business_logo: z.nullable(z.string()).optional(),
  name: z.string(),
  test_envs: z.lazy(() => TestEnvs$inboundSchema),
  live_envs: z.lazy(() => LiveEnvs$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "business_icon": "businessIcon",
    "business_logo": "businessLogo",
    "test_envs": "testEnvs",
    "live_envs": "liveEnvs",
  });
});

/** @internal */
export type PostBusinessesRequestBody$Outbound = {
  active?: boolean | undefined;
  livemode?: boolean | undefined;
  business_icon?: string | null | undefined;
  business_logo?: string | null | undefined;
  name: string;
  test_envs: TestEnvs$Outbound;
  live_envs: LiveEnvs$Outbound;
};

/** @internal */
export const PostBusinessesRequestBody$outboundSchema: z.ZodType<
  PostBusinessesRequestBody$Outbound,
  z.ZodTypeDef,
  PostBusinessesRequestBody
> = z.object({
  active: z.boolean().optional(),
  livemode: z.boolean().optional(),
  businessIcon: z.nullable(z.string()).optional(),
  businessLogo: z.nullable(z.string()).optional(),
  name: z.string(),
  testEnvs: z.lazy(() => TestEnvs$outboundSchema),
  liveEnvs: z.lazy(() => LiveEnvs$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    businessIcon: "business_icon",
    businessLogo: "business_logo",
    testEnvs: "test_envs",
    liveEnvs: "live_envs",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostBusinessesRequestBody$ {
  /** @deprecated use `PostBusinessesRequestBody$inboundSchema` instead. */
  export const inboundSchema = PostBusinessesRequestBody$inboundSchema;
  /** @deprecated use `PostBusinessesRequestBody$outboundSchema` instead. */
  export const outboundSchema = PostBusinessesRequestBody$outboundSchema;
  /** @deprecated use `PostBusinessesRequestBody$Outbound` instead. */
  export type Outbound = PostBusinessesRequestBody$Outbound;
}

export function postBusinessesRequestBodyToJSON(
  postBusinessesRequestBody: PostBusinessesRequestBody,
): string {
  return JSON.stringify(
    PostBusinessesRequestBody$outboundSchema.parse(postBusinessesRequestBody),
  );
}

export function postBusinessesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostBusinessesRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostBusinessesRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostBusinessesRequestBody' from JSON`,
  );
}

/** @internal */
export const PostBusinessesTestEnvs$inboundSchema: z.ZodType<
  PostBusinessesTestEnvs,
  z.ZodTypeDef,
  unknown
> = z.object({
  pass_key: z.nullable(z.string()),
  consumer_key: z.nullable(z.string()),
  consumer_secret: z.nullable(z.string()),
  business_short_code: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "pass_key": "passKey",
    "consumer_key": "consumerKey",
    "consumer_secret": "consumerSecret",
    "business_short_code": "businessShortCode",
  });
});

/** @internal */
export type PostBusinessesTestEnvs$Outbound = {
  pass_key: string | null;
  consumer_key: string | null;
  consumer_secret: string | null;
  business_short_code: string | null;
};

/** @internal */
export const PostBusinessesTestEnvs$outboundSchema: z.ZodType<
  PostBusinessesTestEnvs$Outbound,
  z.ZodTypeDef,
  PostBusinessesTestEnvs
> = z.object({
  passKey: z.nullable(z.string()),
  consumerKey: z.nullable(z.string()),
  consumerSecret: z.nullable(z.string()),
  businessShortCode: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    passKey: "pass_key",
    consumerKey: "consumer_key",
    consumerSecret: "consumer_secret",
    businessShortCode: "business_short_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostBusinessesTestEnvs$ {
  /** @deprecated use `PostBusinessesTestEnvs$inboundSchema` instead. */
  export const inboundSchema = PostBusinessesTestEnvs$inboundSchema;
  /** @deprecated use `PostBusinessesTestEnvs$outboundSchema` instead. */
  export const outboundSchema = PostBusinessesTestEnvs$outboundSchema;
  /** @deprecated use `PostBusinessesTestEnvs$Outbound` instead. */
  export type Outbound = PostBusinessesTestEnvs$Outbound;
}

export function postBusinessesTestEnvsToJSON(
  postBusinessesTestEnvs: PostBusinessesTestEnvs,
): string {
  return JSON.stringify(
    PostBusinessesTestEnvs$outboundSchema.parse(postBusinessesTestEnvs),
  );
}

export function postBusinessesTestEnvsFromJSON(
  jsonString: string,
): SafeParseResult<PostBusinessesTestEnvs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostBusinessesTestEnvs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostBusinessesTestEnvs' from JSON`,
  );
}

/** @internal */
export const PostBusinessesLiveEnvs$inboundSchema: z.ZodType<
  PostBusinessesLiveEnvs,
  z.ZodTypeDef,
  unknown
> = z.object({
  pass_key: z.nullable(z.string()),
  consumer_key: z.nullable(z.string()),
  consumer_secret: z.nullable(z.string()),
  business_short_code: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "pass_key": "passKey",
    "consumer_key": "consumerKey",
    "consumer_secret": "consumerSecret",
    "business_short_code": "businessShortCode",
  });
});

/** @internal */
export type PostBusinessesLiveEnvs$Outbound = {
  pass_key: string | null;
  consumer_key: string | null;
  consumer_secret: string | null;
  business_short_code: string | null;
};

/** @internal */
export const PostBusinessesLiveEnvs$outboundSchema: z.ZodType<
  PostBusinessesLiveEnvs$Outbound,
  z.ZodTypeDef,
  PostBusinessesLiveEnvs
> = z.object({
  passKey: z.nullable(z.string()),
  consumerKey: z.nullable(z.string()),
  consumerSecret: z.nullable(z.string()),
  businessShortCode: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    passKey: "pass_key",
    consumerKey: "consumer_key",
    consumerSecret: "consumer_secret",
    businessShortCode: "business_short_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostBusinessesLiveEnvs$ {
  /** @deprecated use `PostBusinessesLiveEnvs$inboundSchema` instead. */
  export const inboundSchema = PostBusinessesLiveEnvs$inboundSchema;
  /** @deprecated use `PostBusinessesLiveEnvs$outboundSchema` instead. */
  export const outboundSchema = PostBusinessesLiveEnvs$outboundSchema;
  /** @deprecated use `PostBusinessesLiveEnvs$Outbound` instead. */
  export type Outbound = PostBusinessesLiveEnvs$Outbound;
}

export function postBusinessesLiveEnvsToJSON(
  postBusinessesLiveEnvs: PostBusinessesLiveEnvs,
): string {
  return JSON.stringify(
    PostBusinessesLiveEnvs$outboundSchema.parse(postBusinessesLiveEnvs),
  );
}

export function postBusinessesLiveEnvsFromJSON(
  jsonString: string,
): SafeParseResult<PostBusinessesLiveEnvs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostBusinessesLiveEnvs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostBusinessesLiveEnvs' from JSON`,
  );
}

/** @internal */
export const PostBusinessesResponseBody$inboundSchema: z.ZodType<
  PostBusinessesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  user: z.string(),
  object: z.string(),
  active: z.boolean(),
  created: z.string(),
  livemode: z.boolean(),
  business_icon: z.nullable(z.string()),
  business_logo: z.nullable(z.string()),
  name: z.string(),
  test_envs: z.lazy(() => PostBusinessesTestEnvs$inboundSchema),
  live_envs: z.lazy(() => PostBusinessesLiveEnvs$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "business_icon": "businessIcon",
    "business_logo": "businessLogo",
    "test_envs": "testEnvs",
    "live_envs": "liveEnvs",
  });
});

/** @internal */
export type PostBusinessesResponseBody$Outbound = {
  id: string;
  user: string;
  object: string;
  active: boolean;
  created: string;
  livemode: boolean;
  business_icon: string | null;
  business_logo: string | null;
  name: string;
  test_envs: PostBusinessesTestEnvs$Outbound;
  live_envs: PostBusinessesLiveEnvs$Outbound;
};

/** @internal */
export const PostBusinessesResponseBody$outboundSchema: z.ZodType<
  PostBusinessesResponseBody$Outbound,
  z.ZodTypeDef,
  PostBusinessesResponseBody
> = z.object({
  id: z.string(),
  user: z.string(),
  object: z.string(),
  active: z.boolean(),
  created: z.string(),
  livemode: z.boolean(),
  businessIcon: z.nullable(z.string()),
  businessLogo: z.nullable(z.string()),
  name: z.string(),
  testEnvs: z.lazy(() => PostBusinessesTestEnvs$outboundSchema),
  liveEnvs: z.lazy(() => PostBusinessesLiveEnvs$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    businessIcon: "business_icon",
    businessLogo: "business_logo",
    testEnvs: "test_envs",
    liveEnvs: "live_envs",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostBusinessesResponseBody$ {
  /** @deprecated use `PostBusinessesResponseBody$inboundSchema` instead. */
  export const inboundSchema = PostBusinessesResponseBody$inboundSchema;
  /** @deprecated use `PostBusinessesResponseBody$outboundSchema` instead. */
  export const outboundSchema = PostBusinessesResponseBody$outboundSchema;
  /** @deprecated use `PostBusinessesResponseBody$Outbound` instead. */
  export type Outbound = PostBusinessesResponseBody$Outbound;
}

export function postBusinessesResponseBodyToJSON(
  postBusinessesResponseBody: PostBusinessesResponseBody,
): string {
  return JSON.stringify(
    PostBusinessesResponseBody$outboundSchema.parse(postBusinessesResponseBody),
  );
}

export function postBusinessesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostBusinessesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostBusinessesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostBusinessesResponseBody' from JSON`,
  );
}
