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

export default function Label({ type, children, className, ...restProps }) {
  return (
    <span className={cn('Label', className)} style={{ backgroundColor: TYPES[type].backgroundColor }} {...restProps}>{children}</span>
  );
}
