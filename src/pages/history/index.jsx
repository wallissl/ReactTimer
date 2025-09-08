import { ptBR } from 'date-fns/locale';
import { Status } from '../../components/status';
import { useCycle } from '../../contexts/cycle';
import './history.css';
import { formatDistanceToNow } from 'date-fns';


export function HistoryPage() {
    const { cycles } = useCycle();

    return (

        <div className="container--history"> 
           
            <h1> Meu histórico </h1>
            <table>
                <thead>
                    <tr>
                        <th> Tarefa </th>
                        <th> Duração </th>
                        <th> Início </th>
                        <th> Status </th>
                    </tr>
                 </thead>
                 <tbody>

                    {
                        cycles.map((cycle) => ( 
                            <tr key={cycle.id}>
                                <td>{cycle.task}</td>
                                <td>{`${cycle.minutesAmount} minutos`}</td>
                                <td>
                                    {formatDistanceToNow(new Date(cycle.startDate),{
                                        addSuffix: true,
                                        locale: ptBR
                                    })}
                                </td>
                                <td>
                                    {
                                        cycle.finishedDate && (
                                            <Status> Concluído </Status>
                                        )
                                    }

                                    {
                                        cycle.interruptedDate && (
                                            <Status variant='pink'> Interrompido </Status>
                                        )
                                    }

                                    {
                                        !cycle.finishedDate && !cycle.interruptedDate && (
                                            <Status variant='orange'> Em andamento </Status>
                                        )
                                    }

                                </td> 

                            </tr>
                        ))                        
                    }

                 </tbody>
            </table>

        </div>
        
    );
}