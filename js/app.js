

var button = document.getElementById("click");
var result = document.getElementById("result");
var output = document.getElementById("output");

button.addEventListener('click', () => {
    var rs = result.value;

    switch(true){
        case rs >= 80 && rs <= 100:
            output.innerHTML = "A+";
            output.style.color = "white";
            break;
        case rs >= 70 && rs <= 80:
            output.innerHTML = "A";
            output.style.color = "white";
            break;
        case rs >= 60 && rs <= 70:
            output.innerHTML = "A-";
            output.style.color = "white";
            break;
        case rs >= 50 && rs <= 60:
            output.innerHTML = "B";
            output.style.color = "white";
            break;
        case rs >= 40 && rs <= 50:
            output.innerHTML = "C";
            output.style.color = "white";
            break;
        case rs >= 33 && rs <= 40:
            output.innerHTML = "D";
            output.style.color = "white";
            break;
        case rs >= 0 && rs <= 32:
            output.innerHTML = "Fail";
            output.style.color = "red";
            break;
        default:
            output.innerHTML ="Invalid Result....";
            output.style.color = "red";
            break;

    }
})


// button.addEventListener('click', () => {
//     let rs = result.value;

//     if(rs >= 80 && rs < 100){
//         output.innerHTML = "A+";
//     }else if(rs >= 70 && rs < 80){
//         output.innerHTML = "A";
//     }else if( rs >= 60 && rs < 70){
//         output.innerHTML = "A-";
//     }else if( rs >= 50 && rs < 60){
//         output.innerHTML = "B";
//     }else if( rs >= 40 && rs < 50){
//         output.innerHTML = "C";
//     }else if(rs >= 33 && rs < 40){
//         output.innerHTML = "D";
//     }else if(rs >=0 && rs < 32){
//         output.innerHTML = "Fail";
//         output.style.color = "red";
//     }
//     else{
//         output.innerHTML ="Invalid Result.";
//         output.style.color = "red";
//     }
// })

