const inp = document.getElementById("inp");
const button = document.querySelector("button");
const result = document.getElementById("res");
const body = document.querySelector("body");
const rescon = document.getElementById("res-container");

inp.addEventListener("click", () => {
    inp.style.backgroundColor = "#caf0f8";
    inp.style.color = "rgba(0, 0, 0, 0.6)";
});

function hasNumbers(t)
{
var regex = /\d/g;
return regex.test(t);
} 

function getData() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=a899d688945bcda47445a0308e532e68`).then(response => {
        console.log(response.data);
        while(result.firstChild) {
            result.removeChild(result.firstChild);
        }
         if(response.data) {
            switch(response.data.weather[0].main) {
                case 'Clear':
                    body.style.backgroundImage = "url('https://wallpaperaccess.com/full/175910.jpg')";
                    document.querySelector("h1").style.color = "rgb(240, 240, 240)";
                    break;
                case 'Thunderstorm':
                    body.style.backgroundImage = "url('https://i.pinimg.com/736x/7d/10/c6/7d10c6b3fe4c808563acf8079a5a3832.jpg')";
                    document.querySelector("h1").style.color = "rgb(240, 240, 240)";
                    break;
                case 'Drizzle':
                    body.style.backgroundImage = "url('https://896479.smushcdn.com/2111889/wp-content/uploads/2021/05/image-4.jpeg?size=1600x1066&lossy=1&strip=1&webp=1')";
                    document.querySelector("h1").style.color = "rgb(240, 240, 240)";
                    break;
                case 'Rain':
                    body.style.backgroundImage = "url('https://img.freepik.com/free-photo/rain-drop-falling-onto-blackboard-with-green-nature-background_34152-328.jpg?size=626&ext=jpg')";
                    document.querySelector("h1").style.color = "rgb(240, 240, 240)";
                    break;
                case 'Snow':
                    body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1556820.jpg')";
                    document.querySelector("h1").style.color = "#d62828";
                    break;
                case 'Haze':
                    body.style.backgroundImage = "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF6ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
                    document.querySelector("h1").style.color = "rgb(0, 0, 0)";
                    break;
                case 'Clouds':
                    body.style.backgroundImage = "url('https://i.vimeocdn.com/video/634837619-44798cffa69ae640772eaeeb0abe546c81a29ace5ba1342af39ec49d64479c49-d_640x320.jpg')";
                    document.querySelector("h1").style.color = "rgb(240, 240, 240)";
                    break;
            }
            const name = document.createTextNode(response.data.name);
            const br1 = document.createElement("br");
            const d = new Date();
            const date = document.createTextNode(d.toDateString());
            const br2 = document.createElement("br");
            const span = document.createElement('span');
            span.style.fontSize = '160%';
            span.style.color = "darkblue";
            span.innerText = response.data.weather[0].description;
            const br3 = document.createElement("br");
            const temp = document.createTextNode(`${Math.trunc(response.data.main.temp)}°C` );
            const br4 = document.createElement("br");
            const mintemp = document.createTextNode(`${Math.trunc(response.data.main.temp_min)}°C (min)`);
            const br5 = document.createElement("br");
            const maxtemp = document.createTextNode(`${Math.trunc(response.data.main.temp_max)}°C (max)`);
            result.append(name, br1, date, br2, span, br3, temp, br4, mintemp, br5, maxtemp);
            rescon.style.display = "block";
            
         }
         
    }).catch(err => {
        console.log(err, err.response);
        while(result.firstChild) {
        result.removeChild(result.firstChild);
        }
        var span = document.createElement('span');
        span.style.fontSize = '160%';
        span.style.color = "darkblue";
        span.innerText = err.response.data.message.toUpperCase();
        result.append(span);
        rescon.style.display = "block";
    });
}


button.addEventListener("click", (e) =>{
    e.preventDefault();
    if(hasNumbers(inp.value)) {
        while(result.firstChild) {
            result.removeChild(result.firstChild);
        }
        var span = document.createElement('span');
        span.style.fontSize = '160%';
        span.style.color = "darkblue";
        span.appendChild(document.createTextNode("Enter a valid city!!"));
        result.appendChild(span);
    } else {
    getData();
    }
}
);