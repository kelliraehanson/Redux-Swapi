import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters();
    // call our action
  }

  render() {
    if (this.props.fetching) {
      return <p>Loading Star Wars Characters...</p>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return{
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  // null /* mapStateToProps replaces null here */,
  {
    getCharacters
    /* action creators go here */
  }
)(CharacterListView);
