import React from 'react';
import { Icon } from 'antd';

import { Card, Progress } from '@comp';

import imgGraph from '@img/graph.png';

import './GraphCard.scss';

export default function GraphCard() {
  return (
    <Card className="graph-card">
      <Card.Header>
        <span>Income</span>
        <div className="action-buttons">
          <button className="selected">Today</button>
          <button>Monthly</button>
          <button>Annual</button>
        </div>
      </Card.Header>

      <Card.Body>
        <div className="left"><img src={imgGraph} alt="" /></div>
        <div className="right">
          <ul>
            <li>
              <div className="value">2,346</div>
              <div className="flex flex-space-between">
                <div className="text-label">Total orders in period</div>
                <div className="percentage-value">
                  62%
                  <Icon type="rise" />
                </div>
              </div>
              <Progress percent={62} />
            </li>

            <li>
              <div className="value">2,346</div>
              <div className="flex flex-space-between">
                <div className="text-label">Total orders in period</div>
                <div className="percentage-value">
                  99%
                  <Icon type="rise" />
                </div>
              </div>
              <Progress percent={99} />
            </li>

            <li>
              <div className="value">2,346</div>
              <div className="flex flex-space-between">
                <div className="text-label">Total orders in period</div>
                <div className="percentage-value">
                  33%
                  <Icon type="fall" />
                </div>
              </div>
              <Progress percent={33} />
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}
