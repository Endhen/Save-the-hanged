import React, { Component } from 'react';

import Key from './Key'
import WordBoard from './WordBoard'

import './App.css'

const WORD_COLLECTION = ['Souris', 'Table', 'Shampoo']

class App extends Component {
    state = {
        attempts: 0,
        trials: 10,
        word: this.randomPick(WORD_COLLECTION).toUpperCase().split(''),
        letterUsed: [],
        letterDiscovered: []
    }

    randomPick(wordSet) {
        return wordSet[0]
    }

    hasBeenUsed(index) {
        return this.state.letterUsed.includes(index)
    }

    // arrow func for autobinding
    compare = letter => {
        let {word, letterDiscovered, letterUsed} = this.state
        let matchedLetter = word.find(element => element === letter)

        if (this.hasBeenUsed(letter)) {
            console.log('letter already used !')
            return
        } else {
            if (matchedLetter === undefined) {
                console.log('Miss !')
            } else {
                console.log('Found !', matchedLetter)
                letterDiscovered.push(letter)
            }
            letterUsed.push(letter)
        }

        this.isGameOver(letterDiscovered, letterUsed)
    }

    isGameOver(letterDiscovered, letterUsed) {
        let {attempts, trials} = this.state
        attempts += 1

        if (this.isWordDiscovered(letterDiscovered)) {
            console.log('You Win')
        } else if (attempts === trials) {
            console.log('Game Over')
        }

        this.setState({
            attempts: attempts,
            letterUsed: letterUsed,
            letterDiscovered: letterDiscovered
        })
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

    render() {
        const ALPHABET = 'AZERTYUIOPQSDFGHJKLMWXCVBN'.split('')
        let {word, letterDiscovered} = this.state
        return (
            <div className="game">
                <WordBoard word={word} letterDiscovered={letterDiscovered}/>
                <div className="keyboard">
                    {ALPHABET.map((letter) => (
                        <Key 
                            letter={letter} 
                            key={letter}
                            used={this.hasBeenUsed(letter)} 
                            compare={this.compare}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default App;
