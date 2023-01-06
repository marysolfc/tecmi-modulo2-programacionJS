const d = document;
export default function countDown(id,limitDate,finalMessage){
    let $countDown = d.getElementById(id);
    let $countDownDate = new Date(limitDate).getTime();
    let countDownTempo = setInterval(()=>{
        let now = new Date().getTime();
        let limitTime = $countDownDate - now;
        let days = Math.floor(limitTime/(1000*60*60*24));
        let hours = Math.floor(limitTime/(1000*60*60));
        let minutes = Math.floor(limitTime/(1000*60)%60);
        let seconds = Math.floor(limitTime/1000%60);
        $countDown.innerHTML = `<h3>Faltan ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos </h3>`;
        if(limitTime < 0){
            clearInterval(countDownTempo);
            $countDown.innerHTML = `<h3>${finalMessage}</h3>`;
        }
    },1000);
}