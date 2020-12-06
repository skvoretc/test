import React, { Component } from "react";
import Stave from "./Stave.js";
import "./Object.css";
var Row = [];
var n = 0;
var scrip_number = 0;
var bass_number = 0;
var data = [];
var music;
var output;
var lastindex = 0;
var number_of_elements_in_row = 0;
const piano = [
  {
    notecode: 0,
    indent: 283.125,
    pianoButton: 0,
  },
  {
    notecode: 1,
    indent: 275.5,
    pianoButton: 2,
  },
  {
    notecode: 2,
    indent: 267.875,
    pianoButton: 3,
  },
  {
    notecode: 3,
    indent: 260.25,
    pianoButton: 5,
  },
  {
    notecode: 4,
    indent: 252.625,
    pianoButton: 7,
  },
  {
    notecode: 5,
    indent: 245,
    pianoButton: 8,
  },
  {
    notecode: 6,
    indent: 237.375,
    pianoButton: 10,
  },
  {
    notecode: 7,
    indent: 229.75,
    pianoButton: 12,
  },
  {
    notecode: 8,
    indent: 222.125,
    pianoButton: 14,
  },
  {
    notecode: 9,
    indent: 267.875,
    pianoButton: 15,
  },
  {
    notecode: 10,
    indent: 260.25,
    pianoButton: 17,
  },
  {
    notecode: 11,
    indent: 252.625,
    pianoButton: 19,
  },
  {
    notecode: 12,
    indent: 245,
    pianoButton: 20,
  },
  {
    notecode: 13,
    indent: 237.375,
    pianoButton: 22,
  },
  {
    notecode: 14,
    indent: 229.75,
    pianoButton: 24,
  },
  {
    notecode: 15,
    indent: 222.125,
    pianoButton: 26,
  },
  {
    notecode: 16,
    indent: 214.5,
    pianoButton: 27,
  },
  {
    notecode: 17,
    indent: 206.875,
    pianoButton: 29,
  },
  {
    notecode: 18,
    indent: 199.25,
    pianoButton: 31,
  },
  {
    notecode: 19,
    indent: 191.625,
    pianoButton: 32,
  },
  {
    notecode: 20,
    indent: 184,
    pianoButton: 34,
  },
  {
    notecode: 21,
    indent: 176.375,
    pianoButton: 36,
  },
  {
    notecode: 22,
    indent: 168.75,
    pianoButton: 38,
  },
  {
    notecode: 23,
    indent: 62,
    pianoButton: 39,
  },
  {
    notecode: 24,
    indent: 54.375,
    pianoButton: 41,
  },
  {
    notecode: 25,
    indent: 46.75,
    pianoButton: 43,
  },
  {
    notecode: 26,
    indent: 39.125,
    pianoButton: 44,
  },
  {
    notecode: 27,
    indent: 31.5,
    pianoButton: 46,
  },
  {
    notecode: 28,
    indent: 23.875,
    pianoButton: 48,
  },
  {
    notecode: 29,
    indent: 16.25,
    pianoButton: 50,
  },
  {
    notecode: 30,
    indent: 8.625,
    pianoButton: 51,
  },
  {
    notecode: 31,
    indent: 1,
    pianoButton: 53,
  },
  {
    notecode: 32,
    indent: -6.625,
    pianoButton: 55,
  },
  {
    notecode: 33,
    indent: -14.25,
    pianoButton: 56,
  },
  {
    notecode: 34,
    indent: -21.875,
    pianoButton: 58,
  },
  {
    notecode: 35,
    indent: -29.5,
    pianoButton: 60,
  },
  {
    notecode: 36,
    indent: -37.125,
    pianoButton: 62,
  },
  {
    notecode: 37,
    indent: 16.25,
    pianoButton: 63,
  },
  {
    notecode: 38,
    indent: 8.625,
    pianoButton: 65,
  },
  {
    notecode: 39,
    indent: 1,
    pianoButton: 67,
  },
  {
    notecode: 40,
    indent: -6.625,
    pianoButton: 68,
  },
  {
    notecode: 41,
    indent: -14.25,
    pianoButton: 70,
  },
  {
    notecode: 42,
    indent: -21.875,
    pianoButton: 72,
  },
  {
    notecode: 43,
    indent: -29.5,
    pianoButton: 74,
  },
  {
    notecode: 44,
    indent: -37.125,
    pianoButton: 75,
  },
  {
    notecode: 45,
    indent: -44.75,
    pianoButton: 77,
  },
  {
    notecode: 46,
    indent: -52.375,
    pianoButton: 79,
  },
  {
    notecode: 47,
    indent: -60,
    pianoButton: 80,
  },
  {
    notecode: 48,
    indent: -67.625,
    pianoButton: 82,
  },
  {
    notecode: 49,
    indent: -75.25,
    pianoButton: 84,
  },
  {
    notecode: 50,
    indent: -82.875,
    pianoButton: 86,
  },
  {
    notecode: 51,
    indent: -90.5,
    pianoButton: 87,
  },
];
class object extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width_between: 20,
      width_between_submit: 20,
    };
    this.SetWidth = this.SetWidth.bind(this);
  }

  SetWidth(event) {
    this.setState({
      width_between: event.target.value,
    });
  }
  SetWidthSubmit(event) {
    event.preventDefault();
    this.setState({
      width_between_submit: this.state.width_between,
    });
  }

  render() {
    return (
      (music = this.props.music.slice(0)),
      music.sort(function (a, b) {
        return a.start - b.start;
      }),
      console.log(music, "sorted"),
      (Row = []),
      (n = 0),
      (number_of_elements_in_row = 0),
      //Вычисление количества нот в одной строке
      (number_of_elements_in_row = Math.floor(
        (this.props.width - 20) / (20 + Number(this.state.width_between_submit))
      )),
      lastindex = 0,
      //Переборка изначального массива
      this.props.music.map((item, index) => {
        output = filterBy(piano, "pianoButton", item.notebutton);
        
        //Проверка на то белая это клавиша или нет и заполнение массива по строкам
        if (output.length !== 0) {
          // Проверка для последней строки
          if (index + 1 === this.props.music.length) {
            if (output[0].notecode < 22) {
              data[index - lastindex] = output[0];
            } else {
              data[index - lastindex] = output[0];
            }

            scrip_number = 0;
            bass_number = 0;
            Row[n] = data;
            data = [];

            n++;

            lastindex = index + 1;
          }
          // Проверка для всех строк кроме последней
          if (
            scrip_number < number_of_elements_in_row &&
            bass_number < number_of_elements_in_row
          ) {
            if (output[0].notecode < 22) {
              bass_number++;
              data[index - lastindex] = output[0];
            } else {
              scrip_number++;

              data[index - lastindex] = output[0];
            }
          } else {
            scrip_number = 0;
            bass_number = 0;
            Row[n] = data;
            data = [];
            n++;

            lastindex = index + 1;
          }
        }
      }),
      (
        <div
          className={"object"}
          style={{ width: this.props.width, height: this.props.height }}
        >
          {/* Изменение расстояние между нотами*/}
          <form className={"input"} onSubmit={this.SetWidthSubmit.bind(this)}>
            <input value={this.state.width_between} onChange={this.SetWidth} />
            <button type={"submit"}>Изменить</button>
          </form>
          {/*Создание необходимого количества строк */ }
          {Row.map((item, index) => (
            <Stave
              key={index}
              record={item}
              width={this.props.width}
              height={this.props.height}
              indent={this.state.width_between_submit}
            />
          ))}
        </div>
      )
    );
  }
}
// Функция выборки белых клавиш из общего нотного массива
function filterBy(data, field, value) {
  return data.filter((item) => item[field] === value);
}


export default object;
