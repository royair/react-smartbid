import React from 'react';
import { Icon } from 'antd';

import Card from '../Card/Card';

import './MessagesCard.scss';

export default function MessagesCard() {

  return (
    <Card className="messages-card">
      <Card.Header>
        Messages
        <div className="action-buttons">
          <Icon type="up" />
          <Icon type="tool" />
          <Icon type="setting" />
        </div>
      </Card.Header>
      <Card.Body>
        <section className="notifications">
          <div className="flex" style={{ marginBottom: 10 }}>
            <Icon type="mail" style={{
              fontSize: 30,
              marginRight: 15,
              position: 'relative',
              top: 2
            }} />
            <h1 style={{ fontSize: 36 }}>New Messages</h1>
          </div>
          <div>You have 22 new messages and 16 waiting in draft folder</div>
        </section>
        <ul>
          <li>
            <header className="flex flex-space-between">
              <span className="name">John Doe</span>
              <span className="time-ago">5m ago</span>
            </header>
            <section>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, accusantium deleniti ducimus eos esse eum fuga
                impedit?</p>
            </section>
            <footer>
              <span className="date">Yesterday 8:48 PM ⋅ 10.06.2014</span>
            </footer>
          </li>
          <li>
            <header className="flex flex-space-between">
              <span className="name">John Doe</span>
              <span className="time-ago">5m ago</span>
            </header>
            <section>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, accusantium deleniti ducimus eos esse eum fuga
                impedit?</p>
            </section>
            <footer>
              <span className="date">Yesterday 8:48 PM ⋅ 10.06.2014</span>
            </footer>
          </li>
          <li>
            <header className="flex flex-space-between">
              <span className="name">John Doe</span>
              <span className="time-ago">5m ago</span>
            </header>
            <section>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, accusantium deleniti ducimus eos esse eum fuga
                impedit?</p>
            </section>
            <footer>
              <span className="date">Yesterday 8:48 PM ⋅ 10.06.2014</span>
            </footer>
          </li>
          <li>
            <header className="flex flex-space-between">
              <span className="name">John Doe</span>
              <span className="time-ago">5m ago</span>
            </header>
            <section>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, accusantium deleniti ducimus eos esse eum fuga
                impedit?</p>
            </section>
            <footer>
              <span className="date">Yesterday 8:48 PM ⋅ 10.06.2014</span>
            </footer>
          </li>
          <li>
            <header className="flex flex-space-between">
              <span className="name">John Doe</span>
              <span className="time-ago">5m ago</span>
            </header>
            <section>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, accusantium deleniti ducimus eos esse eum fuga
                impedit?</p>
            </section>
            <footer>
              <span className="date">Yesterday 8:48 PM ⋅ 10.06.2014</span>
            </footer>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
}
