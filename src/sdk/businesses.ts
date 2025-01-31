/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { businessesCreate } from "../funcs/businessesCreate.js";
import { businessesList } from "../funcs/businessesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Businesses extends ClientSDK {
  /**
   * List of all businesses
   *
   * @remarks
   * List of all businesses
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<operations.ResponseBody>> {
    return unwrapAsync(businessesList(
      this,
      options,
    ));
  }

  /**
   * Create a business
   *
   * @remarks
   * Create a business
   */
  async create(
    request: operations.PostBusinessesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostBusinessesResponseBody> {
    return unwrapAsync(businessesCreate(
      this,
      request,
      options,
    ));
  }
}
