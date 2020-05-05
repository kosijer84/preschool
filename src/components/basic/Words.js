import React, {Component} from 'react'
import {Button, Input, Modal, Tooltip} from 'antd'
import {PlusOutlined} from "@ant-design/icons";

class Words extends Component {

  state = {
    visible: false,
    addedWords: ''
  };

  addWordOpenModal = () => {

    this.setState({
      visible: true
    })
  };

  getWord = e => {
    let wordValue = e.target.value.toLowerCase();

    this.setState({
      addedWords: wordValue
    });
  };

  handleOkAddWord = () => {
    const wordFromState = this.state.addedWords;
    localStorage.setItem('word', wordFromState);

    this.setState({
      visible: false,
    });
  };

  handleCancelAddWord = () => {

    this.setState({
      visible: false,
    });
  };

  render() {

    return (
        <div className="words-add">
          <Tooltip placement="left" title="Додајте реч коју дете треба исписати.">
            <Button type="primary" icon={<PlusOutlined/>} onClick={this.addWordOpenModal}>
              Задаци
            </Button>
          </Tooltip>
          <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOkAddWord}
              onCancel={this.handleCancelAddWord}
          >
            <Input id="addWord" placeholder="Додај реч" onChange={this.getWord}/>
            <p>Напомена: Задата реч мора бити написана ћирилицом.</p>
            <p>Предлог речи: Стефан, Вук, Мама, Тата, Баба, Деда, Муњевити</p>
            <p>
              <small><b>пс ускоро ће предлози речи бити на чекирање.</b></small>
            </p>
          </Modal>
        </div>
    )
  }
}

export default Words
