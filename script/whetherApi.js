export default class Api{
    constructor(city) {
        this.city = city
        this.key = '9e79c792dd104405a73123911230812'
        this.urlFin = 'http://api.weatherapi.com/v1/current.json?key=9e79c792dd104405a73123911230812&q=London'
        this.request = `http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${this.city}`
    

    }


    getApi(){
        console.log(this.city);
        return fetch(this.request)  
            .then(responce => responce.json()) 
            // .then(data => console.log(data)) 

    }

    }


    