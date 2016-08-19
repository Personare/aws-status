'use strict';

module.exports = (region, services) => {
    if (typeof region !== 'string') {
        throw new TypeError(`Expected a string but got ${typeof region}`);
    }

    if (!Array.isArray(services)) {
        throw new TypeError(`Expected an array but got ${typeof services}`);
    }

    return new Promise((resolve, reject) => {
        const getStatus = require('./getStatus');

        let result = [];

        const totalServices = services.length;
        for (let i = 0; i < totalServices; i++) {
            const service = services[i];
            getStatus(region, service).then(status => {
                result.push({
                    service,
                    status
                });

                if (i === (totalServices - 1)) {
                    resolve(result);
                }
            });
        }
    });
};
