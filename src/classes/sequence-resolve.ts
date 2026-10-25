import type { IMemorySequence } from "../interfaces/sequece-memory-interface";
import { Sequence } from "./sequence-model";
import { SequenceResponse } from "./sequence-response";

export class SequenceResolve extends Sequence{
private memory:IMemorySequence
constructor(sequence:string[]){
    super(sequence)
    this.memory = {
        sequences : [new Sequence([])],
        response: new SequenceResponse([])
    }
}


}