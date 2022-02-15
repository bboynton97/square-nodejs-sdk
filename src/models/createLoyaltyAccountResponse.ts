import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { LoyaltyAccount, loyaltyAccountSchema } from './loyaltyAccount';

/** A response that includes loyalty account created. */
export interface CreateLoyaltyAccountResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Describes a loyalty account in a [loyalty program]($m/LoyaltyProgram). For more information, see
   * [Manage Loyalty Accounts Using the Loyalty API](https://developer.squareup.com/docs/loyalty-api/overview).
   */
  loyaltyAccount?: LoyaltyAccount;
}

export const createLoyaltyAccountResponseSchema: Schema<CreateLoyaltyAccountResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    loyaltyAccount: [
      'loyalty_account',
      optional(lazy(() => loyaltyAccountSchema)),
    ],
  }
);
