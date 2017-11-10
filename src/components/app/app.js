// React's
import React from 'react';

// Mobx-react's
import { observer, inject } from 'mobx-react'

//Styles
import AppStyle from './app.style';

// Components
import DemoData from '../demoData/demoData';

// App Component
@inject('store')
@observer
export default class App extends React.Component {
    render = () => {
        return(
            <AppStyle>
                <h2>Hello Worlds!</h2>
                <DemoData />
            </AppStyle>
        );
    }
}