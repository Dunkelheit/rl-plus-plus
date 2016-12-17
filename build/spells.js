'use strict';

const spells = require('./spells.json');

let result = '#VAR {spells}{';
Object.keys(spells).forEach(chant => {
    result += `{${chant}}{{name}{${spells[chant].name}}{duration}{${spells[chant].duration}}}`;
});
result += '}';

console.log(result);