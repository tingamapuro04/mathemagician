import operate from './Logic/operate';

describe('operate', () => {
  test('addition', () => {
    expect(operate(1, 1, '+')).toBe('2');
  });

  test('Subtraction', () => {
    expect(operate(1, 1, '-')).toBe('0');
  });

  test('Multiplication', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  test('Division', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });
  test('modulo', () => {
    expect(operate(7, 3, '%')).toBe('1');
  });
});
