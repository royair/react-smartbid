import React from 'react';

import './Progress.scss';

export default function Progress({ percent }) {
  return (
    <div className="progress progress-outer">
      <div className="progress-inner" style={{
        width: `${percent}%`,
        backgroundColor: 'green'
      }} />
    </div>
  );
}
