let weather = document.getElementById('weather');



function getData() {
    console.log('started getData');

    let url = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=592665fcc8b320e82ec94fb91ed88c8c';
    let str = '';

    // fetch api function

    fetch(url).then((response)=>{
        console.log('Inside first then running in background');
        return response.json();
    }).then((data)=>{
        console.log('Inside second then running in beckground');
        console.log(data);
      
        
           
        let weatherData = `<div class="card-header">
            Weather
          </div>
          <div class="card-body">
            <h5 class="card-title">${data['weather']}</h5>
            <p class="card-text">${data['description']}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-footer text-muted">
            2 days ago
          </div>
        </div>
            `;
           
       

        content.innerHTML = weatherData;
    })

   
}

getData();