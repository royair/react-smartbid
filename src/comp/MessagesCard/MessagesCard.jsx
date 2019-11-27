import React from 'react';
import { Icon } from 'antd';

import { Card} from '@comp';

import './MessagesCard.scss';

export default function MessagesCard() {

  return (
    <Card className="messages-card">
      <Card.Header withActionButtons>
        Messages
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
            <h1 style={{ fontSize: 36 }}>New messages</h1>
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
