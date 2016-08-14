'use strict';
module.exports = (region, services) => {
    if (typeof region !== 'string') {
        throw new TypeError(`Expected a string but got ${typeof region}`);
    }

    if (!Array.isArray(services)) {
        throw new TypeError(`Expected an array but got ${typeof services}`);
    }

    const getStatus = require('./getStatus');
};
