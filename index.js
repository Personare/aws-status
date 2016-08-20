'use strict';

module.exports = (region, service) => {
    if (typeof region !== 'string') {
        throw new TypeError(`Expected a string but got ${typeof region}`);
    }

    if (typeof service !== 'string') {
        throw new TypeError(`Expected a string but got ${typeof service}`);
    }

    return new Promise((resolve, reject) => {
        const getStatus = require('./getStatus');

        getStatus(region, service).then(status => {
            resolve({
                service,
                status
            });
        }).catch(error => reject(error));
    });
};
