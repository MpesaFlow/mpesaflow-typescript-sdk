/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type Path = string | number;

export type Issues = {
  code: string;
  path: Array<string | number>;
  message?: string | undefined;
};

export type ErrorT = {
  issues: Array<Issues>;
  name: string;
};

/**
 * The validation error(s)
 */
export type PostBusinessesResponseBodyData = {
  success: boolean;
  error: ErrorT;
};

/**
 * The validation error(s)
 */
export class PostBusinessesResponseBody extends Error {
  success: boolean;
  error: ErrorT;

  /** The original data that was passed to this error instance. */
  data$: PostBusinessesResponseBodyData;

  constructor(err: PostBusinessesResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.success = err.success;
    this.error = err.error;

    this.name = "PostBusinessesResponseBody";
  }
}

/** @internal */
export const Path$inboundSchema: z.ZodType<Path, z.ZodTypeDef, unknown> = z
  .union([z.string(), z.number()]);

/** @internal */
export type Path$Outbound = string | number;

/** @internal */
export const Path$outboundSchema: z.ZodType<Path$Outbound, z.ZodTypeDef, Path> =
  z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Path$ {
  /** @deprecated use `Path$inboundSchema` instead. */
  export const inboundSchema = Path$inboundSchema;
  /** @deprecated use `Path$outboundSchema` instead. */
  export const outboundSchema = Path$outboundSchema;
  /** @deprecated use `Path$Outbound` instead. */
  export type Outbound = Path$Outbound;
}

export function pathToJSON(path: Path): string {
  return JSON.stringify(Path$outboundSchema.parse(path));
}

export function pathFromJSON(
  jsonString: string,
): SafeParseResult<Path, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Path$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Path' from JSON`,
  );
}

/** @internal */
export const Issues$inboundSchema: z.ZodType<Issues, z.ZodTypeDef, unknown> = z
  .object({
    code: z.string(),
    path: z.array(z.union([z.string(), z.number()])),
    message: z.string().optional(),
  });

/** @internal */
export type Issues$Outbound = {
  code: string;
  path: Array<string | number>;
  message?: string | undefined;
};

/** @internal */
export const Issues$outboundSchema: z.ZodType<
  Issues$Outbound,
  z.ZodTypeDef,
  Issues
> = z.object({
  code: z.string(),
  path: z.array(z.union([z.string(), z.number()])),
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Issues$ {
  /** @deprecated use `Issues$inboundSchema` instead. */
  export const inboundSchema = Issues$inboundSchema;
  /** @deprecated use `Issues$outboundSchema` instead. */
  export const outboundSchema = Issues$outboundSchema;
  /** @deprecated use `Issues$Outbound` instead. */
  export type Outbound = Issues$Outbound;
}

export function issuesToJSON(issues: Issues): string {
  return JSON.stringify(Issues$outboundSchema.parse(issues));
}

export function issuesFromJSON(
  jsonString: string,
): SafeParseResult<Issues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Issues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Issues' from JSON`,
  );
}

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
  .object({
    issues: z.array(z.lazy(() => Issues$inboundSchema)),
    name: z.string(),
  });

/** @internal */
export type ErrorT$Outbound = {
  issues: Array<Issues$Outbound>;
  name: string;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<
  ErrorT$Outbound,
  z.ZodTypeDef,
  ErrorT
> = z.object({
  issues: z.array(z.lazy(() => Issues$outboundSchema)),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
  /** @deprecated use `ErrorT$inboundSchema` instead. */
  export const inboundSchema = ErrorT$inboundSchema;
  /** @deprecated use `ErrorT$outboundSchema` instead. */
  export const outboundSchema = ErrorT$outboundSchema;
  /** @deprecated use `ErrorT$Outbound` instead. */
  export type Outbound = ErrorT$Outbound;
}

export function errorToJSON(errorT: ErrorT): string {
  return JSON.stringify(ErrorT$outboundSchema.parse(errorT));
}

export function errorFromJSON(
  jsonString: string,
): SafeParseResult<ErrorT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorT' from JSON`,
  );
}

/** @internal */
export const PostBusinessesResponseBody$inboundSchema: z.ZodType<
  PostBusinessesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean(),
  error: z.lazy(() => ErrorT$inboundSchema),
})
  .transform((v) => {
    return new PostBusinessesResponseBody(v);
  });

/** @internal */
export type PostBusinessesResponseBody$Outbound = {
  success: boolean;
  error: ErrorT$Outbound;
};

/** @internal */
export const PostBusinessesResponseBody$outboundSchema: z.ZodType<
  PostBusinessesResponseBody$Outbound,
  z.ZodTypeDef,
  PostBusinessesResponseBody
> = z.instanceof(PostBusinessesResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean(),
    error: z.lazy(() => ErrorT$outboundSchema),
  }));

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
