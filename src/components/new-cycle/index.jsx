import { useFormContext } from 'react-hook-form'
import './new-cycle.css'

export function NewCycle() {
    const { register, formState } = useFormContext();


    return (
        <div className='container--new-cycle'>
        
            <label htmlFor="task">Vou trabalhar em:</label>

            <div className='container--input-form'>

                <input type="text" id="task" placeholder='Criar timer' {...register('task',
                    { 
                        required: {
                            value: true,
                            message: 'Este campo é obrigatório',
                        },
                        minLength: {
                            value: 3,
                            message: 'Inseir no minimo 3 caracteres',
                        }
                    }
                    
                    )}
                />
                {formState.errors.task && (
                    <p className='text-error'>
                        {formState.errors.task.message}
                    </p>
                )}
                
           
            </div>

            <label htmlFor="minutesAmount">durante</label>
            <input type="number" id="minutesAmount" {...register('minutesAmount', { valueAsNumber: true })}/>

            <span>minutos.</span>
            
        
        </div>
    )
}