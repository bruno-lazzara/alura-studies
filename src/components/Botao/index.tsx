import React from "react";
import style from './Botao.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Botao({ onClick, type, children }: Props) {
    return (
        <button type={type} className={style.botao} onClick={onClick}>
            {children}
        </button>
    )
}

// Class components estão se tornando deprecated,
// e usa-se function components no seu lugar (ver component Lista)

// class Botao1 extends React.Component<{
//     type?: "button" | "submit" | "reset" | undefined,
//     onClick?: () => void
// }> {
//     render() {
//         const { type = "button", onClick } = this.props;
//         return (
//             <button type={type} className={style.botao} onClick={onClick}>
//                 {this.props.children}
//             </button>
//         )
//     }
// }

export default Botao;