import React from 'react';

type State = { count: number }

class Hello extends React.Component<{}, State> {

    state: State = {
        count: 0
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={() => this.setState({count: this.state.count + 1})}>点我+1</button>
            </div>
        );
    }
}

export default Hello;
