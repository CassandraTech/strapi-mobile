import React from 'react';
import {Text, View} from 'react-native';

class ViewCollection extends React.Component {
  render() {
    return (
      <View>
        <Text>You have {this.props.route.params.ctype} subjects.</Text>
      </View>
    );
  }
}

export default ViewCollection;
