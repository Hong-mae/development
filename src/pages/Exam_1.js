import React, { Component } from 'react';

// 컴포넌트 모듈화
import Subject from '../Components/Exam1/Subject'
import TOC from '../Components/Exam1/TOC'
import Content from '../Components/Exam1/Content'

class Exam_1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            mode        : 'read',
            select_id   : 0,
            subject     : { title:"WEB"         , sub:"World Wide Web!" },
            welcome     : { title: 'Welcome'    , desc: 'Hello React!'  },
            contents    : [
                {id: 0, title: "HTML", desc: "HTML is HyperText MarkUp Language"},
                {id: 1, title: "CSS", desc: "CSS is for design"},
                {id: 2, title: "JAVASCRIPT", desc: "JAVASCRIPT is  for interactive"},
            ]
        }
    }

    handleChangeMainPage = () => {
        this.setState({
            mode: "welcome",
        });
    }

    handleChangePage = (_id) => {
        this.setState({
            mode        : "read",
            select_id   : _id
        });
    }

    render() {
        console.log("App Render");
        var _title, _desc = null;

        if (this.state.mode === "welcome"){
            _title  = this.state.welcome.title;
            _desc   = this.state.welcome.desc;
        } else if (this.state.mode === "read"){
            _title  = this.state.contents[this.state.select_id].title;
            _desc   = this.state.contents[this.state.select_id].desc;
        }
        
        return (
            <div className="App">
                <Subject 
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={this.handleChangeMainPage}/>
                <TOC 
                    data={this.state.contents}
                    onChangePage={this.handleChangePage}/>
                <Content 
                    title={_title} 
                    desc={_desc}/>
            </div>
        );
    }
}

export default Exam_1;
