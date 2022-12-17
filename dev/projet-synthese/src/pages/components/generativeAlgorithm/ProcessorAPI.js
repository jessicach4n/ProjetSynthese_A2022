import * as myConstants from '../../constants'
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

    static async animationAPICall(laitutde, longitude, nbOfDatasets=9){
        let response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+laitutde+'&lon='+longitude+'&units=metric&cnt='+nbOfDatasets+'&mode=JSON&appid='+myConstants.API_KEY+'');
        let data = await response.json();
        let usefullData = [data.list[0],data.list[4],data.list[8]]
        return usefullData;
    }
    
    static stringCallAPI(laitutde, longitude, nbOfDatasets=9){
        return 'https://api.openweathermap.org/data/2.5/forecast?lat='+laitutde+'&lon='+longitude+'&units=metric&cnt='+nbOfDatasets+'&mode=JSON&appid='+myConstants.API_KEY;
    }

    static extractCity(data){
        return data.city.name
    }

    static extractCountry(data){
        return data.city.country
    }

    static organiseData(data){
        let usefullData = [data.list[0],data.list[4],data.list[8]]
        return usefullData;
    }


}