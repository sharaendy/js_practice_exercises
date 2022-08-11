// @ts-check

/* eslint-disable react/static-property-placement */

import React from 'react';

import ThemeContext from './contexts';

const content = 'Текст для вкладки Home';

class Home extends React.Component {
  // BEGIN (write your solution here)
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;
    const { className } = theme;
    return (
      <article className={className}>
        {content}
      </article>
    );
  }
  // END
}

export default Home;
