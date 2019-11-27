import React from 'react';
import cn from 'classnames';

import './Label.scss';

const TYPES = {
  warning: {
    backgroundColor: 'var(--orange-100)',
  },
  new: {
    backgroundColor: 'var(--java)',
  },
  special: {
    backgroundColor: 'var(--turkoise)',
  },
  monthly: {
    backgroundColor: 'var(--java-500)',
  }
};

export default function Label({ type, children, className, style, ...restProps }) {
  return (
    <span className={cn('label', className)}
          style={{ backgroundColor: TYPES[type].backgroundColor, ...style }} {...restProps}>{children}</span>
  );
}
