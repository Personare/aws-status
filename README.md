# aws-status [![Build Status](https://travis-ci.org/cauealves/aws-status.svg?branch=master)](https://travis-ci.org/cauealves/aws-status)

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

## License

MIT © [Cauê Alves](http://cauealves.com)
