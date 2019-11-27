import React from 'react';
import cn from 'classnames';

import './Avatar.scss';

function Avatar({ src, className }) {
  return (
    <img className={cn('Avatar', className)} src={src} alt="" />
  );
}

export default Avatar;
