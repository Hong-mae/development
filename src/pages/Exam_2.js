import React, { Component } from 'react';

// 컴포넌트 모듈화
import Subject from '../Components/Subject'
import TOC from '../Components/TOC'
import ReadContent from '../Components/ReadContent'
import CreateContent from '../Components/CreateContent';
import Control from '../Components/Control'

class Exam_2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            status      : 'edit',
            mode        : 'create',
            select_id   : 0,
            subject     : { title:"WEB2"         , sub:"World Wide Web!" },
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
            status  : "normal",
            mode    : "welcome",
        });
    }

    handleChangePage = (_id) => {
        this.setState({
            status      : "normal",
            mode        : "read",
            select_id   : _id
        });
    }

    handleChangeMode = (_mode) => {
        this.setState({
            status  : 'edit',
            mode    : _mode
        });
    }

    handleOnSubmit = (_title, _desc) => {
        // Array 
        var _contents = Array.from(this.state.contents)
        var _size = _contents.length;
        _contents.push(
            {id: _size++, title:_title, desc:_desc}
        );

        // Object
        // var _size = Object.keys(_contents).length;
        // var _contents = Object.assign({id: _size++, title:_title, desc:_desc}, this.state.contents);

        this.setState({
            contents : _contents
        });
    }

    render() {
        console.log("App Render");
        var _title, _desc, _article = null;

        if (this.state.mode === "welcome") {
            _title  = this.state.welcome.title;
            _desc   = this.state.welcome.desc;
            _article= <ReadContent title={_title} desc={_desc}/>
        } else if (this.state.mode === "read") {
            _title  = this.state.contents[this.state.select_id].title;
            _desc   = this.state.contents[this.state.select_id].desc;
            _article= <ReadContent title={_title} desc={_desc}/>
        } else if (this.state.mode === "create") {
            _article= <CreateContent onSubmit={this.handleOnSubmit}/>
        }
        
        return (
            <div className="App">
                <Subject 
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={this.handleChangeMainPage}/>
                <Control onChangeMode={this.handleChangeMode}/>
                <TOC 
                    data={this.state.contents}
                    onChangePage={this.handleChangePage}/>
                {_article}
            </div>
        );
    }
}

export default Exam_2;
