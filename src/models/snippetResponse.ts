import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Snippet, snippetSchema } from './snippet';

export interface SnippetResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages. */
  snippet?: Snippet;
}

export const snippetResponseSchema: Schema<SnippetResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  snippet: ['snippet', optional(lazy(() => snippetSchema))],
});
