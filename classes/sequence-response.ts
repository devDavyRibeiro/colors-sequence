import { Sequence } from "./sequence-model";

export class SequenceResponse extends Sequence{
private numColor:number = 0;
private numPosition:number = 0;
constructor(sequence:string[]){
    super(sequence)
}

getNumColor():number{
    return this.numColor
}
getNumPosition():number{
    return this.numPosition
}

setNumColor(numColor:number){
    this.numColor = numColor
}
setNumPosition(numPosition:number){
    this.numPosition = numPosition
}

verificationSequence(sequenceTest: string[]) {
    let numPosition: number = 0;
    let numColor: number = 0;
    for (let i = 0; i < sequenceTest.length; i++) {
        const positionTintaSequence = this.getSequence().indexOf(sequenceTest[i]);
        if (positionTintaSequence < 0) {
            continue
        }

        numColor++;

        if (positionTintaSequence === i){
            numPosition++
        } 

    }
    this.setNumColor(numColor)
    this.setNumPosition(numPosition)
}
}