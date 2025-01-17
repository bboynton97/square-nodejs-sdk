import { boolean, object, optional, Schema, string } from '../schema';

export interface PaymentOptions {
  /**
   * Indicates whether the `Payment` objects created from this `TerminalCheckout` are automatically
   * `COMPLETED` or left in an `APPROVED` state for later modification.
   */
  autocomplete?: boolean;
  /**
   * The duration of time after the payment's creation when Square automatically cancels the
   * payment. This automatic cancellation applies only to payments that do not reach a terminal state
   * (COMPLETED, CANCELED, or FAILED) before the `delay_duration` time period.
   * This parameter should be specified as a time duration, in RFC 3339 format, with a minimum value
   * of 1 minute.
   * Note: This feature is only supported for card payments. This parameter can only be set for a delayed
   * capture payment (`autocomplete=false`).
   * Default:
   * - Card-present payments: "PT36H" (36 hours) from the creation time.
   * - Card-not-present payments: "P7D" (7 days) from the creation time.
   */
  delayDuration?: string;
  /**
   * If set to `true` and charging a Square Gift Card, a payment might be returned with
   * `amount_money` equal to less than what was requested. For example, a request for $20 when charging
   * a Square Gift Card with a balance of $5 results in an APPROVED payment of $5. You might choose
   * to prompt the buyer for an additional payment to cover the remainder or cancel the Gift Card
   * payment. This field cannot be `true` when `autocomplete = true`.
   * For more information, see
   * [Partial amount with Square Gift Cards](https://developer.squareup.com/docs/payments-api/take-payments#partial-payment-gift-card).
   * Default: false
   */
  acceptPartialAuthorization?: boolean;
}

export const paymentOptionsSchema: Schema<PaymentOptions> = object({
  autocomplete: ['autocomplete', optional(boolean())],
  delayDuration: ['delay_duration', optional(string())],
  acceptPartialAuthorization: [
    'accept_partial_authorization',
    optional(boolean()),
  ],
});
