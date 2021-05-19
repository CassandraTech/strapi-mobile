import React from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import CollectionType from './collectionType';
import SingleType from './singleType';

const ViewTables = props => {
  if (props.details.kind !== 'singleType') {
    return <CollectionType {...props} />;
  } else return <SingleType {...props} />;
};
export default ViewTables;
