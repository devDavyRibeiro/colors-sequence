import type { IMemorySequence } from "../interfaces/sequece-memory-interface"
import type { Sequence } from "./sequence-model"
import type { SequenceResponse } from "./sequence-response"

export class SequenceMemory implements IMemorySequence{
    sequences: Sequence[] = []
    response: SequenceResponse

    constructor(response:SequenceResponse){
        this.response = response
    }

}