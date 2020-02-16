import React, { Component } from 'react';

import KeyBoard from './KeyBoard'
import WordBoard from './WordBoard'
import InfoBar from './InfoBar'
import MessageBox from './MessageBox'
import Hanged from './Hanged'

import './App.css'

const WORD_COLLECTION = [
    'SOURIS', 
    'TABLE', 
    'ORANGE',
    'RATELIER',
    'AVION',
    'VACANCIER',
    'CIDRE',
    'SPIRALE',
    'PORTE',
    'GATEAU',
    'VIRAGE',
    'RAVIOLIS',
    'KARMA',
]
const MARTYRS = [
    "Jim",
    "John Doe",
    "Richard Roe",
    "Mr. Smith",
    "Mr Duran"
]

class App extends Component {
    constructor() {
        super()
        this.state = this.getInitalState();
    }

    getInitalState() {
        return {
            attempts: 0,
            trials: 10,
            word: this.randomPick(WORD_COLLECTION),
            martyr: this.randomPick(MARTYRS),
            letterUsed: [],
            letterDiscovered: [],
            message: 'Let\'s begin !',
            over: false
        }
    }

    randomPick(wordSet) {
        let number = Math.floor((Math.random() * wordSet.length));
        return wordSet[number].split('')
    }

    // auto binding
    hasBeenUsed = index => {
        return this.state.letterUsed.includes(index)
    }

    // arrow func for autobinding
    compare = letter => {
        let {word, letterDiscovered, letterUsed, message, over} = this.state
        let matchedLetter = word.find(element => element === letter)
        
        if (!over) {
            if (this.hasBeenUsed(letter)) {
                this.setState({message: 'Letter already used !'})
                return
            } else {
                if (matchedLetter === undefined) {
                    message = 'Miss !'
                } else {
                    message = 'Found ! ' + matchedLetter
                    letterDiscovered.push(letter)
                }
                letterUsed.push(letter)
            }
    
            this.isGameOver(letterDiscovered, letterUsed, message)
        }
    }

    isGameOver = (letterDiscovered, letterUsed, message = '') => {
        let {attempts, trials, word, martyr} = this.state

        if (this.isWordDiscovered(letterDiscovered)) {
            this.setState(
                {message: `You saved ${martyr.join('')} ! (for now)`, 
                over: true, 
                attempts: attempts})
        } else if (attempts === trials-1) {
            message = 'Game Over'
            this.setState(
                {message: `RIP ${martyr.join('')} ! The word was ${word.join('')}`, 
                over: true, 
                attempts: 10})
            return true
        } else {
            attempts = letterUsed.length
            this.setState({
                attempts: attempts,
                letterUsed: letterUsed,
                letterDiscovered: letterDiscovered,
                message: message,
            })
            return false
        }
    }

    isWordDiscovered(letterDiscovered) {
        let word = this.state.word
        let discovered = []

        word.forEach(letter => {
            if(letterDiscovered.includes(letter)) {
                discovered.push(true)
            } else {
                discovered.push(false)
            }
        })

        return !(discovered.includes(false)||discovered.length === 0)
    }

    reset = () => {
        this.setState( this.getInitalState())
    }

    render() {
        let {word, letterDiscovered, trials, attempts, message, over} = this.state
        return (
            <div className="game">
                <InfoBar trials={trials} attempts={attempts} reset={this.reset} />
                <Hanged attempts={attempts}/>
                <WordBoard word={word} letterDiscovered={letterDiscovered} />
                <MessageBox message={message}/>
                {
                    over?
                        <div className="gameover">
                            <button onClick={this.reset}>Restart Party</button>
                        </div>:
                        <KeyBoard compare={this.compare} hasBeenUsed={this.hasBeenUsed} />
                }   
            </div>
        )
    }
}

export default App;
