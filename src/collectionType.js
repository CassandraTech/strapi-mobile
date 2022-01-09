import React from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {connect} from 'react-redux';

class CollectionType extends React.Component {
  state = {
    defaultShown: 10
  };
  componentDidMount() {
    this.setState({
      rows: this.props.collections || [],
    });
  }
  render() {
    const {collections} = this.props;
    const {layout} = this.props.details;
    return (
      <DataTable>
        <DataTable.Header>
          {layout &&
            layout.map((e, i) => (
              <DataTable.Title key={i}>{e}</DataTable.Title>
            ))}
        </DataTable.Header>
        {collections &&
          collections.slice(0,this.state.defaultShown).map((e, i) => (
            <DataTable.Row key={'A' + i}>
              {layout &&
                layout.map((e_key, i) => (
                  <DataTable.Cell key={'B' + i}>{e[e_key]}</DataTable.Cell>
                ))}
            </DataTable.Row>
          ))}
        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
    );
  }
}

const mapStateToProps = state => {
  //   console.log(state);
  return {
    collections: state.collections.data,
  };
};
// const mapDispatchToProps = {collection_get};
export default CollectionType;
