'use strict';

const _ = require('lodash');
const async = require('async');
const fs = require('fs');
const path = require('path');
const request = require('request');

const armoryDataRegEx = /var datos\s*=\s*\{"objetos":\s*([\s\S.]*?)\}\;/m;
const colorCodes = /\%\^([A-Z]{2,}|\%\^)+\%\^/g;
const forbiddenStats = ['valor', 'peso', 'restricciones', 'localizacion', 'vida', 'id', 'descripcion_juzgar', 
    'nombre', 'material', 'alias', 'procedencia', 'tipo', 'objeto_base'];
const invalidTrailingCommaRegEx = /,\s*(\]|\})/g;
const newLineAndTabRegEx = /\r?\n|\r|\t/g;

async.waterfall([
    function (next) {
        request.get('https://armeria.reinosdeleyenda.es/lib/armeria.php', function (err, res, body) {
            if (err || res.statusCode !== 200) {
                return next(err);
            }
            const rawArmoryData = body.match(armoryDataRegEx);
            if (rawArmoryData === null) {
                return next('Could not parse armory data from response');
            }
            let armoryData = rawArmoryData[1].replace(newLineAndTabRegEx, '');
            armoryData = armoryData.replace(invalidTrailingCommaRegEx, '$1');
            armoryData = armoryData.replace(colorCodes, '');
            armoryData = JSON.parse(armoryData);
            next(null, armoryData);
        });
    },
    function (armoryData, next) {
        armoryData = armoryData.map(function (item) {
            return _.omit(item, forbiddenStats);
        });
        next(null, armoryData);
    },
    function (armoryData, next) {
        let result = '#VAR {rl_armory} {';
        armoryData.forEach(function (item) {
            result += `{${item.short}} {`;
            Object.keys(item).forEach(function (stat) {
                if (stat === 'short') {
                    return;
                }
                if (typeof item[stat] === 'object') {
                    result += `{${stat}} {`;
                        Object.keys(item[stat]).forEach(function (sub) {
                            result += `{${sub}} {${item[stat][sub]}}`;
                        });
                    result += '}';
                } else {
                    result += `{${stat}} {${item[stat]}}`;
                }
            });
            result += '}';
        });
        result += '}';

        const file = path.join(__dirname, '..', 'data', 'armory.tin');
        fs.writeFile(file, result, function (err) {
            if (err) {
                return next(err);
            }
            console.log(`Written to ${file}`);
            next(null, result);
        });
    }
], function (err, result) {
    if (err) {
        console.error(err);
    }
    console.log('Ok!');
});

