import React, { Component } from 'react';
import Exhibit from './Exhibit';
import axios from 'axios';
import './GetIP.css';

class GetIP extends Component {

    componentDidMount() {    
        axios.get("http://api.ipify.org/?format=json")
        .then((response) => console.log(response.data))
    }
    render() {
        this.componentDidMount();
        return (
            <div>
                
            </div>
        );
    }
}

export default Exhibit;
