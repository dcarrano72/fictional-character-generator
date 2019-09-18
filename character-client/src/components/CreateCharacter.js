import React, { Component } from 'react';
import axios from 'axios';
import femaleNames from '../data/FemaleNames';
import maleNames from '../data/maleNames';
import lastNames from '../data/lastNames';
// console.log('fm', femaleNames)
// console.log('fm', maleNames)
// console.log('fm', lastNames)


class CreateCharacter extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: "",
            eye_color: "",
            personality_traits: [],
            trait1: "",
            trait2: "",
            trait3: ""
        }
        this.clearForm = this.clearForm.bind(this)
        this.saveNewCharacter = this.saveNewCharacter.bind(this)
        this.makeRandomCharacter = this.makeRandomCharacter.bind(this)

    }


    makeRandomCharacter(event) {
        event.preventDefault();

        const theAge = [
            "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"
        ];

        const theEyeColor = [
            "brown", "green", "blue", "hazel", "grey", "light brown", "bright blue", "dark blue", "light green"
        ];

        const theSex = ["male", "female"];

        const thePersonalCharacteristic = [
            "happy", "sad", "lonely", "fearful", "worrysome", "stressed", "weird", "gregarious", "sociable", "caring", "loving", "funny", "curious", "mean", "isolated", "anxious", "jealous", "compassionate", "annoying", "bright", "confident", "insecure", "negative", "optimistic", "arrogant", "smart", "stupid", "selfish", "self-centered", "obnoxious", "frightened", "angry", "greedy", "picky", "sorrowful", "depressed", "outgoing", "bully", "pushover", "pushy", "friendly", "persuasive"
        ];

        const randomSex = theSex[Math.floor(Math.random() * theSex.length)];

        let randomFirstName;

        if (randomSex === "female") {
            randomFirstName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
        } else {
            randomFirstName = maleNames[Math.floor(Math.random() * maleNames.length)];
        }

        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        const randomAge = theAge[Math.floor(Math.random() * theAge.length)];

        const randomEyeColor = theEyeColor[Math.floor(Math.random() * theEyeColor.length)];

        const randomPersonalCharacteristicOne = thePersonalCharacteristic[Math.floor(Math.random() * thePersonalCharacteristic.length)];

        const randomPersonalCharacteristicTwo = thePersonalCharacteristic[Math.floor(Math.random() * thePersonalCharacteristic.length)];

        const randomPersonalCharacteristicThree = thePersonalCharacteristic[Math.floor(Math.random() * thePersonalCharacteristic.length)];

        const concatName = randomFirstName + " " + randomLastName;

        const personal_characteristics = randomPersonalCharacteristicOne + ", " + randomPersonalCharacteristicTwo + ", " + randomPersonalCharacteristicThree;

        this.setState({
            name: concatName,
            age: randomAge,
            eye_color: randomEyeColor,
            personality_traits: personal_characteristics,
            trait1: randomPersonalCharacteristicOne,
            trait2: randomPersonalCharacteristicTwo,
            trait3: randomPersonalCharacteristicThree
        })
    }
    clearForm(event) {
        event.preventDefault();
        this.setState({
            name: "",
            age: "",
            eye_color: "",
            personality_traits: []
        })
    }

    async saveNewCharacter(event) {
        console.log(this.state.personality_traits);
        event.preventDefault();
        const characterData = {
            "name": this.state.name,
            "age": this.state.age,
            "eye_color": this.state.eye_color,
            "personality_traits": this.state.personality_traits,
            "novel_id": this.props.novel.id
        }
        const newCharacter = await axios.post("https://fictional-character-generator.herokuapp.com/characters", characterData)
        console.log(newCharacter)

        this.props.getNovels();

    }


    render() {
        return (
            <div className="create-character">
                <h3>Create a new character</h3>

                <form>
                    Name: <input type="text" name="name" value={this.state.name} /><br />
                    Age: <input type="text" name="age" value={this.state.age} /><br />
                    Eye color: <input type="text" name="eye_color" value={this.state.eye_color} /><br />
                    Personality Traits: <input type="text" name="personality_traits" value={this.state.personality_traits} />
                    <button className="create-character-button" onClick={this.makeRandomCharacter}>Create Character</button>
                    <button className="clear-character-button" onClick={this.clearForm}>Clear</button>
                    <button className="save-character-button" onClick={this.saveNewCharacter}>Save</button>
                </form>
            </div>
        )
    }
}

export default CreateCharacter;