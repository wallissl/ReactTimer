import PropTypes from 'prop-types';
import { differenceInSeconds, interval } from 'date-fns';

import { useState, useEffect } from 'react';
import './timer.css';

export function Timer({ activeCycle}) {

    // activeCycle é um objeto que contém informações sobre o ciclo ativo, como a tarefa e a duração

        const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle) {
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
        }
    
        return 0;
    })

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    // Separando de dados e formatados

    const minutesAmount = Math.floor(currentSeconds / 60); // Calcula os minutos restantes
    const secondsAmount = currentSeconds % 60; // Calcula os segundos restantes

    const minutes = String(minutesAmount).padStart(2, '0'); // Formata os minutos para ter 2 dígitos
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
        // WEB API - SET INTERVAL
        
        let intervalId;
        if (activeCycle) {
            intervalId = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate));

                if(secondsDifference >= totalSeconds) {
                    setAmountSecondsPassed(totalSeconds);
                    clearInterval(intervalId); // Limpa o intervalo quando o ciclo termina
                } else {
                    setAmountSecondsPassed(secondsDifference);
                }
            }, 1000); // Atualiza a cada segundo
        }
        return () => {
            clearInterval(intervalId);
        }
    }, [activeCycle, totalSeconds])
        

    return (

        <div className='container--timer'>
            {/* Minutos */}
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
             {/* Separador */}
            <div className='separador--timer'>:</div>
             {/* Segundos */}
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </div>
    )
}

Timer.PropTypes = {
    activeCycle: PropTypes.object,
}