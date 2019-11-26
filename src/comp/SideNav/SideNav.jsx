import React from 'react';
import { Icon } from 'antd';

import Label from '../Label/Label';
import Avatar from '../Avatar/Avatar';

import profileImg from '../../img/profile-image.jpg';

import './SideNav.scss';

export default function SideNav() {
  return (
    <div className="SideNav">
      <div className="user-details">
        <Avatar className="user-image" src={profileImg} />
        <div className="user-name"></div>
        <div className="user-role-dropdown">
          <span className="user-title">Art Director</span>
          <Icon type="caret-down" />
        </div>
      </div>

      <nav>
        <ul className="menu">
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
              <Icon type="left" className="item-caret" />
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
              <Label type="warning" className="item-label">16/24</Label>
              <Icon type="left" className="item-caret" />
            </div>
          </li>
          <li className="menu-item open">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
              <Icon type="down" className="item-caret" />
            </div>
            <div className="menu-item-body">
              <ul className="submenu">
                <li className="submenu-item">Dashboard v1.1</li>
                <li className="submenu-item">Dashboard v1.2</li>
                <li className="submenu-item">Dashboard v1.3</li>
                <li className="submenu-item">Dashboard v1.4</li>
              </ul>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
              <Label type="special" className="item-label">SPECIAL</Label>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
              <Label type="new" className="item-label">NEW</Label>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
            </div>
          </li>
          <li className="menu-item selected">
            <div className="menu-item-head">
              <Icon type="pie-chart" className="item-icon" />
              <span className="item-text">Lorem ipsum</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
