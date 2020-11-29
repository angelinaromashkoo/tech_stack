import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from '../components/ListItem';

class LibraryList extends Component {
  keyExtractor = (library) => library.id.toString();

  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    const {libraries} = this.props;

    return (
      <FlatList
        data={libraries}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
