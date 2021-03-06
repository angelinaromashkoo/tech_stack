import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

// for android;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const {library, expanded} = this.props;
    const {textStyle} = styles;

    if (expanded) {
      return <Text style={textStyle}>{library.item.description}</Text>;
    }
  }
  render() {
    const {titleStyle} = styles;
    const {id, title} = this.props.library.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  textStyle: {
    flex: 1,
    marginLeft: 17,
    fontSize: 15,
  },
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);
