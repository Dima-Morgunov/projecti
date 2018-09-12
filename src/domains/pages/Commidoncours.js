import React, { Component } from 'react';
import '../PagesStyle/Commidoncours.css'
import CoursesData from "../../image/CoursesData.png"
import imageFrontEnd from "../../image/imageFrontEnd.png"
import imagePHP from "../../image/imagePHP.png"
import imageStar from "../../image/imageStar.png"


class Commidoncours extends Component{
    render(){

        return(
            <div className='Courses-wrap'>
                <p className='Courses-wrap-background'>Курсы</p>
            <div className="Courses-conteiner">
                <h3>Идет набор</h3>
                <div className="Courses-conteiner-wrap">
                    <div className="Courses-conteiner-wrap-PHP">
                        <p className="Courses-conteiner-wrap-PHP-Data">
                            Старт<br/>
                            31.08
                        </p>
                        <img className='Courses-conteiner-wrap-PHP-imageData' src={CoursesData}/>
                        <img className="Courses-conteiner-wrap-PHP-img" src={imagePHP}/>
                        <div className="Courses-conteiner-wrap-PHP-star">
                            Сложность
                            <img src={imageStar}/>
                            <img src={imageStar}/>
                            <img src={imageStar}/>
                            <img src={imageStar}/>
                            <img src={imageStar}/>
                        </div>
                        <p className="Courses-conteiner-wrap-FrontEnd-Descript">
                            <span className="Courses-conteiner-wrap-FrontEnd-Descript-title">Курсы PHP</span><br/>
                            PHP – всемирно известный язык программирования,
                            базирующийся на использовании скриптов, внедряемых в
                            гипертекстовые страницы. Главная задача PHP – поддерживать
                            динамические веб-страницы, которые могут легко изменяться посредством
                            различных скриптов.
                        </p>
                    </div>

                    <div className="Courses-conteiner-wrap-FrontEnd">
                        <p className="Courses-conteiner-wrap-FrontEnd-Data">
                            Старт<br/>
                            31.08
                        </p>
                        <img src={CoursesData} className="Courses-conteiner-wrap-FrontEnd-CoursesData"/>
                        <img className='Courses-conteiner-wrap-FrontEnd-img' src={imageFrontEnd}/>
                        <div className="Courses-conteiner-wrap-FrontEnd-star">
                            Сложность
                            <img src={imageStar}/>
                            <img src={imageStar}/>
                            <img src={imageStar}/>
                        </div>
                        <p className="Courses-conteiner-wrap-FrontEnd-Descript">
                            <span className="Courses-conteiner-wrap-FrontEnd-Descript-title">Курсы PHP</span><br/>
                            PHP – всемирно известный язык программирования,
                            базирующийся на использовании скриптов, внедряемых в
                            гипертекстовые страницы. Главная задача PHP – поддерживать
                            динамические веб-страницы, которые могут легко изменяться посредством
                            различных скриптов.
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Commidoncours;