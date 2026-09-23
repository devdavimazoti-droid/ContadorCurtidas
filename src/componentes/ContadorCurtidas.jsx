import { useEffect, useState } from "react";

function ContadorCurtidas(){
    const [contador, setContador] = useState(0)

    function incremento(){
        setContador(contador+1);
    }

    useEffect(() => {contador===5?alert("Curtidas em alta!"):null}, [contador])

    return(
        <div>
            <h2>Curtidas</h2>
            <br />
            <p>Número de curtidas: {contador}</p>
            <button onClick={incremento}>Curtir</button>
        </div>
    )
}

export default ContadorCurtidas;