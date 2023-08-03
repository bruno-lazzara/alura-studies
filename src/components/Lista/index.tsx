import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss';

// Function components é a forma usada atualmente. Os class components estão se tornando deprecated
function Lista({ tarefas }: { tarefas: ITarefa[] }) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;