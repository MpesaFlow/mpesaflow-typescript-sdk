/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type PostFilesPath = string | number;

export type PostFilesIssues = {
  code: string;
  path: Array<string | number>;
  message?: string | undefined;
};

export type PostFilesError = {
  issues: Array<PostFilesIssues>;
  name: string;
};

/**
 * The validation error(s)
 */
export type PostFilesResponseBodyData = {
  success: boolean;
  error: PostFilesError;
};

/**
 * The validation error(s)
 */
export class PostFilesResponseBody extends Error {
  success: boolean;
  error: PostFilesError;

  /** The original data that was passed to this error instance. */
  data$: PostFilesResponseBodyData;

  constructor(err: PostFilesResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.success = err.success;
    this.error = err.error;

    this.name = "PostFilesResponseBody";
  }
}

/** @internal */
export const PostFilesPath$inboundSchema: z.ZodType<
  PostFilesPath,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type PostFilesPath$Outbound = string | number;

/** @internal */
export const PostFilesPath$outboundSchema: z.ZodType<
  PostFilesPath$Outbound,
  z.ZodTypeDef,
  PostFilesPath
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostFilesPath$ {
  /** @deprecated use `PostFilesPath$inboundSchema` instead. */
  export const inboundSchema = PostFilesPath$inboundSchema;
  /** @deprecated use `PostFilesPath$outboundSchema` instead. */
  export const outboundSchema = PostFilesPath$outboundSchema;
  /** @deprecated use `PostFilesPath$Outbound` instead. */
  export type Outbound = PostFilesPath$Outbound;
}

export function postFilesPathToJSON(postFilesPath: PostFilesPath): string {
  return JSON.stringify(PostFilesPath$outboundSchema.parse(postFilesPath));
}

export function postFilesPathFromJSON(
  jsonString: string,
): SafeParseResult<PostFilesPath, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostFilesPath$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostFilesPath' from JSON`,
  );
}

/** @internal */
export const PostFilesIssues$inboundSchema: z.ZodType<
  PostFilesIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
  path: z.array(z.union([z.string(), z.number()])),
  message: z.string().optional(),
});

/** @internal */
export type PostFilesIssues$Outbound = {
  code: string;
  path: Array<string | number>;
  message?: string | undefined;
};

/** @internal */
export const PostFilesIssues$outboundSchema: z.ZodType<
  PostFilesIssues$Outbound,
  z.ZodTypeDef,
  PostFilesIssues
> = z.object({
  code: z.string(),
  path: z.array(z.union([z.string(), z.number()])),
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostFilesIssues$ {
  /** @deprecated use `PostFilesIssues$inboundSchema` instead. */
  export const inboundSchema = PostFilesIssues$inboundSchema;
  /** @deprecated use `PostFilesIssues$outboundSchema` instead. */
  export const outboundSchema = PostFilesIssues$outboundSchema;
  /** @deprecated use `PostFilesIssues$Outbound` instead. */
  export type Outbound = PostFilesIssues$Outbound;
}

export function postFilesIssuesToJSON(
  postFilesIssues: PostFilesIssues,
): string {
  return JSON.stringify(PostFilesIssues$outboundSchema.parse(postFilesIssues));
}

export function postFilesIssuesFromJSON(
  jsonString: string,
): SafeParseResult<PostFilesIssues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostFilesIssues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostFilesIssues' from JSON`,
  );
}

/** @internal */
export const PostFilesError$inboundSchema: z.ZodType<
  PostFilesError,
  z.ZodTypeDef,
  unknown
> = z.object({
  issues: z.array(z.lazy(() => PostFilesIssues$inboundSchema)),
  name: z.string(),
});

/** @internal */
export type PostFilesError$Outbound = {
  issues: Array<PostFilesIssues$Outbound>;
  name: string;
};

/** @internal */
export const PostFilesError$outboundSchema: z.ZodType<
  PostFilesError$Outbound,
  z.ZodTypeDef,
  PostFilesError
> = z.object({
  issues: z.array(z.lazy(() => PostFilesIssues$outboundSchema)),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostFilesError$ {
  /** @deprecated use `PostFilesError$inboundSchema` instead. */
  export const inboundSchema = PostFilesError$inboundSchema;
  /** @deprecated use `PostFilesError$outboundSchema` instead. */
  export const outboundSchema = PostFilesError$outboundSchema;
  /** @deprecated use `PostFilesError$Outbound` instead. */
  export type Outbound = PostFilesError$Outbound;
}

export function postFilesErrorToJSON(postFilesError: PostFilesError): string {
  return JSON.stringify(PostFilesError$outboundSchema.parse(postFilesError));
}

export function postFilesErrorFromJSON(
  jsonString: string,
): SafeParseResult<PostFilesError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostFilesError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostFilesError' from JSON`,
  );
}

/** @internal */
export const PostFilesResponseBody$inboundSchema: z.ZodType<
  PostFilesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean(),
  error: z.lazy(() => PostFilesError$inboundSchema),
})
  .transform((v) => {
    return new PostFilesResponseBody(v);
  });

/** @internal */
export type PostFilesResponseBody$Outbound = {
  success: boolean;
  error: PostFilesError$Outbound;
};

/** @internal */
export const PostFilesResponseBody$outboundSchema: z.ZodType<
  PostFilesResponseBody$Outbound,
  z.ZodTypeDef,
  PostFilesResponseBody
> = z.instanceof(PostFilesResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean(),
    error: z.lazy(() => PostFilesError$outboundSchema),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostFilesResponseBody$ {
  /** @deprecated use `PostFilesResponseBody$inboundSchema` instead. */
  export const inboundSchema = PostFilesResponseBody$inboundSchema;
  /** @deprecated use `PostFilesResponseBody$outboundSchema` instead. */
  export const outboundSchema = PostFilesResponseBody$outboundSchema;
  /** @deprecated use `PostFilesResponseBody$Outbound` instead. */
  export type Outbound = PostFilesResponseBody$Outbound;
}
