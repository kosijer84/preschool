import React, {Component} from "react";
import {Button} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import Letter from "../basic/Letter";
import Words from "../basic/Words"
import MaleFemale from "../basic/MailFemale"
import Plain from "../../img/airplane.jpg";
import Squirrel from "../../img/veverica.jpg";
import Pirate from "../../img/gusar.jpg";
import Bicycle from "../../img/bicikl.jpg";
import Dino from "../../img/dinosaur.jpg";
import Pupil from "../../img/pupil.jpg";
import Nail from "../../img/nails.jpg";
import Frog from "../../img/zaba.jpg";
import Rabbit from "../../img/rabbit.jpg";
import Needle from "../../img/needle.png";
import Hedgehog from "../../img/hedgehog.png";
import Key from "../../img/key.png";
import Butterfly from "../../img/butterfly.jpg";
import Swing from "../../img/swing.jpg";
import Cat from "../../img/cat.jpg";
import Glasses from "../../img/glasses.jpg";
import Nose from "../../img/dogs-nose.png";
import Sheep from "../../img/sheep.jpg";
import Snail from "../../img/snail.jpg";
import Fish from "../../img/fish.jpg";
import Sun from "../../img/sun.jpg";
import Tractor from "../../img/tractor.jpg";
import Turkey from "../../img/turkey.jpg";
import Hook from "../../img/hook.jpg";
import HairDryer from "../../img/hair-dryer.jpg";
import Dress from "../../img/dress.jpg";
import Flower from "../../img/flower.jpg";
import Sweater from "../../img/sweater.jpg";
import Comb from "../../img/comb.jpg";
import Hat from "../../img/hat.jpg";
import Space from "../../img/space.png";
import Comma from "../../img/comma.png";
import Success from "../../img/success.gif";
import SuccessGirl from "../../img/frozen.gif";

var letterID = 0;

class Alphabet extends Component {
  state = {
    word: [],
    successMatch: false,
    maleFemale: 'male'
  };

  alphabetPairs = [
    {
      id: 0,
      letter: "а",
      img: Plain,
    },
    {
      id: 1,
      letter: "б",
      img: Bicycle,
    },
    {
      id: 2,
      letter: "в",
      img: Squirrel,
    },
    {
      id: 3,
      letter: "г",
      img: Pirate,
    },
    {
      id: 4,
      letter: "д",
      img: Dino,
    },
    {
      id: 5,
      letter: "ђ",
      img: Pupil,
    },
    {
      id: 6,
      letter: "е",
      img: Nail,
    },
    {
      id: 7,
      letter: "ж",
      img: Frog,
    },
    {
      id: 8,
      letter: "з",
      img: Rabbit,
    },
    {
      id: 9,
      letter: "и",
      img: Needle,
    },
    {
      id: 10,
      letter: "ј",
      img: Hedgehog,
    },
    {
      id: 11,
      letter: "к",
      img: Key,
    },
    {
      id: 12,
      letter: "л",
      img: Butterfly,
    },
    {
      id: 13,
      letter: "љ",
      img: Swing,
    },
    {
      id: 14,
      letter: "м",
      img: Cat,
    },
    {
      id: 15,
      letter: "н",
      img: Glasses,
    },
    {
      id: 16,
      letter: "њ",
      img: Nose,
    },
    {
      id: 17,
      letter: "о",
      img: Sheep,
    },
    {
      id: 18,
      letter: "п",
      img: Snail,
    },
    {
      id: 19,
      letter: "р",
      img: Fish,
    },
    {
      id: 20,
      letter: "с",
      img: Sun,
    },
    {
      id: 21,
      letter: "т",
      img: Tractor,
    },
    {
      id: 22,
      letter: "ћ",
      img: Turkey,
    },
    {
      id: 23,
      letter: "у",
      img: Hook,
    },
    {
      id: 24,
      letter: "ф",
      img: HairDryer,
    },
    {
      id: 25,
      letter: "х",
      img: Dress,
    },
    {
      id: 26,
      letter: "ц",
      img: Flower,
    },
    {
      id: 27,
      letter: "ч",
      img: Comb,
    },
    {
      id: 28,
      letter: "џ",
      img: Sweater,
    },
    {
      id: 29,
      letter: "ш",
      img: Hat,
    },
    {
      id: 30,
      letter: " ",
      img: Space,
    },
    {
      id: 31,
      letter: ",",
      img: Comma,
    },
  ];

  addLetter = e => {
    letterID++;

    const newWordState = [
      ...this.state.word,
      {
        letter: e.target.value,
        letterID: letterID
      }
    ];

    this.checkWordsAndUpdateState(newWordState);
  };

  deleteLetter = () => {
    const newWordState = this.state.word.slice(0, -1);

    this.checkWordsAndUpdateState(newWordState);
  };

  checkWordsAndUpdateState = (newWordState) => {
    const originalWord = localStorage.getItem("word");
    const finishedWord = newWordState.map(({letter}) => letter).join("");

    if (finishedWord === originalWord) {
      this.setState({
        successMatch: true
      });
    } else {
      this.setState({
        successMatch: false,
        word: newWordState
      });
    }

    this.setState({
      successMatch: finishedWord === originalWord,
      word: newWordState
    });
  };

  maleFemaleOption = choice => {

    this.setState({
      maleFemale: choice
    });
  };

  render() {

    return (
        <div className="main-frame">
          <div className="options-frame">
            <MaleFemale choiceOptions={this.maleFemaleOption}/>
            <Words/>
          </div>
          <div className="letter-options-sticky">
            <div
                className={
                  this.state.word.length ? "letter-options" : "letter-empty"
                }
            >
              <Letter myWord={this.state.word}/>

              {this.state.word.length ? (
                  <Button
                      type="default"
                      icon={<ArrowLeftOutlined/>}
                      onClick={this.deleteLetter}
                  >
                    Бриши уназад
                  </Button>
              ) : (
                  <p>Кликом на слова направи своју реч</p>
              )}
            </div>
          </div>
          <div className="letter-line">
            {this.alphabetPairs.map((pair) => {
              return (
                  <div key={pair.id} className="letter-frame">
                    <img src={pair.img} alt=""/>
                    <span>{pair.letter}</span>
                    <Button
                        type="link"
                        className="btn-link"
                        onClick={this.addLetter}
                        value={pair.letter}
                    >
                    </Button>
                  </div>
              );
            })}
          </div>
          {this.state.successMatch === true && this.state.maleFemale === 'male' && (
              <div className="success-message">
                <h2>СУПЕР!!! Задата реч је успешно састављена.</h2>
                <img src={Success} alt="Cars"/>
              </div>
          )}
          {this.state.successMatch === true && this.state.maleFemale === 'female' && (
              <div className="success-message">
                <h2>СУПЕР!!! Задата реч је успешно састављена.</h2>
                <img src={SuccessGirl} alt="Frozen"/>
              </div>
          )}
        </div>
    );
  }
}

export default Alphabet;

