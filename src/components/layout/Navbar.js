import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Affix, Button} from 'antd';
import {MenuOutlined} from '@ant-design/icons';
import Words from '../basic/Words'

const toggleSidebar = () => {
  document.getElementById('sidebar').classList.toggle('opened')
};

const Navbar = () => {

  const [top] = useState(0);

  return (
      <div>
        <Affix offsetTop={top}>
          <nav className="navbar">
            <Link className="navbar-brand" to="/">Предшколско</Link>
            <Button type="link" onClick={toggleSidebar}>
              <MenuOutlined style={{fontSize: '24px', color: '#fff'}}/>
            </Button>
            <Words/>
          </nav>
        </Affix>
      </div>
  )
};

export default Navbar
