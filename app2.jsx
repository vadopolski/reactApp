import React from 'react';

//var items = [{value:2}, {value:3}, {value:6}];
const Item = ({item}) => <li>{item.value}</li>;
const List = ({values}) => <ul>{values.map(item => <Item item={item}/>)}</ul>

// function List(props) {
//     return(
//         <ul>
//             {props.values.map(item=><li>{item.value}</li>)}
//         </ul>
//
//     )
// }

class App_2 extends React.Component {
    render() {
        return (
            <List values={this.props.values}/>
        );
    }
}

export default App_2;