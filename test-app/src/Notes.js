import React, { Component } from "react";

var bas_width, scrip_width;
class object extends Component {
  render() {
    return (
      (bas_width = 0),
      (scrip_width = 0),
      //Переборка массива с нотами
      this.props.record.map((note, index) => {
        //Отображение нот басового ключа
        if (note.notecode <= 22) {
          bas_width += Number(this.props.indent) + 20;
          return (
            <div
              key={index}
              className={"note"}
              style={{ top: note.indent + "px", left: bas_width + "px" }}
            ></div>
          );
        }
        //Отображение нот скрипичного ключа
        else {
          scrip_width += Number(this.props.indent) + 20;
          return (
            <div
              key={index}
              className={"note"}
              style={{ top: note.indent + "px", left: scrip_width + "px" }}
            ></div>
          );
        }
      })
    );
  }
}

export default object;
