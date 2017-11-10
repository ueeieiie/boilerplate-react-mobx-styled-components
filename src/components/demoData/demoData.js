import React from 'react';

import { observer, inject } from 'mobx-react';

import DemoDataContainerStyle from './demoData.style';

@inject('store')
@observer
export default class DemoData extends React.Component {
    showDemoData = () => {
        const { demoData } = this.props.store;

        return demoData.map((num, index) => 
            <span className="dummie-data" key={index}> {num} </span>
        )
    }

    render(){
        return(
            <DemoDataContainerStyle>
                <h3 className="title">Dummie data from mobx:</h3>
                {this.showDemoData()} 
            </DemoDataContainerStyle>
        );
    }
}