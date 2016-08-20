import test from 'ava';
import awsStatus from './';

test('should throw exception with the invalid arguments', t => {
    t.throws(() => {
        awsStatus(undefined, 'EC2');
    }, /Expected a string but got undefined/);

    t.throws(() => {
        awsStatus(123, 'RDS');
    }, /Expected a string but got number/);

    t.throws(() => {
        awsStatus('us-east-1', false);
    }, /Expected a string but got boolean/);

    t.throws(() => {
        awsStatus('us-east-1', {});
    }, /Expected a string but got object/);
});

test('should return an object with the correct keys', async t => {
    await awsStatus('us-east-1', 'EC2').then(result => {
        t.true('service' in result);
        t.true('status' in result);
    });
});
