import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { TerminalCheckout, terminalCheckoutSchema } from './terminalCheckout';

export interface CreateTerminalCheckoutResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  checkout?: TerminalCheckout;
}

export const createTerminalCheckoutResponseSchema: Schema<CreateTerminalCheckoutResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    checkout: ['checkout', optional(lazy(() => terminalCheckoutSchema))],
  }
);