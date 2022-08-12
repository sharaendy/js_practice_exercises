// @ts-check

/* eslint-disable react/static-property-placement */

import React from 'react';

import ThemeContext from './contexts';

const content = 'Текст для вкладки Profile';

class Profile extends React.Component {
  // BEGIN (write your solution here)
  static contextType = ThemeContext;

  render() {
    const { context } = this;
    const { theme } = context;
    const { className } = theme;
    return (
      <article className={className}>
        {content}
      </article>
    );
  }
  // END
}

export default Profile;
