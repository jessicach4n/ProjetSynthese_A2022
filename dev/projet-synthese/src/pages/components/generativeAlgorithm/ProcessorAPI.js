export class ProcessorAPI{
    static normalize(valueToNormalize, min, max ){
        //? REF: https://www.statology.org/normalize-data-between-0-and-1/
        return (valueToNormalize-min)/(max-min)
    }

    static normalizeAthmospericPressure(valueToNormalize){
        let min = 870 //*lowest athmospheric pressure on earth
        let max = 1085 //*highest athmospheric pressure on earth
        return this.normalize(valueToNormalize,min,max)
    }
}