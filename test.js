import test from 'ava';
import m from '.';

test('density is not a string', t => {
	t.throws(() => m(6), 'Expected `density` to be of type `string`, got `number`');
});

test('density does not exist', t => {
	t.throws(() => m('foo'), 'Could not find icon for density `foo`');
});

test('retrieve all icons', t => {
	t.true(m().length === 6);
});

test('retrieve icon of specific density', t => {
	t.deepEqual(m('ldpi'), {
		file: 'mipmap-ldpi/icon.png',
		density: 'ldpi',
		dimension: 36
	});
});
