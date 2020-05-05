import React, {Component} from 'react'
import {Radio} from "antd";

class MailFemale extends Component {

  choiceOptions = e => {

    const choice = e.target.value;
    this.props.choiceOptions(choice)
  };

  render () {

    return (
        <div>
          <Radio.Group
              defaultValue="male"
              buttonStyle="solid"
              onChange={this.choiceOptions}
          >
            <Radio.Button value="male">Дечак</Radio.Button>
            <Radio.Button value="female">Девојчица</Radio.Button>
          </Radio.Group>
        </div>
    )
  }
}

export default MailFemale
