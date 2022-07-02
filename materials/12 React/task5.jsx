import React from 'react';

// const definitions = [
//   { dt: 'one', dd: 'two', id: 1 },
//   { dt: 'another term', dd: 'another description', id: 2 },
// ];
//! решение 1
export default class DefinitionsList extends React.Component {
  render() {
    const { data } = this.props;

    if (data.length === 0) {
      return null;
    }

    return (
      <dl>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <dt>{item.dt}</dt>
            <dd>{item.dd}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
  }
}

//! решение 2
// BEGIN
export default class Definitions extends React.Component {
  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return null;
    }

    const tags = data.map(({ dt, dd, id }) => (
      <React.Fragment key={id}>
        <dt>{dt}</dt>
        <dd>{dd}</dd>
      </React.Fragment>
    ));

    return (
      <dl>
        {tags}
      </dl>
    );
  }
}
// END
