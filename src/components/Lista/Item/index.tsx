import { ITarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss';

export default function Item(/* props */{ tarefa, tempo, selecionado, completado, id }: ITarefa) {
    //const { tarefa, tempo } = props;

    return (
        <li className={style.item}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    )
}