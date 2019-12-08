import React, { Component } from 'react';

class TOC extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.onChangePage(e.target.dataset.id);
    }

    render() {
        console.log("TOC Render");
        var data = this.props.data;
        var i = 0;
        var lists = [];

        while (i < data.length){
            lists.push(
                <li key={data[i].id}>
                    <a 
                        href={"/content/" + data[i].id}
                        data-id={data[i].id}
                        onClick={this.handleClick}>
                            {data[i].title}
                    </a>
                </li>
            );

            i++;
        };

        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;
