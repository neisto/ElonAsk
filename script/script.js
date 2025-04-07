import Api from "../script/whetherApi.js"
import icons from "./icons.js"

window.addEventListener('DOMContentLoaded', () => new WheatherCard())

class WheatherCard {
    rocket = document.querySelector('.rocket-btn')
    inputWindow = document.querySelector('.inp')
    form = document.querySelector('.search-form')
    widget = document.querySelector('.widget-window')
    displayTemp = document.querySelector('.temp')
    displayCity = document.querySelector('.location')
    earth = document.querySelector('.content')
    nav = document.querySelector('.search-form')
    formCont = document.querySelector('.inp-container')
    status = document.querySelector('.status')
    elon = document.querySelector('.elon-cont')
    loadWindow = document.querySelector('.bg-loading')
    backButton = document.querySelector('.back-btn')
    spaceLoading = document.querySelector('.space-loading')

    constructor() {
        this.element = this.inputWindow.value
        this.addListeners()
        this.icons = icons
        this.object = {
        }
    }

    loading() {
        this.spaceLoading.classList.remove('none')
        this.loadWindow.classList.remove('none')
        setTimeout(() => {
            this.loadWindow.classList.add('none')
            this.spaceLoading.classList.add('none')
            this.backButton.classList.remove('none')
        }, 1500);
    }

    addListeners() {
        if (this.inputWindow.value =='') { 
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.loading()
                new Api(this.inputWindow.value).getApi() 
                .then(data => {
                    console.log(data)
                    this.object.temp = data.current.temp_c
                    this.object.name = data.location.name
                    this.status.code = data.current.condition.code
                    this.earth.classList.add('none')
                    this.widget.classList.remove('none')
                    this.form.classList.add('.none')
                    this.nav.classList.add('.none')
                    this.rocket.classList.add('.none')
                    this.formCont.classList.add('.none')
                    this.inputWindow.classList.add('.none')
                    this.object.temp > 0 ? this.displayTemp.innerText = `+${Math.round(this.object.temp)} °` : this.displayTemp.innerText = `${Math.round(this.object.temp)} °`
                    this.displayCity.innerText = this.object.name
                    this.icons.forEach(item => {
                        item.code == this.status.code ?   this.status.innerHTML = `<img class="icons" src="./img/icons/${item.icon}.png" alt="">` : false

                    })
                    this.object.temp > 15 && this.object.temp < 25 ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/2.png" alt="">`  : false
                    this.object.temp > 5 && this.object.temp < 15 ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/7.png" alt="">` : false
                    this.object.temp > -10 && this.object.temp < 5 ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/5.png" alt="">` : false
                    this.object.temp > -20 && this.object.temp < -9 ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/6.png" alt="">` : false
                    this.object.temp > -30 && this.object.temp < -19 ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/8.png" alt="">` : false
                    this.object.temp > 25 ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/1.png" alt="">` : false
                    data.current.condition.text.includes('rain') ||  data.current.condition.text.includes('thunder') ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/3.png" alt="">` : false

                    

                }
                    )
        
                this.inputWindow.value = ''
                console.log(this.object);

            })  
            this.rocket.addEventListener('click',  (e) => {
                e.preventDefault();
                this.loading()
                new Api(this.inputWindow.value).getApi() 
                .then(data => {
                    console.log(data)
                    this.object.temp = data.current.temp_c
                    this.object.name = data.location.name
                    this.status.code = data.current.condition.code
                    this.earth.classList.add('none')
                    this.widget.classList.remove('none')
                    this.form.classList.add('.none')
                    this.nav.classList.add('.none')
                    this.rocket.classList.add('.none')
                    this.formCont.classList.add('.none')
                    this.inputWindow.classList.add('.none')
                    this.object.temp > 0 ? this.displayTemp.innerText = `+${Math.round(this.object.temp)} °` : this.displayTemp.innerText = `${Math.round(this.object.temp)} °`
                    this.displayCity.innerText = this.object.name
                    this.icons.forEach(item => {
                        item.code == this.status.code ?   this.status.innerHTML = `<img class="icons" src="./img/icons/${item.icon}.png" alt="">` : false

                    })
                    this.object.temp > 15 && this.object.temp < 25 ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/2.png" alt="">`  : false
                    this.object.temp > 5 && this.object.temp < 15 ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/7.png" alt="">` : false
                    this.object.temp > -10 && this.object.temp < 5 ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/5.png" alt="">` : false
                    this.object.temp > -20 && this.object.temp < -9 ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/6.png" alt="">` : false
                    this.object.temp > -30 && this.object.temp < -19 ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/8.png" alt="">` : false
                    this.object.temp > 25 ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/1.png" alt="">` : false
                    data.current.condition.text.includes('rain') ||  data.current.condition.text.includes('thunder') ? this.elon.innerHTML = `<img class="elon" src=".//img/ElonImg/3.png" alt="">` : false

                    

                }
                    )
        
                this.inputWindow.value = ''

            })  
        }   
        this.backButton.addEventListener('click', ()=> {location.reload()
        })
        }
}