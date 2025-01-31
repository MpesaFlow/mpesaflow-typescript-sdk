/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Metadata = {};

export type HostedConfirmation = {
  customMessage: string | null;
};

export type AfterCompletion = {
  hostedConfirmation: HostedConfirmation;
};

export const SubmitType = {
  Auto: "auto",
  Donate: "donate",
  Pay: "pay",
} as const;
export type SubmitType = ClosedEnum<typeof SubmitType>;

/**
 * The payment link to create
 */
export type PostPaymentLinksRequestBody = {
  product: string;
  active?: boolean | undefined;
  metadata: Metadata;
  afterCompletion: AfterCompletion;
  currency?: string | undefined;
  livemode?: boolean | undefined;
  submitType?: SubmitType | undefined;
  inactiveMessage?: string | null | undefined;
  url: string;
};

export type PostPaymentLinksMetadata = {};

export type PostPaymentLinksHostedConfirmation = {
  customMessage: string | null;
};

export type PostPaymentLinksAfterCompletion = {
  hostedConfirmation: PostPaymentLinksHostedConfirmation;
};

export const PostPaymentLinksSubmitType = {
  Auto: "auto",
  Donate: "donate",
  Pay: "pay",
} as const;
export type PostPaymentLinksSubmitType = ClosedEnum<
  typeof PostPaymentLinksSubmitType
>;

/**
 * Create a Payment Link
 */
export type PostPaymentLinksResponseBody = {
  id: string;
  product: string;
  active: boolean;
  metadata: PostPaymentLinksMetadata;
  afterCompletion: PostPaymentLinksAfterCompletion;
  currency: string;
  livemode: boolean;
  submitType: PostPaymentLinksSubmitType;
  inactiveMessage: string | null;
  url: string;
  created: string | null;
  updated: string | null;
};

/** @internal */
export const Metadata$inboundSchema: z.ZodType<
  Metadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Metadata$Outbound = {};

/** @internal */
export const Metadata$outboundSchema: z.ZodType<
  Metadata$Outbound,
  z.ZodTypeDef,
  Metadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Metadata$ {
  /** @deprecated use `Metadata$inboundSchema` instead. */
  export const inboundSchema = Metadata$inboundSchema;
  /** @deprecated use `Metadata$outboundSchema` instead. */
  export const outboundSchema = Metadata$outboundSchema;
  /** @deprecated use `Metadata$Outbound` instead. */
  export type Outbound = Metadata$Outbound;
}

export function metadataToJSON(metadata: Metadata): string {
  return JSON.stringify(Metadata$outboundSchema.parse(metadata));
}

export function metadataFromJSON(
  jsonString: string,
): SafeParseResult<Metadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Metadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Metadata' from JSON`,
  );
}

/** @internal */
export const HostedConfirmation$inboundSchema: z.ZodType<
  HostedConfirmation,
  z.ZodTypeDef,
  unknown
> = z.object({
  custom_message: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "custom_message": "customMessage",
  });
});

/** @internal */
export type HostedConfirmation$Outbound = {
  custom_message: string | null;
};

/** @internal */
export const HostedConfirmation$outboundSchema: z.ZodType<
  HostedConfirmation$Outbound,
  z.ZodTypeDef,
  HostedConfirmation
> = z.object({
  customMessage: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    customMessage: "custom_message",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HostedConfirmation$ {
  /** @deprecated use `HostedConfirmation$inboundSchema` instead. */
  export const inboundSchema = HostedConfirmation$inboundSchema;
  /** @deprecated use `HostedConfirmation$outboundSchema` instead. */
  export const outboundSchema = HostedConfirmation$outboundSchema;
  /** @deprecated use `HostedConfirmation$Outbound` instead. */
  export type Outbound = HostedConfirmation$Outbound;
}

export function hostedConfirmationToJSON(
  hostedConfirmation: HostedConfirmation,
): string {
  return JSON.stringify(
    HostedConfirmation$outboundSchema.parse(hostedConfirmation),
  );
}

export function hostedConfirmationFromJSON(
  jsonString: string,
): SafeParseResult<HostedConfirmation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HostedConfirmation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HostedConfirmation' from JSON`,
  );
}

/** @internal */
export const AfterCompletion$inboundSchema: z.ZodType<
  AfterCompletion,
  z.ZodTypeDef,
  unknown
> = z.object({
  hosted_confirmation: z.lazy(() => HostedConfirmation$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "hosted_confirmation": "hostedConfirmation",
  });
});

/** @internal */
export type AfterCompletion$Outbound = {
  hosted_confirmation: HostedConfirmation$Outbound;
};

/** @internal */
export const AfterCompletion$outboundSchema: z.ZodType<
  AfterCompletion$Outbound,
  z.ZodTypeDef,
  AfterCompletion
> = z.object({
  hostedConfirmation: z.lazy(() => HostedConfirmation$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    hostedConfirmation: "hosted_confirmation",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AfterCompletion$ {
  /** @deprecated use `AfterCompletion$inboundSchema` instead. */
  export const inboundSchema = AfterCompletion$inboundSchema;
  /** @deprecated use `AfterCompletion$outboundSchema` instead. */
  export const outboundSchema = AfterCompletion$outboundSchema;
  /** @deprecated use `AfterCompletion$Outbound` instead. */
  export type Outbound = AfterCompletion$Outbound;
}

export function afterCompletionToJSON(
  afterCompletion: AfterCompletion,
): string {
  return JSON.stringify(AfterCompletion$outboundSchema.parse(afterCompletion));
}

export function afterCompletionFromJSON(
  jsonString: string,
): SafeParseResult<AfterCompletion, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AfterCompletion$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AfterCompletion' from JSON`,
  );
}

/** @internal */
export const SubmitType$inboundSchema: z.ZodNativeEnum<typeof SubmitType> = z
  .nativeEnum(SubmitType);

/** @internal */
export const SubmitType$outboundSchema: z.ZodNativeEnum<typeof SubmitType> =
  SubmitType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubmitType$ {
  /** @deprecated use `SubmitType$inboundSchema` instead. */
  export const inboundSchema = SubmitType$inboundSchema;
  /** @deprecated use `SubmitType$outboundSchema` instead. */
  export const outboundSchema = SubmitType$outboundSchema;
}

/** @internal */
export const PostPaymentLinksRequestBody$inboundSchema: z.ZodType<
  PostPaymentLinksRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  product: z.string(),
  active: z.boolean().optional(),
  metadata: z.lazy(() => Metadata$inboundSchema),
  after_completion: z.lazy(() => AfterCompletion$inboundSchema),
  currency: z.string().optional(),
  livemode: z.boolean().optional(),
  submit_type: SubmitType$inboundSchema.optional(),
  inactive_message: z.nullable(z.string()).optional(),
  url: z.string(),
}).transform((v) => {
  return remap$(v, {
    "after_completion": "afterCompletion",
    "submit_type": "submitType",
    "inactive_message": "inactiveMessage",
  });
});

/** @internal */
export type PostPaymentLinksRequestBody$Outbound = {
  product: string;
  active?: boolean | undefined;
  metadata: Metadata$Outbound;
  after_completion: AfterCompletion$Outbound;
  currency?: string | undefined;
  livemode?: boolean | undefined;
  submit_type?: string | undefined;
  inactive_message?: string | null | undefined;
  url: string;
};

/** @internal */
export const PostPaymentLinksRequestBody$outboundSchema: z.ZodType<
  PostPaymentLinksRequestBody$Outbound,
  z.ZodTypeDef,
  PostPaymentLinksRequestBody
> = z.object({
  product: z.string(),
  active: z.boolean().optional(),
  metadata: z.lazy(() => Metadata$outboundSchema),
  afterCompletion: z.lazy(() => AfterCompletion$outboundSchema),
  currency: z.string().optional(),
  livemode: z.boolean().optional(),
  submitType: SubmitType$outboundSchema.optional(),
  inactiveMessage: z.nullable(z.string()).optional(),
  url: z.string(),
}).transform((v) => {
  return remap$(v, {
    afterCompletion: "after_completion",
    submitType: "submit_type",
    inactiveMessage: "inactive_message",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostPaymentLinksRequestBody$ {
  /** @deprecated use `PostPaymentLinksRequestBody$inboundSchema` instead. */
  export const inboundSchema = PostPaymentLinksRequestBody$inboundSchema;
  /** @deprecated use `PostPaymentLinksRequestBody$outboundSchema` instead. */
  export const outboundSchema = PostPaymentLinksRequestBody$outboundSchema;
  /** @deprecated use `PostPaymentLinksRequestBody$Outbound` instead. */
  export type Outbound = PostPaymentLinksRequestBody$Outbound;
}

export function postPaymentLinksRequestBodyToJSON(
  postPaymentLinksRequestBody: PostPaymentLinksRequestBody,
): string {
  return JSON.stringify(
    PostPaymentLinksRequestBody$outboundSchema.parse(
      postPaymentLinksRequestBody,
    ),
  );
}

export function postPaymentLinksRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostPaymentLinksRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostPaymentLinksRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostPaymentLinksRequestBody' from JSON`,
  );
}

/** @internal */
export const PostPaymentLinksMetadata$inboundSchema: z.ZodType<
  PostPaymentLinksMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PostPaymentLinksMetadata$Outbound = {};

/** @internal */
export const PostPaymentLinksMetadata$outboundSchema: z.ZodType<
  PostPaymentLinksMetadata$Outbound,
  z.ZodTypeDef,
  PostPaymentLinksMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostPaymentLinksMetadata$ {
  /** @deprecated use `PostPaymentLinksMetadata$inboundSchema` instead. */
  export const inboundSchema = PostPaymentLinksMetadata$inboundSchema;
  /** @deprecated use `PostPaymentLinksMetadata$outboundSchema` instead. */
  export const outboundSchema = PostPaymentLinksMetadata$outboundSchema;
  /** @deprecated use `PostPaymentLinksMetadata$Outbound` instead. */
  export type Outbound = PostPaymentLinksMetadata$Outbound;
}

export function postPaymentLinksMetadataToJSON(
  postPaymentLinksMetadata: PostPaymentLinksMetadata,
): string {
  return JSON.stringify(
    PostPaymentLinksMetadata$outboundSchema.parse(postPaymentLinksMetadata),
  );
}

export function postPaymentLinksMetadataFromJSON(
  jsonString: string,
): SafeParseResult<PostPaymentLinksMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostPaymentLinksMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostPaymentLinksMetadata' from JSON`,
  );
}

/** @internal */
export const PostPaymentLinksHostedConfirmation$inboundSchema: z.ZodType<
  PostPaymentLinksHostedConfirmation,
  z.ZodTypeDef,
  unknown
> = z.object({
  custom_message: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "custom_message": "customMessage",
  });
});

/** @internal */
export type PostPaymentLinksHostedConfirmation$Outbound = {
  custom_message: string | null;
};

/** @internal */
export const PostPaymentLinksHostedConfirmation$outboundSchema: z.ZodType<
  PostPaymentLinksHostedConfirmation$Outbound,
  z.ZodTypeDef,
  PostPaymentLinksHostedConfirmation
> = z.object({
  customMessage: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    customMessage: "custom_message",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostPaymentLinksHostedConfirmation$ {
  /** @deprecated use `PostPaymentLinksHostedConfirmation$inboundSchema` instead. */
  export const inboundSchema = PostPaymentLinksHostedConfirmation$inboundSchema;
  /** @deprecated use `PostPaymentLinksHostedConfirmation$outboundSchema` instead. */
  export const outboundSchema =
    PostPaymentLinksHostedConfirmation$outboundSchema;
  /** @deprecated use `PostPaymentLinksHostedConfirmation$Outbound` instead. */
  export type Outbound = PostPaymentLinksHostedConfirmation$Outbound;
}

export function postPaymentLinksHostedConfirmationToJSON(
  postPaymentLinksHostedConfirmation: PostPaymentLinksHostedConfirmation,
): string {
  return JSON.stringify(
    PostPaymentLinksHostedConfirmation$outboundSchema.parse(
      postPaymentLinksHostedConfirmation,
    ),
  );
}

export function postPaymentLinksHostedConfirmationFromJSON(
  jsonString: string,
): SafeParseResult<PostPaymentLinksHostedConfirmation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostPaymentLinksHostedConfirmation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostPaymentLinksHostedConfirmation' from JSON`,
  );
}

/** @internal */
export const PostPaymentLinksAfterCompletion$inboundSchema: z.ZodType<
  PostPaymentLinksAfterCompletion,
  z.ZodTypeDef,
  unknown
> = z.object({
  hosted_confirmation: z.lazy(() =>
    PostPaymentLinksHostedConfirmation$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "hosted_confirmation": "hostedConfirmation",
  });
});

/** @internal */
export type PostPaymentLinksAfterCompletion$Outbound = {
  hosted_confirmation: PostPaymentLinksHostedConfirmation$Outbound;
};

/** @internal */
export const PostPaymentLinksAfterCompletion$outboundSchema: z.ZodType<
  PostPaymentLinksAfterCompletion$Outbound,
  z.ZodTypeDef,
  PostPaymentLinksAfterCompletion
> = z.object({
  hostedConfirmation: z.lazy(() =>
    PostPaymentLinksHostedConfirmation$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    hostedConfirmation: "hosted_confirmation",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostPaymentLinksAfterCompletion$ {
  /** @deprecated use `PostPaymentLinksAfterCompletion$inboundSchema` instead. */
  export const inboundSchema = PostPaymentLinksAfterCompletion$inboundSchema;
  /** @deprecated use `PostPaymentLinksAfterCompletion$outboundSchema` instead. */
  export const outboundSchema = PostPaymentLinksAfterCompletion$outboundSchema;
  /** @deprecated use `PostPaymentLinksAfterCompletion$Outbound` instead. */
  export type Outbound = PostPaymentLinksAfterCompletion$Outbound;
}

export function postPaymentLinksAfterCompletionToJSON(
  postPaymentLinksAfterCompletion: PostPaymentLinksAfterCompletion,
): string {
  return JSON.stringify(
    PostPaymentLinksAfterCompletion$outboundSchema.parse(
      postPaymentLinksAfterCompletion,
    ),
  );
}

export function postPaymentLinksAfterCompletionFromJSON(
  jsonString: string,
): SafeParseResult<PostPaymentLinksAfterCompletion, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostPaymentLinksAfterCompletion$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostPaymentLinksAfterCompletion' from JSON`,
  );
}

/** @internal */
export const PostPaymentLinksSubmitType$inboundSchema: z.ZodNativeEnum<
  typeof PostPaymentLinksSubmitType
> = z.nativeEnum(PostPaymentLinksSubmitType);

/** @internal */
export const PostPaymentLinksSubmitType$outboundSchema: z.ZodNativeEnum<
  typeof PostPaymentLinksSubmitType
> = PostPaymentLinksSubmitType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostPaymentLinksSubmitType$ {
  /** @deprecated use `PostPaymentLinksSubmitType$inboundSchema` instead. */
  export const inboundSchema = PostPaymentLinksSubmitType$inboundSchema;
  /** @deprecated use `PostPaymentLinksSubmitType$outboundSchema` instead. */
  export const outboundSchema = PostPaymentLinksSubmitType$outboundSchema;
}

/** @internal */
export const PostPaymentLinksResponseBody$inboundSchema: z.ZodType<
  PostPaymentLinksResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  product: z.string(),
  active: z.boolean(),
  metadata: z.lazy(() => PostPaymentLinksMetadata$inboundSchema),
  after_completion: z.lazy(() => PostPaymentLinksAfterCompletion$inboundSchema),
  currency: z.string(),
  livemode: z.boolean(),
  submit_type: PostPaymentLinksSubmitType$inboundSchema,
  inactive_message: z.nullable(z.string()),
  url: z.string(),
  created: z.nullable(z.string()),
  updated: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "after_completion": "afterCompletion",
    "submit_type": "submitType",
    "inactive_message": "inactiveMessage",
  });
});

/** @internal */
export type PostPaymentLinksResponseBody$Outbound = {
  id: string;
  product: string;
  active: boolean;
  metadata: PostPaymentLinksMetadata$Outbound;
  after_completion: PostPaymentLinksAfterCompletion$Outbound;
  currency: string;
  livemode: boolean;
  submit_type: string;
  inactive_message: string | null;
  url: string;
  created: string | null;
  updated: string | null;
};

/** @internal */
export const PostPaymentLinksResponseBody$outboundSchema: z.ZodType<
  PostPaymentLinksResponseBody$Outbound,
  z.ZodTypeDef,
  PostPaymentLinksResponseBody
> = z.object({
  id: z.string(),
  product: z.string(),
  active: z.boolean(),
  metadata: z.lazy(() => PostPaymentLinksMetadata$outboundSchema),
  afterCompletion: z.lazy(() => PostPaymentLinksAfterCompletion$outboundSchema),
  currency: z.string(),
  livemode: z.boolean(),
  submitType: PostPaymentLinksSubmitType$outboundSchema,
  inactiveMessage: z.nullable(z.string()),
  url: z.string(),
  created: z.nullable(z.string()),
  updated: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    afterCompletion: "after_completion",
    submitType: "submit_type",
    inactiveMessage: "inactive_message",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostPaymentLinksResponseBody$ {
  /** @deprecated use `PostPaymentLinksResponseBody$inboundSchema` instead. */
  export const inboundSchema = PostPaymentLinksResponseBody$inboundSchema;
  /** @deprecated use `PostPaymentLinksResponseBody$outboundSchema` instead. */
  export const outboundSchema = PostPaymentLinksResponseBody$outboundSchema;
  /** @deprecated use `PostPaymentLinksResponseBody$Outbound` instead. */
  export type Outbound = PostPaymentLinksResponseBody$Outbound;
}

export function postPaymentLinksResponseBodyToJSON(
  postPaymentLinksResponseBody: PostPaymentLinksResponseBody,
): string {
  return JSON.stringify(
    PostPaymentLinksResponseBody$outboundSchema.parse(
      postPaymentLinksResponseBody,
    ),
  );
}

export function postPaymentLinksResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostPaymentLinksResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostPaymentLinksResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostPaymentLinksResponseBody' from JSON`,
  );
}
