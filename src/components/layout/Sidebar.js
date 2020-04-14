import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd'
import {AppstoreOutlined, FontColorsOutlined, BgColorsOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;

class Sidebar extends Component {

  handleClick = e => {
    console.log('click ', e);
  };

  render() {

    return (
        <div>
          <Menu
              id='sidebar'
              onClick={this.handleClick}
              defaultSelectedKeys={['letters']}
              defaultOpenKeys={['alpahabet']}
              mode="inline"
              className='sidebar'
          >
            <SubMenu
                key="alpahabet"
                title={
                  <span>
              <FontColorsOutlined />
              <span>Слова</span>
            </span>
                }
            >
              <Menu.Item key="letters"><Link to="/azbuka">Словарица</Link></Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                  <span>
              <AppstoreOutlined/>
              <span>Бројеви</span>
            </span>
                }
            >
              <Menu.Item key="5">Број</Menu.Item>
              <Menu.Item key="6">Сабирање</Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub4"
                title={
                  <span>
              <BgColorsOutlined/>
              <span>Боје</span>
            </span>
                }
            >
              <Menu.Item key="9">Бојанка</Menu.Item>
              <Menu.Item key="10">Кажи боју</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
    )
  }
}

export default Sidebar
