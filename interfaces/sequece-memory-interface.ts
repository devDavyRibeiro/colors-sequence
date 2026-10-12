import type { Sequence } from "../classes/sequence-model";
import type { SequenceResponse } from "../classes/sequence-response";

export interface IMemorySequence{
  sequences:Sequence[],
  response:SequenceResponse
}