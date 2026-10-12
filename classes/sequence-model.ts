export class Sequence{
    private sequence: string[];
    private colors: string[] = ['red', 'green', 'blue', 'yellow', 'white', 'pink']
    constructor(sequence:string[]){
        this.sequence = sequence
    }
    setSequence (sequence:string[]):void{
        this.sequence = sequence
    }
    getSequence():string[]{
        return this.sequence
    }
    setColors (colors:string[]):void{
        this.colors = colors
    }
    getColors():string[]{
        return this.colors
    }
    replaceColorByColor(colorOld: string, colorNew: string): void {
        try {
            if (!this.sequence.includes(colorOld)) {
                throw new Error(`Não existe cor ${colorOld} nessa sequencia`)
            }
            const index = this.sequence.indexOf(colorOld)
            this.sequence.splice(index,1,colorNew)
        } catch (error) {
            console.error(error)
        }
    }
    replaceColorByIndex(indexColorOld:number,colorNew:string):void{
        try {
            if(this.sequence.length - 1 < indexColorOld){
                throw new Error(`Não existe indice ${indexColorOld} nessa sequencia`)   
            }
            this.sequence.splice(indexColorOld, 1, colorNew)
        } catch (error) {
            console.error(error)
        }
    }

    newRandowSequence(colorCount: number):Sequence{
        const sequence: string[] = []

        while (sequence.length !== colorCount) {
            const randomNumber = Math.floor(Math.random() * this.getColors().length)
            const tinta = this.getColors()[randomNumber]
            if (sequence.includes(tinta)){
                continue
            }
            sequence.push(tinta)
        }
        return new Sequence(sequence)
    }



}