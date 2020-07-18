import React, { PureComponent } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

import './App.css';

export default class Container extends PureComponent {
    render() {
        return <div > < p > Chat app < /p ><div className="wrapper"><LeftPanel/ > < RightPanel / > < /div > < /div > ;
    }
}