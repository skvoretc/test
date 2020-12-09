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
    indent: 283.125,
    pianoButton: 0,
    half_tone: false,
  },
  {
    indent: 283.125,
    pianoButton: 1,
    half_tone: true,
  },
  {
    indent: 275.5,
    pianoButton: 2,
    half_tone: false,
  },
  {
    indent: 267.875,
    pianoButton: 3,
    half_tone: false,
  },
  {
    indent: 267.875,
    pianoButton: 4,
    half_tone: true,
  },
  {
    indent: 260.25,
    pianoButton: 5,
    half_tone: false,
  },
  {
    indent: 252.625,
    pianoButton: 7,
    half_tone: false,
  },
  {
    indent: 245,
    pianoButton: 8,
    half_tone: false,
  },
  {
    indent: 245,
    pianoButton: 9,
    half_tone: true,
  },
  {
    indent: 237.375,
    pianoButton: 10,
    half_tone: false,
  },
  {
    indent: 237.375,
    pianoButton: 11,
    half_tone: true,
  },
  {
    indent: 229.75,
    pianoButton: 12,
    half_tone: false,
  },
  {
    indent: 229.75,
    pianoButton: 13,
    half_tone: true,
  },
  {
    indent: 222.125,
    pianoButton: 14,
    half_tone: false,
  },
  {
    indent: 267.875,
    pianoButton: 15,
    half_tone: false,
  },
  {
    indent: 267.875,
    pianoButton: 16,
    half_tone: true,
  },
  {
    indent: 260.25,
    pianoButton: 17,
    half_tone: false,
  },
  {
    indent: 260.25,
    pianoButton: 18,
    half_tone: true,
  },
  {
    indent: 252.625,
    pianoButton: 19,
    half_tone: false,
  },
  {
    indent: 245,
    pianoButton: 20,
    half_tone: false,
  },
  {
    indent: 245,
    pianoButton: 21,
    half_tone: true,
  },
  {
    indent: 237.375,
    pianoButton: 22,
    half_tone: false,
  },
  {
    indent: 237.375,
    pianoButton: 23,
    half_tone: true,
  },
  {
    indent: 229.75,
    pianoButton: 24,
    half_tone: false,
  },
  {
    indent: 229.75,
    pianoButton: 25,
    half_tone: true,
  },
  {
    indent: 222.125,
    pianoButton: 26,
    half_tone: false,
  },
  {
    indent: 214.5,
    pianoButton: 27,
    half_tone: false,
  },
  {
    indent: 214.5,
    pianoButton: 28,
    half_tone: true,
  },
  {
    indent: 206.875,
    pianoButton: 29,
    half_tone: false,
  },
  {
    indent: 206.875,
    pianoButton: 30,
    half_tone: true,
  },
  {
    indent: 199.25,
    pianoButton: 31,
    half_tone: false,
  },
  {
    indent: 191.625,
    pianoButton: 32,
    half_tone: false,
  },
  {
    indent: 191.625,
    pianoButton: 33,
    half_tone: true,
  },
  {
    indent: 184,
    pianoButton: 34,
    half_tone: false,
  },
  {
    indent: 184,
    pianoButton: 35,
    half_tone: true,
  },
  {
    indent: 176.375,
    pianoButton: 36,
    half_tone: false,
  },
  {
    indent: 176.375,
    pianoButton: 37,
    half_tone: true,
  },
  {
    indent: 168.75,
    pianoButton: 38,
    half_tone: false,
  },
  {
    indent: 69.625,
    pianoButton: 39,
    half_tone: false,
  },
  {
    indent: 69.625,
    pianoButton: 40,
    half_tone: true,
  },
  {
    indent: 62,
    pianoButton: 41,
    half_tone: false,
  },
  {
    indent: 62,
    pianoButton: 42,
    half_tone: true,
  },
  {
    indent: 54.375,
    pianoButton: 43,
    half_tone: false,
  },
  {
    indent: 46.75,
    pianoButton: 44,
    half_tone: false,
  },
  {
    indent: 46.75,
    pianoButton: 45,
    half_tone: true,
  },
  {
    indent: 39.125,
    pianoButton: 46,
    half_tone: false,
  },
  {
    indent: 39.125,
    pianoButton: 47,
    half_tone: true,
  },
  {
    indent: 31.5,
    pianoButton: 48,
    half_tone: false,
  },
  {
    indent: 31.5,
    pianoButton: 49,
    half_tone: true,
  },
  {
    indent: 23.875,
    pianoButton: 50,
    half_tone: false,
  },
  {
    indent: 16.25,
    pianoButton: 51,
    half_tone: false,
  },
  {
    indent: 16.25,
    pianoButton: 52,
    half_tone: true,
  },
  {
    indent: 8.625,
    pianoButton: 53,
    half_tone: false,
  },
  {
    indent: 8.625,
    pianoButton: 54,
    half_tone: true,
  },
  {
    indent: 1,
    pianoButton: 55,
    half_tone: false,
  },
  {
    indent: -6.625,
    pianoButton: 56,
    half_tone: false,
  },
  {
    indent: -6.625,
    pianoButton: 57,
    half_tone: true,
  },
  {
    indent: -14.25,
    pianoButton: 58,
    half_tone: false,
  },
  {
    indent: -14.25,
    pianoButton: 59,
    half_tone: true,
  },
  {
    indent: -21.875,
    pianoButton: 60,
    half_tone: false,
  },
  {
    indent: -21.875,
    pianoButton: 61,
    half_tone: true,
  },
  {
    indent: -29.5,
    pianoButton: 62,
    half_tone: false,
  },
  {
    indent: 16.25,
    pianoButton: 63,
    half_tone: false,
  },
  {
    indent: 16.25,
    pianoButton: 64,
    half_tone: true,
  },
  {
    indent: 8.625,
    pianoButton: 65,
    half_tone: false,
  },
  {
    indent: 8.625,
    pianoButton: 66,
    half_tone: true,
  },
  {
    indent: 1,
    pianoButton: 67,
    half_tone: false,
  },
  {
    indent: -6.625,
    pianoButton: 68,
    half_tone: false,
  },
  {
    indent: -6.625,
    pianoButton: 69,
    half_tone: true,
  },
  {
    indent: -14.25,
    pianoButton: 70,
    half_tone: false,
  },
  {
    indent: -14.25,
    pianoButton: 71,
    half_tone: true,
  },
  {
    indent: -21.875,
    pianoButton: 72,
    half_tone: false,
  },
  {
    indent: -21.875,
    pianoButton: 73,
    half_tone: true,
  },
  {
    indent: -29.5,
    pianoButton: 74,
    half_tone: false,
  },
  {
    indent: -37.125,
    pianoButton: 75,
    half_tone: false,
  },
  {
    indent: -37.125,
    pianoButton: 76,
    half_tone: true,
  },
  {
    indent: -44.75,
    pianoButton: 77,
    half_tone: false,
  },
  {
    indent: -44.75,
    pianoButton: 78,
    half_tone: true,
  },
  {
    indent: -52.375,
    pianoButton: 79,
    half_tone: false,
  },
  {
    indent: -60,
    pianoButton: 80,
    half_tone: false,
  },
  {
    indent: -60,
    pianoButton: 81,
    half_tone: false,
  },
  {
    indent: -67.625,
    pianoButton: 82,
    half_tone: false,
  },
  {
    indent: -67.625,
    pianoButton: 83,
    half_tone: false,
  },
  {
    indent: -75.25,
    pianoButton: 84,
    half_tone: false,
  },
  {
    indent: -75.25,
    pianoButton: 85,
    half_tone: false,
  },
  {
    indent: -82.875,
    pianoButton: 86,
    half_tone: false,
  },
  {
    indent: -90.5,
    pianoButton: 87,
    half_tone: false,
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
      (lastindex = 0),
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
          {/*Создание необходимого количества строк */ console.log(Row)}
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
