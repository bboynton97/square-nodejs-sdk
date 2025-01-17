import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { TerminalAction, terminalActionSchema } from './terminalAction';

export interface CancelTerminalActionResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  action?: TerminalAction;
}

export const cancelTerminalActionResponseSchema: Schema<CancelTerminalActionResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    action: ['action', optional(lazy(() => terminalActionSchema))],
  }
);
