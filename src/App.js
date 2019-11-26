import React from 'react';
import { Icon } from 'antd';

import SideNav from './comp/SideNav/SideNav';
import StatusCards from './comp/StatusCards/StatusCards';
import GraphCard from './comp/GraphCard/GraphCard';
import MessagesCard from './comp/MessagesCard/MessagesCard';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="left">
        <SideNav />
      </div>
      <div className="right">
        <div className="main-content">

          <div className="row status-cards-container">
            <StatusCards />
          </div>

          <div className="row">
            <GraphCard />
          </div>

          <div className="row">
            <div style={{ width: '33%' }}>
              <MessagesCard />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
