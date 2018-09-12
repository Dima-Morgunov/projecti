import React, { Component } from 'react';
import '../PagesStyle/Form.css'

class  Form extends Component{
    render(){

        return(
            <div className='Form-wrap'>
                <p className='Form-wrap-background'>Записаться на курс</p>
            <div className='Form'>
                <h3>
                    записаться на курс
                </h3>
                <div className='Form-conteiner'>
                    <input
                        type="text"
                        placeholder="Имя и Фамилия"
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                    />
                    <input
                        type="tel"
                        placeholder="Телефон"
                    />
                </div>
                <input className="Form-conteiner-button" type="button" value="Отправить"/>
            </div>
            </div>
        )
    }
}

export default Form;