import test from 'ava';
import awsStatus from './';

test('should throw exception with invalid arguments', t => {
    t.throws(() => {
        awsStatus(undefined, ['EC2', 'RDS']);
    }, /Expected a string but got undefined/);

    t.throws(() => {
        awsStatus(123, ['EC2', 'RDS']);
    }, /Expected a string but got number/);

    t.throws(() => {
        awsStatus('us-east-1', false);
    }, /Expected an array but got boolean/);

    t.throws(() => {
        awsStatus('us-east-1', {});
    }, /Expected an array but got object/);

    t.throws(() => {
        awsStatus('us-east-1', 'EC2');
    }, /Expected an array but got string/);
});
