import { useToggle } from './useToggle';
import { renderHook, act } from '@testing-library/react-hooks';

test('Should initialize with default value', () => {
  const { result } = renderHook(() => useToggle());

  expect(result.current[0]).toBe(false);

  act(() => {
    result.current[1]();
  })

  expect(result.current[0]).toBe(true);
});

test('Should toggle value', () => {
  const { result } = renderHook(() => useToggle(true));

  expect(result.current[0]).toBe(true);

  act(() => {
    result.current[1]();
  })

  expect(result.current[0]).toBe(false);
});