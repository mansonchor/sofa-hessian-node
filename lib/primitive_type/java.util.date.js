'use strict';

module.exports = gen => {
  gen('if (obj && obj.$class) { obj = obj.$; }');
  gen('if (obj == null) { return encoder.writeNull(); }');
  gen('if (typeof obj === \'string\') { obj = new Date(obj); }');
  gen('encoder.writeDate(obj);');
};
