/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentLinksCreate } from "../funcs/paymentLinksCreate.js";
import { paymentLinksList } from "../funcs/paymentLinksList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class PaymentLinks extends ClientSDK {
  /**
   * List of all payment links
   *
   * @remarks
   * List of all payment links
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<operations.GetPaymentLinksResponseBody>> {
    return unwrapAsync(paymentLinksList(
      this,
      options,
    ));
  }

  /**
   * Create a payment link
   *
   * @remarks
   * Create a payment link
   */
  async create(
    request: operations.PostPaymentLinksRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostPaymentLinksResponseBody> {
    return unwrapAsync(paymentLinksCreate(
      this,
      request,
      options,
    ));
  }
}
