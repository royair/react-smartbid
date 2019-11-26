import React from 'react';
import Card from '../Card/Card';
import Label from '../Label/Label';
import { Icon } from 'antd';

import './StatusCards.scss';

export default function StatusCards() {
  return (
    <>
      <Card className="status-card">
        <Card.Header>
          <span>Income</span>
          <Label type="monthly">Monthly</Label>
        </Card.Header>
        <Card.Body>
          <div className="value">40,886,200</div>
          <footer>
            <span className="label">Total income</span>
            <span className="percentage">
                  98%
                  <Icon type="rise" />
                </span>
          </footer>
        </Card.Body>
      </Card>

      <Card className="status-card">
        <Card.Header>
          <span>Income</span>
          <Label type="monthly">Monthly</Label>
        </Card.Header>
        <Card.Body>
          <div className="value">40,886,200</div>
          <footer>
            <span className="label">Total income</span>
            <span className="percentage">
                  98%
                  <Icon type="rise" />
                </span>
          </footer>
        </Card.Body>
      </Card>

      <Card className="status-card">
        <Card.Header>
          <span>Income</span>
          <Label type="monthly">Monthly</Label>
        </Card.Header>
        <Card.Body>
          <div className="value">40,886,200</div>
          <footer>
            <span className="label">Total income</span>
            <span className="percentage">
                  98%
                  <Icon type="rise" />
                </span>
          </footer>
        </Card.Body>
      </Card>

      <Card className="status-card">
        <Card.Header>
          <span>Income</span>
          <Label type="monthly">Monthly</Label>
        </Card.Header>
        <Card.Body>
          <div className="value">40,886,200</div>
          <footer>
            <span className="label">Total income</span>
            <span className="percentage">
                  98%
                  <Icon type="rise" />
                </span>
          </footer>
        </Card.Body>
      </Card>
    </>
  );
}
