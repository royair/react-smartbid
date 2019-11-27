import React from 'react';

import { Card, Label } from '@comp';

import './TransactionsCard.scss';

import imgMap from '@img/map.png';

const TransactionsCard = () => {
  return (
    <Card className="transactions-card">
      <Card.Header withActionButtons>
        Transactions worldwide
      </Card.Header>
      <Card.Body>
        <div className="row" style={{ marginTop: 0 }}>
          <div className="col-6">
            <table>
              <thead>
                <tr>
                  <td>No.</td>
                  <td>Transactions</td>
                  <td>Date</td>
                  <td>Amount</td>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6].map((idx) => <TR key={idx} />)}
              </tbody>
            </table>
          </div>
          <div className="col-6">
            <img src={imgMap} alt="worldwide map" style={{ width: '100%' }} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const TR = ({ index }) => (
  <tr>
    <td>{index}</td>
    <td>Security doors</td>
    <td>16 jun 2014</td>
    <td><Label type="special">$483.00</Label></td>
  </tr>
);

export default TransactionsCard;
