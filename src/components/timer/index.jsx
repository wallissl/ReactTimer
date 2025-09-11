import PropTypes from 'prop-types';
import { differenceInSeconds } from 'date-fns';
import { useState, useEffect, useRef } from 'react';
import './timer.css';
import { useCycle } from '../../contexts/cycle';

export function Timer() {

    const { activeCycle, markCurrentCycleAsFinished} = useCycle()

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

    // áudio

   const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/audios/countdown.mp3');
    }
  }, []);

  function playAudio() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // reinicia o áudio sempre do começo
      audioRef.current.play().catch((err) => {
        console.warn("Reprodução bloqueada:", err);
      });
    }
  }
    // Finalizar o áudio

    useEffect(() => {
        // WEB API - SET INTERVAL
        
        let intervalId;
        if (activeCycle) {
            intervalId = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate));

                if(secondsDifference >= totalSeconds) {
                    markCurrentCycleAsFinished();
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
    }, [activeCycle, totalSeconds, markCurrentCycleAsFinished])
        
    // Use Effect para chamar o áudio
    useEffect(() => {
        console.log(minutesAmount, secondsAmount)
        if(minutesAmount === 0 && secondsAmount === 3) {
            console.log('chamar audio')
            playAudio();
        }

    }, [minutesAmount, secondsAmount]);

    // Atualização do título da página
    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}:${seconds} - ${activeCycle.task}`;
        }
    }, [activeCycle, minutes, seconds]);

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

Timer.propTypes = {
    activeCycle: PropTypes.object,
}