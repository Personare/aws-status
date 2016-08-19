# aws-status [![Build Status](https://travis-ci.org/cauealves/aws-status.svg?branch=master)](https://travis-ci.org/cauealves/aws-status) [![Dependency Status](https://david-dm.org/cauealves/aws-status.svg?style=flat-square)](https://david-dm.org/cauealves/aws-status) [![Npm Package Version](https://img.shields.io/npm/v/aws-status.svg?style=flat-square)](https://www.npmjs.org/package/aws-status)

> Simple way for check the AWS Status from the [official status page](http://status.aws.amazon.com/)

## Install

```bash
npm i --save aws-status
```

## Usage

```js
const awsStatus = require('aws-status');

awsStatus('us-east-1', ['EC2']).then(result => {
    console.log(result); // [ { service: 'EC2', status: 0 } ]
});
```

### Reference:

Status  | Description
---        | ---
0 | Service is operating normally.
1 | Performance issues.
2 | Service disruption (critical problem).

## License

MIT © [Cauê Alves](http://cauealves.com)
