import React, { Component } from "react";
import Notes from "./Notes";

class Stave extends Component {
  render() {
    return (
      // нотный стан
      <div className={"stave"}>
        <div className={"staveClass"} />
        <div className={"staveClass"} />
        <div className={"keys"} />

        <Notes
          record={this.props.record}
          width={this.props.width}
          height={this.props.height}
          indent={this.props.indent}
        />
      </div>
    );
  }
}

export default Stave;
