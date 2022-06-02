// !решение 1
export default class PasswordValidator {
  constructor(options = {}) {
    const defaultOptions = {
      minLength: 8,
      containNumbers: true,
    };

    this.options = { ...defaultOptions, ...options };
  }

  validate(password) {
    const errors = {};

    if (password.length < this.options.minLength) {
      errors.minLength = 'too small';
    }

    if (this.options.containNumbers) {
      if (!hasNumber(password)) {
        errors.containNumbers = 'should contain at least one number';
      }
    }

    return errors;
  }
}

// !решение 2 (не доработанное)
export default class PasswordValidator {
  constructor(options) {
    const { minLength } = options ?? 8;
    const { containNumbers } = options ?? true;
    this.minLength = minLength ?? 8;
    this.containNumbers = containNumbers ?? true;
  }

  validate(password) {
    const errors = {};
    if (password.length < this.minLength) {
      errors.minLength = 'too small';
    }

    const passwordArray = password.split('');
    const number = '0123456789null';
    if (
      passwordArray.filter((symbol) => number.includes(symbol)).length === 0 &&
      this.containNumbers === true
    ) {
      errors.containNumbers = 'should contain at least one number';
    }
    return errors;
  }
}

const validate1 = new PasswordValidator({
  containNumbers: null,
  minLength: 0,
});
console.log(validate1.validate(''));

// minLength: 0, containNumbers: null

// const validate2 = new PasswordValidator();
// console.log(validate2);
// console.log(validate2.validate('qy'));

// const validate3 = new PasswordValidator({ containNumbers: false});
// console.log(validate3);

// const passwordArray = password.split('');
// const number = '0123456789';
// if (
//   passwordArray.filter((symbol) => number.includes(symbol)).length === 0 &&
//   this.containNumbers === true
// ) {
