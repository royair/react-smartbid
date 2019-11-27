import React, { Component } from 'react';
import cn from 'classnames';

import { Icon } from 'antd';

import './Card.scss';

export function ActionButtons({ isOpen, onToggle }) {

  return (
    <div className="action-buttons">
      <Icon type={isOpen ? 'up' : 'down'} onClick={onToggle} />
      <Icon type="tool" />
      <Icon type="setting" />
    </div>
  );
}

export function CardHeader({ className, withActionButtons, isOpen, onToggle, children }) {
  return (
    <div className={cn('card-header', className)}>
      {children} {withActionButtons && <ActionButtons isOpen={isOpen} onToggle={onToggle} />}
    </div>
  );
}

export function CardBody({ className, isOpen, children }) {
  return (
    <div className={cn('card-body', { 'is-open': isOpen }, className)}>
      {children}
    </div>
  );
}

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };
  }

  onToggle = () => {
    this.setState((o) => ({ isOpen: !o.isOpen }));
  };

  static Header = CardHeader;
  static Body   = CardBody;

  render() {
    const { className, children } = this.props;
    const { isOpen }              = this.state;
    const Header                  = React.cloneElement(children.find((child) => child.type.name === 'CardHeader'), {
      isOpen,
      onToggle: this.onToggle
    });
    const Body                    = React.cloneElement(children.find((child) => child.type.name === 'CardBody'), { isOpen });

    return (
      <div className={cn('card', className)}>
        {Header}
        {Body}
      </div>
    );
  }
}
