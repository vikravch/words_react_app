import React, {useEffect, useRef, useState} from 'react';
import {someAsyncFunc} from "../../../someScript";
import {useCurrentWeather} from "../../../general/hooks/useCurrentWeather";
import {useLocalStorage} from "../../../general/hooks/useLocalStorage";

let k= 1;

function TestPage(props) {

    const [isActive, setIsActive] = useState(1);
    const isRefActive = useRef(1);
    const [array, setArray] = useState([1,2,3,4,5]);
    console.log('Before use effect');

    useCurrentWeather('Haifa', (data)=>{
        console.log(data)
    });

    const [trafficLights, setTrafficLights] = useState('green');

    useEffect(() => {
        if(trafficLights === 'green'){
            console.log('GO!!!');
        } else if(trafficLights === 'yellow'){
            console.log('Stopping...');
        } else if(trafficLights === 'red'){
            console.log('STOP!');
        } else {
            console.log('Starting...');
        }
    }, [trafficLights]);

    return (
        <div>
            <h2>Is active: {isActive.toString()}</h2>
            <h2>Is active ref: {isRefActive.current.toString()}</h2>
            <h2>Array: {array.toString()}</h2>
            <button onClick={() => {
                //isActive++;
                setIsActive(isActive+1);
                array.splice(2,1, 12);
            }}>Toggle
            </button>
            <button onClick={() => {
                isRefActive.current = isRefActive.current+1;
                k++;
                console.log('Toggle Ref clicked',isRefActive);
                console.log('k - ',k);
            }}>Toggle Ref
            </button>

            <button onClick={()=>{
                setTrafficLights('red');
            }}>Red</button>
            <button onClick={()=>{
                if (trafficLights==='red') {
                    setTrafficLights('yellow-red');
                } else {
                    setTrafficLights('yellow');
                }
            }}>Yellow</button>
            <button onClick={()=>{
                setTrafficLights('green');
            }}>Green</button>
        </div>
    );
}

export default TestPage;