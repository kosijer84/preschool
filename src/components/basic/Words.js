import React, {Component} from 'react'
import {Button, Modal, Tooltip, Input} from 'antd'
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
    let wordValue = e.target.value;

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
            <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={this.addWordOpenModal}/>
          </Tooltip>
          <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOkAddWord}
              onCancel={this.handleCancelAddWord}
          >
            <Input id="addWord" placeholder="Додај реч" onChange={this.getWord}/>

          </Modal>
        </div>
    )
  }
}

export default Words
