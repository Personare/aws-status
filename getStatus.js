'use strict';

const BASE = 'http://status.aws.amazon.com/rss/';

const STATUS_OK = 0;
const STATUS_WARNING = 1;
const STATUS_CRITICAL = 2;
const STATUS_UNKNOWN = 3;

const parseString = require('xml2js').parseString;
const request = require('request');

module.exports = (region, service) => {
    const formattedRegion = region.toLowerCase();
    const formattedService = service.toLowerCase();

    return new Promise((resolve, reject) => {
        request(`${BASE}${formattedService}-${formattedRegion}.rss`, (error, response, body) => {
            if (error && response.statusCode != 200) {
                reject(error);
            }

            parseString(body, (err, result) => {
                const lastTitleItem = (result.rss.channel[0].item[0].title[0]._).toLowerCase();

                const isNormally = (lastTitleItem.indexOf('service is operating normally') > -1);
                const hasWarning = (
                    lastTitleItem.startsWith('performance issues') ||
                    lastTitleItem.startsWith('informational message')
                );

                const hasCritical = lastTitleItem.startsWith('service disruption');

                if (isNormally) {
                    resolve(STATUS_OK);
                } else if (hasWarning) {
                    resolve(STATUS_WARNING);
                } else if (hasCritical) {
                    resolve(STATUS_CRITICAL);
                } else {
                    reject(STATUS_UNKNOWN);
                }
            });
        });
    });
};
