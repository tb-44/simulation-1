import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Bin1 from '../bins/Bin1';
import Bin2 from '../bins/Bin2';
import Bin3 from '../bins/Bin3';
import Bin4 from '../bins/Bin4';
import Bin5 from '../bins/Bin5';


import './ShelfA.css';
import logo from '../shelfielogo.png';


export default class ShelfB extends Component {
    constructor() {
        super();
        this.state = {
            shelfB: {}
        }
    }

    render() {
        return (
            <div>
                <div className="shelf-a-header">
                    <div><Link to='/'><img src={logo} className="app-logo" alt='' /></Link>
                    </div>
                    <div className="shelf-name">
                    <h1>Shelf B</h1>
                    </div>
                </div>
                <div className="binsA">
                <Link to="/bins/B1" className='bin' >{Bin1} Bin 1</Link>
                <Link to="/bins/B2" className='bin' >{Bin2} Bin 2</Link>
                <Link to="/bins/B3" className='bin' >{Bin3}Bin 3</Link>
                <Link to="/bins/B4" className='bin' >{Bin4}Bin 4</Link>
                <Link to="/bins/B5" className='bin' >{Bin5}Bin 5</Link>

                </div>
            </div>
        )
    }
}