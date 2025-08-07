import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize with count 0 and val 1', () => {
    const { result } = renderHook(() => useCounter());
    
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val when increment is called', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });

  it('should increment count by current val value', () => {
    const { result } = renderHook(() => useCounter());
    
    // Set val to 5
    act(() => {
      result.current.setVal(5);
    });
    
    expect(result.current.val).toBe(5);
    
    // Increment should add 5 to count
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(5);
  });

  it('should increment multiple times correctly', () => {
    const { result } = renderHook(() => useCounter());
    
    // Set val to 3
    act(() => {
      result.current.setVal(3);
    });
    
    // Increment twice
    act(() => {
      result.current.increment();
    });
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(6); // 0 + 3 + 3 = 6
  });

  it('should handle negative val values', () => {
    const { result } = renderHook(() => useCounter());
    
    // Set val to -2
    act(() => {
      result.current.setVal(-2);
    });
    
    expect(result.current.val).toBe(-2);
    
    // Increment should subtract 2 from count
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(-2);
  });

  it('should update val value correctly', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.setVal(10);
    });
    
    expect(result.current.val).toBe(10);
    
    act(() => {
      result.current.setVal(0);
    });
    
    expect(result.current.val).toBe(0);
  });
});
