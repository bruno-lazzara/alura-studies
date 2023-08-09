import React from "react";
import style from './Botao.module.scss';

// Class components estão se tornando deprecated,
// e usa-se function components no seu lugar (ver component Lista)
class Botao extends React.Component<any, {
    type: "button" | "submit" | "reset" | undefined
}> {
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button type={type} className={style.botao} onClick={onClick}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;