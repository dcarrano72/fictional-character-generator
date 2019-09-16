import React, { Component } from 'react';
import Characters from './Characters';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="novels-container">

                {
                    this.props.novels.map((novel, index) => {
                        return (
                            <div className="novel" key={index}>
                                <h3>{novel.title}</h3>
                                <p>By: {novel.author}</p>
                                <p>{novel.description}</p>
                                <Characters characters={novel.characters} />

                                <hr />
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}

export default Main;