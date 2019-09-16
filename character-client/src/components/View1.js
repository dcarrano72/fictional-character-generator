import React, { Component } from 'react';
import Header from './Header';
import StartNovel from './StartNovel';
import OpenExistingNovel from './OpenExistingNovel';

class View1 extends Component {
    render() {
        return (
            <div className="view-1">
                <StartNovel />
                <p>or</p>
                <OpenExistingNovel />
            </div>
        )
    }
}

export default View1;