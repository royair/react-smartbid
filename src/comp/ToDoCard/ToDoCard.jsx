import React from 'react';
import { Icon } from 'antd';

import Card from '../Card/Card';

import Label from '../Label/Label';

import './ToDoCard.scss';

const ToDoCard = () => {
  return (
    <Card className="todo-card">
      <Card.Header withActionButtons>Small to do list</Card.Header>
      <Card.Body>
        <ul>
          <li>
            <input type="checkbox" />Lorem ipsum dolor sit amet.
          </li>
          <li>
            <input type="checkbox" /><span>Lorem ipsum dolor sit amet.</span></li>
          <li>
            <input type="checkbox" /><span>Lorem ipsum dolor sit amet.</span>
            <Label type="special" style={{ marginLeft: 10 }}><Icon type="clock-circle" /> <span>1 mins</span></Label></li>
          <li>
            <input type="checkbox" /><span>Lorem ipsum dolor sit amet.</span></li>
          <li>
            <input type="checkbox" /><span>Lorem ipsum dolor sit amet.</span></li>
          <li>
            <input type="checkbox" /><span>Lorem ipsum dolor sit amet.</span></li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default ToDoCard;
