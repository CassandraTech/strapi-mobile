import dayjs from 'dayjs';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Surface} from 'react-native-paper';
import {connect} from 'react-redux';
import {collection_get} from './redux/actions/collections';

const SingleType = props => {
  useEffect(() => {
    props.collection_get(props.details.key.split('.')[1]);
  }, [props.details.key]);
  // const {created_at, updated_at, ...rest} = props.collections;
  // console.log(created_at,updated_at)
  return (
    <View>
      <Surface>
        <Text>Created at</Text>
        <Text>Updated at</Text>
      </Surface>
    </View>
  );
};
const mapStateToProps = state => {
  //   console.log(state);
  return {
    collections: state.collections.data,
  };
};
const mapDispatchToProps = {collection_get};
export default connect(mapStateToProps, mapDispatchToProps)(SingleType);
