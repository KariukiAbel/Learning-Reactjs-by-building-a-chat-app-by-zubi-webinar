import React, { PureComponent } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export default class Container extends PureComponent {
    render() {
        return <div > < p > Chat app < /p ><div><LeftPanel/ > < RightPanel / > < /div > < /div > ;
    }
}