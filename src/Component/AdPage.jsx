import React, { Component } from 'react';
import { renderMatches } from 'react-router-dom';
import Ad from './Ad'

class AdPage extends Component {
    constructor(props) {
        super(props);
        this.state = {showAd: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showAd: !state.showAd
        }));
    }

    render() {
        return (
            <div className='adContainer'>
                <Ad adState={this.state.showAd} />
                <button onClick={this.handleToggleClick}>
                {this.state.showAd ? '광고 안 보기' : '광고 보기'}
                </button>
            </div>
        );
    }
}

export default AdPage;