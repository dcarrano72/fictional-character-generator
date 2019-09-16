import React, { Component } from 'react';

class CreateNovelForm extends Component {
    render() {
        return (
            <div className="create-novel-form">
                <h3>Create New Novel</h3>
                <form action="#">
                    <input type="text" name="title" placeholder="Enter your title" />
                    <input type="text" name="author" placeholder="Enter your name" />
                    <textarea name="description" placeholder="Enter a description"></textarea>
                    <button className="create-novel-button">Create Novel</button>
                </form>
            </div>
        )
    }
}

export default CreateNovelForm;