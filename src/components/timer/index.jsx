import PropTypes from 'prop-types';
import { differenceInSeconds } from 'date-fns';

import { useState } from 'react';
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

    return (

        

        <div className='container--timer'>
            {/* Minutos */}
            <span>0</span>
            <span>0</span>
             {/* Separador */}
            <div className='separador--timer'>:</div>
             {/* Segundos */}
            <span>0</span>
            <span>0</span>
        </div>
    )
}

Timer.PropTypes = {
    activeCycle: PropTypes.object,
}