//! решение 1
// @ts-check

import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      variants: [],
    };
  }

  handleInput = async (e) => {
    const { value } = e.target;
    this.setState(() => ({ inputValue: value }));
    const res = await axios.get('/countries', {
      params: { term: value },
    });
    this.setState(() => ({ variants: [...res.data] }));
  };

  render() {
    const { inputValue, variants } = this.state;
    return (
      <div>
        <form>
          <input
            onChange={this.handleInput}
            value={inputValue}
            type="text"
            className="form-control"
            placeholder="Enter Country"
          />
        </form>
        {variants.length !== 0 ? (
          <ul>
            {variants.sort().map((country) => (
              <li key={country}>{country}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}
// END

//! решение 2
// BEGIN
export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countries: [], text: '' };
  }

  handleChangeText = async ({ target: { value } }) => {
    if (value === '') {
      this.setState({ text: '', countries: [] });
      return;
    }
    this.setState({ text: value });
    const res = await axios.get('/countries', { params: { term: value } });
    this.setState({ countries: res.data });
  }

  renderCountries() {
    const { countries } = this.state;
    return (
      <ul>
        {countries.map((c) => <li key={c}>{c}</li>)}
      </ul>
    );
  }

  render() {
    const { countries, text } = this.state;

    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChangeText} value={text} className="form-control" placeholder="Enter Country" />
        </form>
        {countries.length > 0 && this.renderCountries()}
      </div>
    );
  }
}
// END