import calculate from './Logic/calculate';
import operate from './Logic/operate';

describe('test calculate.js', () => {
  test('null', () => {
    expect(calculate({ total: '12', next: '34', operation: '+' }, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
  });

  test('zero next', () => {
    expect(calculate({ total: 10, next: '0', operation: '-' }, '0')).toStrictEqual({});
  });

  test('null opeartion', () => {
    expect(calculate({ total: 20, next: '99', operation: null }, '4')).toStrictEqual({ next: '994', total: null });
  });

  test('equals to ', () => {
    expect(calculate({ total: 20, next: '5', operation: '+' }, '=')).toStrictEqual({ total: operate(20, 5, '+'), next: null, operation: null });
  });
});
