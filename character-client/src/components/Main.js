import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="novels-container">
                novels
                {
                    this.props.novels.map((novel, index) => {
                        return (
                            <div className="novel" key={index}>
                                <h3>{novel.title}</h3>
                                <p>{novel.author}</p>
                                <p>{novel.description}</p>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}

export default Main;