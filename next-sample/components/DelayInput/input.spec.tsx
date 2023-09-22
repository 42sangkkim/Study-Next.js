import { describe, jest, beforeEach, afterEach, it, expect } from "@jest/globals";
import { RenderResult, fireEvent, render, screen, act } from "@testing-library/react";
import { DelayInput } from ".";

describe('DelayInput', () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    handleChange = jest.fn();
    renderResult = render(<DelayInput onChange={handleChange} />);
    jest.useFakeTimers();
  });

  afterEach(() => {
    renderResult.unmount();
    jest.useRealTimers();
  });

  it('should display empty in span on initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

    expect(spanNode).toHaveTextContent('입력한 텍스트:');
  });

  it('should display input text 1second after onChange event occurs', async () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    await act(() => {
      jest.runAllTimers();
    });

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;
    expect(spanNode).toHaveTextContent(`입력한 텍스트: ${inputText}`);
  });

  it('should call onChange 1seconds after onchange event occurs', async () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    await act(() => {
      jest.runAllTimers();
    });

    expect(handleChange).toHaveBeenCalled();
  });
});
