import React, { Component } from 'react';
import '../PagesStyle/Courses.css'
import  clock from '../../image/clock.png'
import calendar from '../../image/calendar.png'

class Courses extends Component{
    render(){

        return(

            <div className="InfoCourses" >
                <div className="InfoCourses-conteiner">
                <p>Когда</p>
                <div>
                    <div className="Courses-conteiner-mounth">
                        <img src={calendar}/>
                        <ul>
                            <li className="Courses-conteiner-mounth-1">6 месяцев</li>
                            <li className="Courses-conteiner-mounth-2">Ноябрь 2018</li>
                        </ul>
                    </div>
                    <div className="Courses-conteiner-mounth-imgclock">
                        <img src={clock}/>
                        <ul>
                            <li className="Courses-conteiner-mounth-1">3 раза в неделю</li>
                            <li className="Courses-conteiner-mounth-2">18:30-21:30</li>
                        </ul>
                    </div>
                </div>

                </div>
                <input type="button" value="Заявка на курс"/>

            </div>
        )
    }
}

export default Courses;