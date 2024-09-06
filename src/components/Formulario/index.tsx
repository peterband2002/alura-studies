import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss'

class Formulario extends React.Component {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(event: React.FormEvent<HTMLFormElement>) { // O tipo para eventos no React é React.FormEvent
        event.preventDefault()
        console.log('state: ', this.state)
    }
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa"> {/* se eu clicar no label, quero que o input, no qual o htmlFor foi referenciado no id do input, seja focado */}
                        Adicione um novo estudo
                    </label>
                    <input type='text' name='tarefa' id='tarefa' value={this.state.tarefa} onChange={event => this.setState({...this.state, tarefa: event.target.value})} placeholder="O que você quer estudar?" required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input type='time' step='1' name='tempo' value={this.state.tempo} onChange={event => this.setState({...this.state, tempo: event.target.value})} id='tempo' min='00:00:00' max='01:30:00' required />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario