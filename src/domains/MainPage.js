import React, { Component } from 'react';
import {Route} from "react-router-dom";
import HeaderNavigation from './pages/HeaderNavigation'
import Header from './pages/Header'
import AboutAs from './pages/AboutAs'
import Courses from "./pages/Courses";
import News from "./pages/News";
import ProgramCours from "./pages/ProgramCours";
import StartCourses from "./pages/StartCourses";
import Footer from './pages/Footer'
import Commidoncours from './pages/Commidoncours'
import Form from './pages/Form'





import scrollToComponent from 'react-scroll-to-component';


class MainPage extends Component{

    scrollFunc = (type) => {
        switch(type) {
            case `about`:
                scrollToComponent(this.AboutAs, { offset: 0, align: 'top', duration: 1500})
                break;
            case `course`:
                scrollToComponent(this.Courses, { offset: 0, align: 'top', duration: 1500})
                break;
            case `news`:
                scrollToComponent(this.News, { offset: 0, align: 'top', duration: 1500})
                break;
            case `contacts`:
                scrollToComponent(this.Contacts, { offset: 0, align: 'top', duration: 1500})
                break;
            default:
                return
        }
    }
    render(){
        return(
            <div>
                <HeaderNavigation  scrollTo ={this.scrollFunc}/>
                <Header/>
                <AboutAs ref={(section) => { this.AboutAs = section; }}/>
                <Commidoncours/>
                <Courses ref={(section) => { this.Courses = section; }}/>
                <ProgramCours/>
                <StartCourses/>
                <Form/>
                <News ref={(section) => { this.News = section; }}/>
                <Footer ref={(section) => { this.Contacts = section; }}/>
            </div>


        )
}
}

export default MainPage