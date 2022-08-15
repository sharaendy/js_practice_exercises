// @ts-nocheck

import React, { useState } from 'react';
import cn from 'classnames';

export default function BtnGroup() {
//! решение 1
  // BEGIN (write your solution here)
  const [active, setActive] = useState(null);

  const setActiveLeft = () => setActive('left');
  const setActiveRight = () => setActive('right');

  const classes = cn('btn btn-secondary', {
    left: active === 'left',
    right: active === 'right',
  });

  return (
    <div className="btn-group" role="group">
      <button
        onClick={setActiveLeft}
        type="button"
        className={cn(classes, { active: active === 'left' })}
      >
        Left
      </button>
      <button
        onClick={setActiveRight}
        type="button"
        className={cn(classes, { active: active === 'right' })}
      >
        Right
      </button>
    </div>
  );
  // END
}


//! решение 2
import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN
  const [activeButton, setActiveButton] = useState(null);

  const getClassName = (position) => cn('btn btn-secondary', position, { active: activeButton === position });

  return (
    <div className="btn-group" role="group">
      <button type="button" className={getClassName('left')} onClick={() => setActiveButton('left')}>Left</button>
      <button type="button" className={getClassName('right')} onClick={() => setActiveButton('right')}>Right</button>
    </div>
  );
  // END
};

export default BtnGroup;