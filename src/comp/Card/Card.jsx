import React, { Component } from 'react';
import cn from 'classnames';

import './Card.scss';

export function CardHeader({ className, children }) {
  return (
    <div className={cn('card-header', className)}>
      {children}
    </div>
  );
}

export function CardBody({ className, children }) {
  return (
    <div className={cn('card-body', className)}>
      {children}
    </div>
  );
}

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  static Header = CardHeader;
  static Body   = CardBody;

  render() {
    const { className, children } = this.props;

    return (
      <div className={cn('card', className)}>
        {children}
      </div>
    );
  }
}
