// The Maths object constructor
function Maths(id) {
  const about = {
    version: 0.1,
    author: 'Takashi Idobe',
    created: 'June 14, 2018',
    updated: 'June 14, 2018'
  };

  if (id) {

  if (window === this) {
    return new Maths(id);
  } else {
  return about;
  }
}
  return this;
}

//it works with functions
//set object with addAll

Maths = {
  addAll: function(...arguments) {
    arguments.reduce((a, b) => a + b);
    return this;
  },

  bob: function() {
    console.log('bob');
  },

  add: (a, b) => {
    this = a + b;
    return this;
  },

  subtractAll: (...arguments) => {
    this = arguments.reduce((a, b) => a - b);
    return this;
  },

  subtract: (a, b) => {
    this = a - b;
    return this;
  },

  multiplyAll: (...arguments) => {
    this = arguments.reduce((a, b) => a * b);
    return this;
  },

  multiply: (a, b) => {
    this = a * b;
    return this;
  },

  divideAll: (...arguments) => {
    this = arguments.reduce((a, b) => a / b);
    return this;
  },

  divide: (a, b) => {
    this = a / b;
    return this;
  },

  remainder: (a, b) => {
    this = a % b;
    return this;
  },

  ceilDivision: (...args) => {
    this = Math.ceil(args.reduce((a, b) => a / b));
    return this;
  },

  floorDivision: (a, b) => {
    this = Math.floor(a / b);
    return this;
  },

  RoundDivision: (a, b) => {
    this = Math.round(a / b);
    return this;
  },

  getLocalTime: () => {
    this = new Date(Date.now()).toLocaleString();
    return this;
  },

  changeUnixTime: (a) => {
    this = newDate(a * 1000);
    return this;
  },

  power: (a, b) => {
    //if a is 0, return 0
    if (a >= 0 && b >= 0) {
      if (a === 0) {
        this = 0;
      }
      //if the power is 0, return 1;
      else if (b === 0) {
        this = 1;
      }
      //if the power is odd
      else if (b % 2 === 1) {
        this = a * ((a * a) ** ((b - 1) / 2));
      }
      //else if power is even
      else if (b % 2 === 0) {
      this = (a * a) ** (b / 2);
      }
    } else {
      this = a ** b;
    }
    //always return after the blocks
    return this;
  },

  floor: (a) => {
    this = Math.floor(a);
    return this;
  },

  ceil: (a) => {
    this = Math.ceil(a);
    return this;
  },

  round: (a) => {
    this = Math.round(a);
    return this;
  },

  toBinary: (a) => {
    this = parseInt(a).toString(2);
    return this;
  },
  
  toBase16: (a) => {
    this = parseInt(a).toString(16);
    return this;
  },

  toBase36: (a) => {
    this = parseInt(a).toString(36);
    return this;
  }

};


//es6 version?
//const Maths = (id) => {
//   return this;
// }

//our dot-operator methods
