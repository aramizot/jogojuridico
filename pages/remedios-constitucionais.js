import {useState} from 'react';
import Button from '../components/Button';


export default function Home(){
    return (
        <div>
            <h1>Oi mundo!</h1>
            <Button />
            <div><Contador /></div>
            <a href="./remedios-constitucionais">Remédios Constitucionais</a>
        </div>
    )
}

function Contador(){
    const [contador, setContador] = useState(1);

    function addValor(){
        setContador( contador + 1)
        console.log("apertou");
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={addValor}>Add</button>
        </div>
    )
}