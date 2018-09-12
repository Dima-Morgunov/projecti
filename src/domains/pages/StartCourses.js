import React, { Component } from 'react';
import computer from "../../image/StartCoursComputer.png"
import "../PagesStyle/StartCours.css"

class StartCourses extends Component{
    render(){

        return(
            <div className='startCourses-wrap'>
                <p className='startCourses-wrap-background'>До начала курса осталось</p>
            <div className="StartCours">

            <div className="StartCours-conteiner">
                <h3>До начала курса осталось</h3>
                <div className="StartCours-conteiner-wrap">
                    <div className="StartCours-conteiner-wrap-item">
                        <p><span>Дл</span>я кого</p>
                        <ul>
                            <li>- Для тех, кто хочет "оживлять" дизайны сайтов</li>
                            <li> - Для тех, кто хочет изучать один из самых популярных языков программирования</li>
                            <li> - Для тех, кто хочет быть не просто "верстальщиком"</li>
                            <li> - Для тех, кто хочет попасть на высокооплачиваемую работу с постоянным карьерным ростом</li>
                        </ul>
                    </div>
                    <div className="StartCours-conteiner-wrap-item">
                    <span className="StartCours-conteiner-wrap-counter">11 мест</span>
                        <img src={computer}/>
                    </div>
                </div>
                <input type="button" value="Заявка на курс"/>
            </div>
            </div>
            </div>
        )
    }
}

export default StartCourses;