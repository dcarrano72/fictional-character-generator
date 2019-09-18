import React, { Component } from 'react';
import ShowNovelInfo from './ShowNovelInfo';
import CharactersList from './CharactersList';
import CreateCharacter from './CreateCharacter';

class View3 extends Component {


    render() {
        return (
            <div className="view-3">
                {/* <ShowNovelInfo novel={this.novel} /> */}
                {/* <CharactersList characters={this.characters} /> */}
                <CreateCharacter character={this.props.character} />
            </div>
        )
    }
}

export default View3;