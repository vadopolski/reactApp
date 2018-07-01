import React from 'react';

const Item = ({item}) => <li>{item.value}</li>;
const List = ({values}) => <ul>{values.map(item => <Item item={item}/>)}</ul>

class App_2 extends React.Component {
    render() {
        return (
            <List values={this.props.values}/>
        );
    }
}

export default App_2;