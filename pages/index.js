import {useState} from 'react';
export default Home

function Home(){
    return (
        <div>
            <div>Oi mundo!</div>
            <div><Contador /></div>
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

