import React, {Component, ReactChildren as firstParagraph} from 'react';
import { Tab, Input, TextArea, Button } from 'semantic-ui-react'
import axios from  "axios"
import LoginAdminPage from "./LoginAdminPage";
import './inputBlock.css'

class AdminPanel extends Component{

    state = {
        // блок новостей
        newsElement: [{
            id: 1,
            photo1: 1,
            photo2: 1,
            newsTitlle: '12312',
            newsDeskription: '23322',
        },{
            id: 2,
            photo1: 1,
            photo2: 1,
            newsTitlle: '12312',
            newsDeskription: '23322',
        },{
            id: 3,
            photo1: 1,
            photo2: 1,
            newsTitlle: '12312',
            newsDeskription: '23322',
        }],

        // 4й блок
        startCoursesDescript: [{
            id: 1,
            name: 1,
            text: '12312',
        },{
            id: 2,
            name: 2,
            text: '12312',
        },{
            id: 3,
            name: 3,
            text: '12312',
        },
        ],

        // 3й блок
        secondParagraph:[{
            id: 3,
            name: 3,
            text:'cccc'
        },{
            id: 4,
            name: 4,
            text:''
        },{
            id: 5,
            name: 5,
            text:''
        }],
        firstParagraph:[{
            id: 1,
            name: 1,
            text:'aaaa'
        },{
            id: 2,
            name: 2,
            text:'sssss'
        },{
            id: 3,
            name: 3,
            text:'cccc'
        },{
            id: 4,
            name: 4,
            text:''
        },{
            id: 5,
            name: 5,
            text:''
        }],

        data: {
            //1й блок
            numChildren: 0,
            startFistCours:'',
            levelFirstCours:[],
            descriptFirstTittleCours:'',
            descriptFirstCours:'',
            startSecondCours:'',
            levelSecondCours:[],
            descriptSecondTittleCours:'',
            //2й блок
            drationCourses:'',
            monthBeginningCourses:'',
            numberOfTimes:'',
            lessonDuration:'',
            //3й блок

            //4й блок
            freePlacesCount:"",
        },
    };


    onChange = e => {
        console.log(this.state.data)
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    }

    onDeleteFirstModule = id => {
        var newState = this.state.firstParagraph.filter(e => {
            if(e.id !== id) return e
        })
        console.log(newState)
        this.setState({
            firstParagraph: newState
        })
    }
    onDeleteSecondModule = id => {
        var newState = this.state.secondParagraph.filter(e => {
            if(e.id !== id) return e
        })
        console.log(newState)
        this.setState({
            secondParagraph: newState
        })
    }
    onDeleteDescript = id => {
        var newState = this.state.startCoursesDescript.filter(e => {
            if(e.id !== id) return e
        })
        console.log(newState)
        this.setState({
            startCoursesDescript: newState
        })
    }
    onDeleteNews = id => {
        var newState = this.state.newsElement.filter(e => {
            if(e.id !== id) return e
        })
        console.log(newState)
        this.setState({
            newsElement: newState
        })
    }


    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandomInt

    onAddFirstModule = () =>{
        var newArr = this.state.firstParagraph

        newArr.push({
            id: this.getRandomInt(1, 99999999),
            name: this.getRandomInt(1, 99999999),
            value: '',
        })
        console.log(newArr)
        this.setState({
            firstParagraph: newArr
        })
    }
    onAddSecondModule = () =>{
        var newArr = this.state.secondParagraph

        newArr.push({
            id: this.getRandomInt(1, 99999999),
            name: this.getRandomInt(1, 99999999),
            value: '',
        })
        console.log(newArr)
        this.setState({
            secondParagraph: newArr
        })
    }
    onAddDescript = () =>{
        var newArr = this.state.startCoursesDescript

        newArr.push({
            id: this.getRandomInt(1, 99999999),
            name: this.getRandomInt(1, 99999999),
            value: '',
        })
        console.log(newArr)
        this.setState({
            startCoursesDescript: newArr
        })
    }
    onAddNews = () =>{
        var newArr = this.state.newsElement

        newArr.push({
            id: this.getRandomInt(1, 99999999),
            newsTitlle: '',
            newsDeskription: '',
        })
        console.log(newArr)
        this.setState({
            newsElement: newArr
        })
    }

    ChangeData = () =>{
        console.log(this.state.data)
        axios({
            method: 'post',
            headers: {'Authorization': `Bearer ${this.props.token}`},
            url: '/api/auth/user/apartment',
            data: this.state.data
        })
            .then(result => {
                console.log(result);
            })
    }

    /*getInitialState = () =>{
        return{file: []}
    }
    _onChange = () => {
        var file = this.refs.file.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);


        reader.onloadend = () => {
            this.setState({
                imgSrc: [reader.result]
            })
        }
    }*/

    onChangeFirstBlock = event => {
        var arrId = event.target.id
        var el = this.state.firstParagraph.filter(e => {if(e.id == arrId) return e})
        var obj = el[0]
        console.log(obj)

        var newArr = this.state.firstParagraph.map(e => {
            if(e.id == arrId) {
                e.text = event.target.value
            }
            return e
        })
        this.setState({
            firstParagraph: newArr
        })

    }
    onChangeSecondBlock = event => {
        var arrId = event.target.id
        var el = this.state.secondParagraph.filter(e => {if(e.id == arrId) return e})
        var obj = el[0]
        console.log(obj)

        var newArr = this.state.secondParagraph.map(e => {
            if(e.id == arrId) {
                e.text = event.target.value
            }
            return e
        })
        this.setState({
            secondParagraph: newArr
        })

    }
    onChangeStartCoursesDescript = event => {
        var arrId = event.target.id
        var el = this.state.startCoursesDescript.filter(e => {if(e.id == arrId) return e})
        var obj = el[0]
        console.log(obj)

        var newArr = this.state.startCoursesDescript.map(e => {
            if(e.id == arrId) {
                e.text = event.target.value
            }
            return e
        })
        this.setState({
            startCoursesDescript: newArr
        })

    }
    onChangeNewsElementTittle = event => {
        var arrId = event.target.id
        var el = this.state.newsElement.filter(e => {if(e.id == arrId) return e})
        var obj = el[0]
        console.log(obj)

        var newArr = this.state.newsElement.map(e => {
            if(e.id == arrId) {
                e.newsTitlle = event.target.value
            }
            return e
        })
        this.setState({
            newsElement: newArr
        })

    }
    onChangeNewsElementDescript = event => {
        var arrId = event.target.id
        var el = this.state.newsElement.filter(e => {if(e.id == arrId) return e})
        var obj = el[0]
        console.log(obj)

        var newArr = this.state.newsElement.map(e => {
            if(e.id == arrId) {
                e.newsDeskription = event.target.value
            }
            return e
        })
        this.setState({
            newsElement: newArr
        })

    }


    render(){

        const {data, firstParagraph, startCoursesDescript, secondParagraph, newsElement} = this.state;

        //блок новостей
        const newsBlock = [
            { menuItem: 'Description', render: () =>
                    <Tab.Pane>
                        {
                            newsElement.map(e => (
                                <div className='wrapInput'>
                                    <Button className='deleteButton' onClick={() => this.onDeleteNews(e.id)}>
                                        X
                                    </Button>
                                    <Input
                                        placeholder='qwe'
                                        id={e.id}
                                        value={e.newsTitlle}
                                        onChange={this.onChangeNewsElementTittle}
                                        className='inputBlock'
                                    />
                                    <Input
                                        placeholder='qwe'
                                        id={e.id}
                                        value={e.newsDeskription}
                                        onChange={this.onChangeNewsElementDescript}
                                        className='inputBlock'
                                    />
                                </div>
                            ))
                        }
                        <Button onClick={this.ChangeData}>Update</Button>
                        <Button onClick={this.onAddNews}>Add note</Button>
                    </Tab.Pane> },
        ]
        //4й блок
        const startCourses = [
            { menuItem: 'Description', render: () =>
                    <Tab.Pane>
                        {
                            startCoursesDescript.map(e => (
                                <div className='wrapInput'>
                                    <Button className='deleteButton' onClick={() => this.onDeleteDescript(e.id)}>
                                        X
                                    </Button>
                                    <Input
                                        placeholder='Начало курса'
                                        value={e.text}
                                        id={e.id}
                                        onChange={this.onChangeStartCoursesDescript}
                                        key={e.id}
                                        className='inputBlock'
                                    />
                                </div>
                            ))
                        }
                        <Button onClick={this.ChangeData}>Update</Button>
                        <Button onClick={this.onAddDescript}>Add note</Button>
                    </Tab.Pane> },
            { menuItem: 'Количество свободных мест', render: () =>
                    <Tab.Pane>
                        <Input
                            placeholder='11'
                            name="freePlacesCount"
                            value={data.freePlacesCount}
                            onChange={this.onChange}
                        />
                        <Button >Click Here</Button>
                    </Tab.Pane> },
        ]
        //3й блок
        const ProgramCourses = [
            { menuItem: '1й модуль', render: () =>
                    <Tab.Pane>
                        {
                            firstParagraph.map(e => (
                                <div className='wrapInput'>
                                    <Button className='deleteButton' onClick={() => this.onDeleteFirstModule(e.id)}>
                                        X
                                    </Button>
                                    <Input
                                        placeholder='Начало курса'
                                        value={e.text}
                                        id={e.id}
                                        onChange={this.onChangeFirstBlock}
                                        key={e.id}
                                        className='inputBlock'
                                    />
                                </div>
                            ))
                        }
                        <Button onClick={this.ChangeData}>Update</Button>
                        <Button onClick={this.onAddFirstModule}>Add note</Button>
                    </Tab.Pane> },
            { menuItem: '2й модуль', render: () =>
                            <Tab.Pane>
                            {
                                secondParagraph.map(e => (
                                    <div className='wrapInput'>
                                        <Button className='deleteButton' onClick={() => this.onDeleteSecondModule(e.id)}>
                                            X
                                        </Button>
                                        <Input
                                            placeholder='Начало курса'
                                            value={e.text}
                                            id={e.id}
                                            onChange={this.onChangeSecondBlock}
                                            key={e.id}
                                            className='inputBlock'
                                        />
                                    </div>
                                ))
                            }
                                <Button onClick={this.ChangeData}>Update</Button>
                                <Button onClick={this.onAddSecondModule}>Add note</Button>
                    </Tab.Pane> },
        ]
        // 2й блок
        const CommindCouses = [
            { menuItem: '2й блок', render: () =>
                    <Tab.Pane>
                        <p>Продолжительность</p>
                        <Input
                            placeholder='6 месяцев'
                            name="startFistCours"
                            value={data.drationCourses}
                            onChange={this.onChange}
                        />
                        <p>Начало занятий</p>
                        <Input
                            placeholder='ноябрь'
                            name="startFistCours"
                            value={data.monthBeginningCourses}
                            onChange={this.onChange}
                        />
                        <p>Количество занятий</p>
                        <Input
                            placeholder='3 раза в неделю'
                            name="levelFirstCours"
                            value={data.numberOfTimes}
                            onChange={this.onChange}
                        />
                        <p>Время</p>
                        <Input
                            placeholder='18:30 - 21:30'
                            name="levelFirstCours"
                            value={data.lessonDuration}
                            onChange={this.onChange}
                        />

                        <p>Применить изменения</p>
                        <Button onClick={this.ChangeData}>Update</Button>

                        {/*{<form onSubmit={this.onSubmit} >
                             <input
                                 ref="uploadImg"
                                 type="file"
                                 name="selectedFile"
                                 onChange={this._onChange}
                             />
                         </form>*/}

                    </Tab.Pane> },
        ]
        // 1й блок
        const Courses_menu = [
            { menuItem: 'Курс №1', render: () =>
                    <Tab.Pane>
                        <p>Начало курса</p>
                        <Input
                            placeholder='Начало курса'
                            name="startFistCours"
                            value={data.startFistCours}
                            onChange={this.onChange}
                        />
                        <p>Сложность от 1 до 5</p>
                        <Input
                            type = "number"
                            min="1"
                            max="5"
                            placeholder='Сложность'
                            name="levelFirstCours"
                            value={data.levelFirstCours}
                            onChange={this.onChange}
                        />
                        <p>Заглавие описания</p>
                        <Input
                            type='text'
                            placeholder='Заголовок описания'
                            name="descriptFirstTittleCours"
                            value={data.descriptFirstTittleCours}
                            onChange={this.onChange}
                        />
                        <p>Текст описания</p>
                        <TextArea
                            type='text'
                            laceholder='Описанмие'
                            name="descriptFirstCours"
                            value={data.descriptFirstCours}
                            onChange={this.onChange}
                        />
                        <p>Применить изменения</p>
                        <Button onClick={this.ChangeData}>Update</Button>

                        {/*{<form onSubmit={this.onSubmit} >
                             <input
                                 ref="uploadImg"
                                 type="file"
                                 name="selectedFile"
                                 onChange={this._onChange}
                             />
                         </form>*/}

                    </Tab.Pane> },
            { menuItem: 'Курсы №2', render: () => <Tab.Pane>

                    <p>Начало курса</p>
                    <Input
                        placeholder='Начало курса'
                        name="startSecondCours"
                        value={data.startSecondCours}
                        onChange={this.onChange}
                    />
                    <p>Сложность от 1 до 5</p>
                    <Input
                        type = "number"
                        min="1"
                        max="5"
                        placeholder='Сложность'
                        name="levelSecondCours"
                        value={data.levelSecondCours}
                        onChange={this.onChange}
                    />
                    <p>Заглавие описания</p>
                    <Input
                        placeholder='Заголовок описания'
                        name="descriptSecondTittleCours"
                        value={data.descriptSecondTittleCours}
                        onChange={this.onChange}
                    />
                    <p>Текст описания</p>
                    <TextArea
                        paceholder='Описанмие'
                        name="descriptSecondCours"
                        value={data.descriptSecondCours}
                        onChange={this.onChange}
                    />
                    <p>Применить изменения</p>
                    <Button onClick={this.ChangeData}>Update</Button>

                </Tab.Pane> },
        ]

        const panes = [
            { menuItem: 'Курсы', render: () => <Tab.Pane>
                    <Tab panes={Courses_menu} />
                </Tab.Pane> },
            { menuItem: 'Дата и продилжительность', render: () =>
                    <Tab.Pane>
                    <Tab panes = {CommindCouses}/>
                </Tab.Pane> },
            { menuItem: '3й блок', render: () =>
                    <Tab.Pane>
                        <Tab panes = {ProgramCourses}/>
                </Tab.Pane> },
            { menuItem: 'Блок начала курсов', render: () =>
                    <Tab.Pane>
                        <Tab panes = {startCourses}/>
                    </Tab.Pane> },
            { menuItem: 'Блок новостей', render: () =>
                    <Tab.Pane>
                        <Tab panes = {newsBlock}/>
                    </Tab.Pane> },
        ]

        return(
            <div>
                {/*{
                    localStorage.getItem(`token`)
                        ?*/}
                        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
                        {/*:
                        null
                }*/}
            </div>

        )
    }
}
export default AdminPanel

