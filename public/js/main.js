const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const city_name = document.getElementById('city_name');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    
    event.preventDefault();
   let cityVal = cityName.value;
   
     if(cityVal === ""){
    city_name.innerHTML = "Please write city name before searching";
    datahide.classList.add('data_hide');
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ff8dc6a92a51f1562ae2cf8beb58af7e`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerHTML = `${Math.round((arrData[0].main.temp - 273)*10)/10}`;
        console.log(arrData[0]);
        
        const tempMood = arrData[0].weather[0].main;
         if(tempMood == "Clear"){
          temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>"
        }
        else if(tempMood == "Clouds")
        {
          temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #009ad8'></i>"
        }
        else if(tempMood == "Rain")
        {
          temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>"
        }
        else if(tempMood == "Smoke"){
            temp_status.innerHTML  = "<i class='fas fa-smog' style='color: #009ad8'></i>"
        }
        else if(tempMood == "Fog"){
            temp_status.innerHTML  = "<i class='fas fa-smog' style='color: #009ad8'></i>"
        }
        else if(tempMood == "Haze"){
            temp_status.innerHTML  = "<i class='fas fa-smog' style='color:#009ad8'> </i>"
        }
        else
        {
          temp_status.innerHTML = "<i class='fas fa-sun' ></i>"
        }

        datahide.classList.remove('data_hide');
       }catch{
        city_name.innerText="Plz enter correct city name"
        datahide.classList.add('data_hide');
       }
    }
}
submitBtn.addEventListener('click',getInfo);