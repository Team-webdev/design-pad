import React from "react";
import DesignBoard from "./DesignBoard";
import PadInput from "./PadInput";
import "../css/DesignContainer.css";

class DesignContainer extends React.Component {
  state = { editing: false };
  resetEditState = () => {
    this.setState({
      reseting: "" 
  })
  };

  updateEditState = () => {
    this.setState(props => ({
      editing: !props.editing
    }));
  };

  render() {
    const btnClass = this.state.editing ? "editButtonActive" : "editButton";
    const btnClassReset = this.state.reseting ? "resetButtonActive" : "resetButton";
    const reseting = this.state.reseting;
    const editing = this.state.editing;
    return (
      <div>
        <div>
          <h1>Design Pad</h1>
          <button> className = {btnClassReset} onClick = {this.resetEditState} 
          Clear 
          </button>
          <button className={btnClass} onClick={this.updateEditState}>
            Edit
          </button>
        </div>

        <PadInput editing={editing} />
        <DesignBoard />
      </div>
    );
  }
}

export default DesignContainer;