import React, { Component } from 'react';

// 컴포넌트 모듈화
import Subject from '../Components/Exam2/Subject'
import TOC from '../Components/Exam2/TOC'
import ReadContent from '../Components/Exam2/ReadContent'
import CreateContent from '../Components/Exam2/CreateContent';
import UpdateContent from '../Components/Exam2/UpdateContent';
import Control from '../Components/Exam2/Control'

class Exam_2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            status      : 'edit',
            mode        : 'welcome',
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
        if(_mode === 'delete'){
            if(window.confirm("Really?")){
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while(i < _contents.length) {
                    console.log(_contents[i].id, this.state.select_id);
                    if(_contents[i].id == this.state.select_id){
                        
                        _contents.splice(i, 1);
                        break;
                    }
                    i++;
                }

                this.setState({
                    status      : 'normal',
                    mode        : "welcome",
                    select_id   : 0,
                    contents    : _contents,
                });

                alert("deleted!");
            }
        } else {
            this.setState({
                status  : 'edit',
                mode    : _mode
            });
        }
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
            contents    : _contents,
            status      : "normal",
            mode        : "read",
        });
    }

    handleUpdateContent = (_id, _title, _desc) => {
        var _contents = Array.from(this.state.contents);
        var i = 0;

        while(i < _contents.length){
            if(_contents[i].id === _id){
                _contents[i] = {id: _id, title:_title, desc:_desc};
                break;
            }
            i++;
        }

        this.setState({
            contents    : _contents,
            status      : "normal",
            mode        : "read",
        })
    }

    getReadContent = () => {
        var i = 0;
        while(i < this.state.contents.length){
            var data = this.state.contents[i];
            if(data.id == this.state.select_id){
                return data;
            }
            i++;
        }
    }

    getContent(){
        var _title, _desc, _article, _contents = null;
        
        if (this.state.mode === "welcome") {
            _title  = this.state.welcome.title;
            _desc   = this.state.welcome.desc;
            _article= <ReadContent title={_title} desc={_desc}/>
        } else if (this.state.mode === "read") {
            _contents = this.getReadContent();
            _article= <ReadContent title={_contents.title} desc={_contents.desc}/>
        } else if (this.state.mode === "create") {
            _article= <CreateContent onSubmit={this.handleOnSubmit}/>
        } else if (this.state.mode === "update") {
            _contents = this.getReadContent();
            _article= <UpdateContent data={_contents} onSubmit={this.handleUpdateContent}/>
        }

        return _article;
    }

    render() {
        console.log("App Render");
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
                {this.getContent()}
            </div>
        );
    }
}

export default Exam_2;
