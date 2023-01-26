document.getElementById("btn-1").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "+"
})

document.getElementById("btn-2").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "-"
})

document.getElementById("btn-3").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "*"
})

document.getElementById("btn-4").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += ":"
})

document.getElementById("btn-5").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "1"
})

document.getElementById("btn-6").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "2"
})


document.getElementById("btn-7").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "3"
})

document.getElementById("btn-8").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "%"
})

document.getElementById("btn-9").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "4"
})

document.getElementById("btn-10").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "5"
})

document.getElementById("btn-11").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "6"
})

document.getElementById("btn-12").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += ","
})



document.getElementById("btn-13").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "7"
})

document.getElementById("btn-14").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "8"
})

document.getElementById("btn-15").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "9"
})

document.getElementById("btn-16").addEventListener("click", (e) => {
    console.log(e.target.innerText) 
    document.getElementById("btn").innerText = ""
})

document.getElementById("btn-17").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "0"
})
document.getElementById("btn-18").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "."
})

document.getElementById("btn-19").addEventListener("click", (e) => {
    console.log(e.target.innerText)
    document.getElementById("btn").innerText += "AC"
})

document.getElementById("btn-20").addEventListener("click", (e) => {
    let a = document.getElementById("btn").innerText
    first = parseInt(a[0]);
    second = parseInt(a[2])
    operator = a[1]
    if (operator == "+") {
        document.getElementById("btn").innerText = first+second
    }
    else if(operator == "-"){
        document.getElementById("btn").innerText =first-second

    }
    else if(operator == "*"){
        document.getElementById("btn").innerText =first*second

    }
    else if(operator == ":"){
        document.getElementById("btn").innerText =first /second

    } 

})



    
    
    // let a = document.getElementById("btn").innerText
    // let displayValue = 0;
    // let firstValue = null;
    // let operator = null;
    // let waitingForSecondValue = false;
    // function handleOprataor(operator){
    //     const value = parseFloat(displayValue);
    //     if(operator && waitingForSecondValue){
    //         operator = nextOperator;
    //         return;
    //     }

    //     if( firstValue === null){
    //         firstValue = value;
    //     }else if(operator){
    //         const result = calculate(firstValue, value, operator)
    //         displayValue = String(result);
    //         firstValue =  result;
    //     }
    // }
    // function sp(first , second, operator){
    //     if(operator ==='+'){
    //         return first + second;
    //     }else if (operator ==='-'){
    //         return first - second;
    //     }else if (operator === '*'){
    //         return first * second;
    //     }else if (operator === '/'){
    //         return first / second;
    //     }
    //     return second;

    // }
                
    
