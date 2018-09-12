import React, { Component } from 'react';
import "../PagesStyle/Header.css"

class Header extends Component{

    render(){
        return(
            <div className="Header-conteiner">
                <h2>Добро пожаловать в it-школу в харькове</h2>
                <input type="button" value="Заявка на курс"/>
            </div>
        )
    }
}

export default Header;