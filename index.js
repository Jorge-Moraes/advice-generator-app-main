
const adviceId = document.querySelector(".advice-id")
const advice = document.querySelector(".advice")

async function getRandomAdvice (){
    /* const url  = "https://api.adviceslip.com/advice" */
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    const slip = data.slip
    return slip
}

async function setAdvice(){
    const slip = await getRandomAdvice()
    adviceId.innerHTML = `ADVICE #${slip.id}`
    advice.innerHTML = slip.advice
}
setAdvice()