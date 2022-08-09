// Реализуйте компонент <MyForm>, отображающий форму из шести элементов:

// email – инпут типа email
// password – инпут типа password
// address – textarea
// city – текстовый инпут
// country – select со следующими значениями: argentina, russia, china.
// Accept Rules – checkbox булево значение должно быть приведено к строке
// После сабмита формы появляется таблица, в которой показываются значения всех полей. Из этой формы можно вернуться в редактирование по кнопке Back. При этом все данные должны оказаться на своих местах.

// Форма

// <form name="myForm">
//   <div class="col-md-6 mb-3">
//       <label for="email" class="col-form-label">Email</label>
//       <input type="email" name="email" class="form-control" id="email" placeholder="Email">
//     </div>
//     <div class="form-group col-md-6">
//       <label for="password" class="col-form-label">Password</label>
//       <input type="password" name="password" class="form-control" id="password" placeholder="Password">
//     </div>
//   <div class="col-md-6 mb-3">
//     <label for="address" class="col-form-label">Address</label>
//     <textarea type="text" class="form-control" name="address" id="address" placeholder="1234 Main St"></textarea>
//   </div>
//   <div class="col-md-6 mb-3">
//       <label for="city" class="col-form-label">City</label>
//       <input type="text" class="form-control" name="city" id="city">
//     </div>
//     <div class="col-md-6 mb-3">
//       <label for="country" class="col-form-label">Country</label>
//       <select id="country" name="country" class="form-control">
//         <option>Choose</option>
//         <option value="argentina">Argentina</option>
//         <option value="russia">Russia</option>
//         <option value="china">China</option>
//       </select>
//     </div>
//   <div class="col-md-6 mb-3">
//     <div class="form-check">
//       <label class="form-check-label" for="rules">
//         <input id="rules" type="checkbox" name="acceptRules" class="form-check-input">
//         Accept Rules
//       </label>
//     </div>
//   </div>
//   <button type="submit" class="btn btn-primary">Sign in</button>
// </form>
// После отправки формы:

// <div>
//   <button type="button" class="btn btn-primary">Back</button>
//   <table class="table">
//     <tbody>
//       <tr>
//         <td>acceptRules</td>
//         <td>true</td>
//       </tr>
//       <tr>
//         <td>address</td>
//         <td>lenina street</td>
//       </tr>
//       <tr>
//         <td>city</td>
//         <td>moscow</td>
//       </tr>
//       <tr>
//         <td>country</td>
//         <td>russia</td>
//       </tr>
//       <tr>
//         <td>email</td>
//         <td>my@email.com</td>
//       </tr>
//       <tr>
//         <td>password</td>
//         <td>qwerty</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
// Строки сортируются в алфавитном порядке по именам в первом столбце. В вашем случае результирующая таблица может отличаться, все зависит от того, какие данные выбраны.

//! решение 1 (не оптимальное, не прошло тесты задания)
/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */

import React from 'react';

// BEGIN (write your solution here)
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
      acceptRules: false,
      currentView: 'form', //table
    };
  }

  handleInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };

  rulesAccept = () =>
    this.setState(({ acceptRules }) => ({ acceptRules: !acceptRules }));

  goToTablet = (e) => {
    e.preventDefault();
    this.setState({ currentView: 'table' });
  };

  goToForm = (e) => {
    e.preventDefault();
    this.setState({ currentView: 'form' });
  };

  render() {
    const { currentView } = this.state;
    const formOpts = {};
    const tableOpts = {};
    const formRows = Object.entries(this.state);

    if (currentView === 'form') {
      formOpts['hidden'] = null;
      tableOpts['hidden'] = 'hidden';
    } else if (currentView === 'table') {
      formOpts['hidden'] = 'hidden';
      tableOpts['hidden'] = null;
    }

    return (
      <React.Fragment>
        <form {...formOpts} onSubmit={this.goToTablet} name="myForm">
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="col-form-label">
              Email
            </label>
            <input
              onChange={this.handleInputChange}
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password" className="col-form-label">
              Password
            </label>
            <input
              onChange={this.handleInputChange}
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="address" className="col-form-label">
              Address
            </label>
            <textarea
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              name="address"
              id="address"
              placeholder="1234 Main St"
            ></textarea>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="city" className="col-form-label">
              City
            </label>
            <input
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              name="city"
              id="city"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="country" className="col-form-label">
              Country
            </label>
            <select
              value={this.state.value}
              onChange={this.handleInputChange}
              id="country"
              name="country"
              className="form-control"
            >
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-check">
              <label className="form-check-label" htmlFor="rules">
                <input
                  onChange={this.rulesAccept}
                  checked={this.state.acceptRules}
                  id="rules"
                  type="checkbox"
                  name="acceptRules"
                  className="form-check-input"
                />
                Accept Rules
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>

        <div {...tableOpts}>
          <button
            onClick={this.goToForm}
            type="button"
            className="btn btn-primary"
          >
            Back
          </button>
          <table className="table">
            <tbody>
              {formRows.sort().map(([key, value]) => {
                if (value === '') return null;
                if (key === 'currentView') return null;
                return (
                  <tr>
                    <td>{key}</td>
                    <td>{value.toString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

// END


//! 2 решение (лучшее)
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        city: '',
        country: '',
        address: '',
        acceptRules: false,
      },
      submittingState: 'fillingForm',
    };
  }

  handleChangeField = ({ target }) => {
    const { form } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ form: { ...form, [target.name]: value } });
  }

  handleBackToForm = () => {
    this.setState({ submittingState: 'fillingForm' });
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.setState({ submittingState: 'submitted' });
  }

  renderRow = (key) => {
    const { form } = this.state;
    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{form[key].toString()}</td>
      </tr>
    );
  };

  renderResult() {
    const { form } = this.state;
    const keys = Object.keys(form).sort();
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.handleBackToForm}>Back</button>
        <table key="fieldsValues" className="table">
          <tbody>
            {keys.map(this.renderRow)}
          </tbody>
        </table>
      </div>
    );
  }

  renderForm() {
    const { form } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm} name="myForm">
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">Email</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChangeField}
            value={form.email}
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="password" className="col-form-label">Password</label>
          <input
            type="password"
            onChange={this.handleChangeField}
            value={form.password}
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="col-form-label">Address</label>
          <textarea type="text" name="address" value={form.address} onChange={this.handleChangeField} className="form-control" id="address" placeholder="1234 Main St" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="col-form-label">City</label>
          <input type="text" name="city" onChange={this.handleChangeField} value={form.city} className="form-control" id="city" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="col-form-label">Country</label>
          <select id="country" name="country" onChange={this.handleChangeField} className="form-control" value={form.country}>
            <option>Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input id="rules" name="acceptRules" className="form-check-input" onChange={this.handleChangeField} type="checkbox" checked={form.acceptRules} />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }

  render() {
    const { submittingState } = this.state;
    switch (submittingState) {
      case 'fillingForm':
        return this.renderForm();
      case 'submitted':
        return this.renderResult();
      default:
        throw new Error(`'${submittingState}' - unknown state`);
    }
  }
}