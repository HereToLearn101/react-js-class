import React from 'react';

class Main extends React.Component {
    constructor() {
        // Always required in the constructor by default
        super();
    }

    render() {
        return (
            <div className="main">
                <h2>Stock Data For Today</h2>
                <ul>
                    <li>Microsoft: {this.props.microsoftValue}</li>
                    <li>Twitter: {this.props.twitterValue}</li>
                    <li>Amazon: {this.props.amazonValue}</li>
                </ul>

                <div>
                    <button onClick={this.props.increase}>Increase Stock Values</button>
                    <button onClick={this.props.decrease}>Decrease Stock Values</button>
                </div>
            </div>
        );
    }
}

export default Main;