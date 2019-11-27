import React from 'react';
import { Icon } from 'antd';

import { Card, Label } from '@comp';

import './StatusCards.scss';

export default function StatusCards() {
  return (
    <>
      <Card className="col-3 status-card">
        <Card.Header>
          <span>Income</span>
          <Label type="monthly">Monthly</Label>
        </Card.Header>
        <Card.Body>
          <div className="value">40,886,200</div>
          <footer>
            <span className="text-label">Total income</span>
            <span className="percentage">
                  98%
                  <Icon type="rise" />
                </span>
          </footer>
        </Card.Body>
      </Card>

      <Card className="col-3 status-card">
        <Card.Header>
          <span>Income</span>
          <Label type="monthly">Monthly</Label>
        </Card.Header>
        <Card.Body>
          <div className="value">40,886,200</div>
          <footer>
            <span className="text-label">Total income</span>
            <span className="percentage">
                  98%
                  <Icon type="rise" />
                </span>
          </footer>
        </Card.Body>
      </Card>

      <Card className="col-3 status-card">
        <Card.Header>
          <span>Income</span>
          <Label type="monthly">Monthly</Label>
        </Card.Header>
        <Card.Body>
          <div className="value">40,886,200</div>
          <footer>
            <span className="text-label">Total income</span>
            <span className="percentage">
                  98%
                  <Icon type="rise" />
                </span>
          </footer>
        </Card.Body>
      </Card>

      <Card className="col-3 status-card">
        <Card.Header>
          <span>Income</span>
          <Label type="monthly">Monthly</Label>
        </Card.Header>
        <Card.Body>
          <div className="value">40,886,200</div>
          <footer>
            <span className="text-label">Total income</span>
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
