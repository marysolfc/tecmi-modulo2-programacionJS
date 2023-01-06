const d = document;
var x = 0;
var y = 0;

export function shortcuts(e){
    console.log(e.type);
    console.log(e);
    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }
    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado");
    }
    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado");
    }
}

export function moveBall(e,ball,stage){
    let $ball = d.querySelector(ball);
    let $stage = d.querySelector(stage);
    let limitsBall = $ball.getBoundingClientRect();
    let limitsStage = $stage.getBoundingClientRect();

    switch(e.keyCode){
        case 37: //flecha izquierda
        if(limitsBall.left > limitsStage.left){
            e.preventDefault();
            x--;
        }
        
        break;
        case 38: //flecha arriba
        if(limitsBall.top > limitsStage.top){
            e.preventDefault();
            y--;
        }

        break;
        case 39: //derecha
        if(limitsBall.right < limitsStage.right){
            e.preventDefault();
            x++;
        }
            break;
            case 40: //abajo
            if(limitsBall.bottom < limitsStage.bottom){
                e.preventDefault();
                y++;
            }
                break;


    }

    console.log(limitsBall,limitsStage);
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`;
}