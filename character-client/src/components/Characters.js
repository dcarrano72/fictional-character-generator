import React, { Component } from 'react';

class Characters extends Component {
    render() {
        return (
            <div className="characters-list">
                {
                    this.props.characters.map((character, index) => {
                        return (
                            <div className="character" key={index}>
                                <h3>Character Name: {character.name}</h3>
                                <p>Eye color: {character.eye_color}</p>
                                <p>Personality traits: {character.personality_traits}</p>
                                {
                                    // character.personality_traits ? (
                                    //     character.personality_traits.map((trait) => {
                                    //         return (
                                    //             <p>{trait}</p>
                                    //         )
                                    //     })) : null
                                }
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Characters;