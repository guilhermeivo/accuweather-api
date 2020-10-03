async function forecastJson() {
    let keyCity;
    let coords;
    
    if (navigator.geolocation) { 
        await navigator.geolocation.getCurrentPosition(async (position) => {        
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
    
            coords = `${lat.toString().replace(',', '.')},${lon.toString().replace(',', '.')}`;     

            await fetch(`/api/geoposition?q=${coords}&language=pt-br`, {'method': 'GET'})
                .then(response => response.json())
                .then(body => {
                    keyCity = body.Key;
                });

            await fetch(`/api/hourly-forecast?key=${keyCity}&language=pt-br`, {'method': 'GET'})
                .then(response => response.json())
                .then(body => {
                    designCardForecast(body);
                });
            });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }         
}

async function designCardForecast(body) {
    let boxForecast = document.querySelector('#boxForecast');

    for (let i = 0; i < await body.length; i++) {
        let cardForecast = document.createElement('div');
        cardForecast.classList.add('card');
        let temperature = Math.round(((body[i].Temperature.Value) - 32) * (5 / 9));
        let date = new Date(body[i].DateTime);

        cardForecast.innerHTML = `
            <p>
                ${((date.getHours() <= 9) ? ("0" + date.getHours()) : (date.getHours())) + ":00"}
            </p>
            <i class="icon-sunny"></i>
            <div>
                <p>${temperature}</p>
                <span>ºC</span>
            </div>
        `

        boxForecast.append(cardForecast);
    }
}

forecastJson();