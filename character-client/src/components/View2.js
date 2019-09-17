import React, { Component } from 'react';
import CreateNovelForm from './CreateNovelForm';

class View2 extends Component {
    render() {
        return (
            <div className="view-2">
                <CreateNovelForm changeSelectedNovel={this.props.changeSelectedNovel} />
            </div>
        )
    }
}

export default View2;