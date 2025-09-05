
import { Status } from '../../components/status';
import { useCycle } from '../../contexts/cycle';
import './history.css';


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
                                <td>Há cerca de 2 meses</td>
                                <td><Status> Concluído </Status></td> 
                            </tr>
                        ))                        
                    }

                 </tbody>
            </table>

        </div>
        
    );
}