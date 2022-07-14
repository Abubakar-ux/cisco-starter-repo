import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import GetIP from './GetIP';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Ahmed's Sextant" />
                <Exhibit name="I'm an exhibit!"></Exhibit>
                <Exhibit name="I'm also an exhibit!"></Exhibit>
                <Exhibit name="Don't forget about me, I'm an exhibit too!"></Exhibit>
                <GetIP/>
            </div>
        );
    }
}

export default App;
