import React from 'react';
import { Icon } from 'antd';

import Card from '../Card/Card';
import Label from '../Label/Label';

import './UserProjectCard.scss';

const UserProjectCard = () => {
  return (
    <Card className="user-project-card">
      <Card.Header withActionButtons>User Project list</Card.Header>
      <Card.Body>
        <table>
          <thead>
            <tr>
              <td>Status</td>
              <td>Date</td>
              <td>User</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            <TR />
            <tr>
              <td><Label type="warning">Canceled</Label></td>
              <td className="flex flex-align-center"><Icon type="clock-circle" style={{ marginRight: 5 }} /> 11:20 PM</td>
              <td>Samantha</td>
              <td className="percentage"><Icon type="rise" /> 24%</td>
            </tr>
            <TR />
            <TR />
            <TR />
            <tr>
              <td><Label type="special">Completed</Label></td>
              <td className="flex flex-align-center"><Icon type="clock-circle" style={{ marginRight: 5 }} /> 11:20 PM</td>
              <td>Samantha</td>
              <td className="percentage"><Icon type="rise" /> 24%</td>
            </tr>
            <TR />
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};

const TR = () => (
  <tr>
    <td>Pending...</td>
    <td className="flex flex-align-center"><Icon type="clock-circle" style={{ marginRight: 5 }} /> 11:20 PM</td>
    <td>Samantha</td>
    <td className="percentage"><Icon type="rise" /> 24%</td>
  </tr>
);


export default UserProjectCard;
