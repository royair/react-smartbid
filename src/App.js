import React from 'react';

import { SideNav, StatusCards, GraphCard, MessagesCard, UserProjectCard, ToDoCard, TransactionsCard, } from '@comp';

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
            <div className="col-4">
              <MessagesCard />
            </div>

            <div className="col-8">
              <div className="row">
                <div className="col-6">
                  <UserProjectCard />
                </div>
                <div className="col-6">
                  <ToDoCard />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <TransactionsCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
