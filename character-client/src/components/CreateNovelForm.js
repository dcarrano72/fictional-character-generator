import React, { Component } from 'react';
import axios from 'axios';

class CreateNovelForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "title": "",
            "author": "",
            "description": ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.saveNewNovel = this.saveNewNovel.bind(this);
    }

    // handle change
    handleChange(event) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    async saveNewNovel(event) {
        event.preventDefault();
        const novelData = {
            "novel": {
                "title": this.state.title,
                "author": this.state.author,
                "description": this.state.description
            }
        }
        const newNovel = await axios.post("http://localhost:3000/novels", novelData)
        console.log(newNovel)
        this.props.changeSelectedNovel(newNovel);

    }
    render() {
        return (
            <div className="create-novel-form">
                <h3>Create New Novel</h3>
                <form onSubmit={this.saveNewNovel}>
                    <input type="text" name="title" placeholder="Enter your title" value={this.state.title} onChange={this.handleChange} />
                    <input type="text" name="author" placeholder="Enter your name" value={this.state.author} onChange={this.handleChange} />
                    <textarea name="description" placeholder="Enter a description" value={this.state.description} onChange={this.handleChange}></textarea>
                    <input type="submit" className="create-novel-button" value="Create Novel"></input>
                </form>
            </div>
        )
    }
}

export default CreateNovelForm;