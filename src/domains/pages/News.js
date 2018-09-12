import React, { Component } from 'react';
import "../PagesStyle/News.css"
import  photo1 from "../../image/NewsPhoto1.png"
import  photo2 from "../../image/NewsPhoto2.png"


class News extends Component{
    render(){

        return(
            <div className='News-wrap'>
                <p className='News-wrap-background'>Новости</p>
                <div className="News">
                <h3>Новости</h3>
                <div className="News-conteiner">
                    <div className="News-conteiner-img">
                        <img src={photo1}/>
                        <img src={photo2}/>
                    </div>
                    <div className="News-conteiner-decript">
                        <p>IT-школа Samsung: от обучения
                            до профессионального
                            программирования</p>
                        <span>В 2018-2019 учебном году учащиеся из 6 городов Украины смогут пройти бесплатное обучение
                            программированию благодаря проекту «IT-школа Samsung», который предусматривает основы разработки приложений под систему Android.
                            Этот проект был создан при поддержке Министерства образования и науки Украины, а та
                            кже Института модернизации содержания образ
                            ования, и рассчитан на учащихся старших классов общеобразовательных школ.</span>
                        <span>Зачисление в программу «IT-школа Samsung» будет осуществляться через вступительное тес
                            тирование, которое смогут пройти школьники 9-11 классов в учебных заведениях Киева, Харькова, Днепра
                            , Винницы, Львова и Одессы. Под крылом современных программистов и специалистов Украинского центра разработок и исследований
                            Samsung будут проводиться занятия для тех двухсот учеников, которые получат высокий показатель при отборе. </span>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default News;