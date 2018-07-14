//import APP from 'App';

import React, {Component} from 'react';
import {Text, View} from 'react-native';


class ChildComponent extends Component {

    render() {
        return (
          <View> 
            <Text >{this.props.content}</Text>
          </View>
        );

    } 

}

// function ChildComponent(props) {
//     return (
//       <View> 
//         <Text >{props.content}</Text>
//       </View>
//     );
// }
const ChildComponent2 = props => (<View> 
    <Text>{props.content}</Text>
    </View>);


export default ChildComponent;
export {ChildComponent2} ;

