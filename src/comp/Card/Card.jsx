import React, { Component } from 'react';
import cn from 'classnames';

import { Icon, Menu } from 'antd';

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
};
CardHeader.displayName = 'CardHeader';

export function CardBody({ className, isOpen, children }) {
  return (
    <div className={cn('card-body', { 'is-open': isOpen }, className)}>
      {children}
    </div>
  );
}
CardBody.displayName = 'CardBody';

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

    return (
      <div className={cn('card', className)}>
        {React.Children.map(children, (child) => {
          if (child.type.displayName === 'CardHeader') {
            return React.cloneElement(child, {
              isOpen,
              onToggle: this.onToggle
            });
          }

          if (child.type.displayName === 'CardBody') {
            return React.cloneElement(child, {
              isOpen,
            });
          }

          return child;
        })}
      </div>
    );
  }
}
