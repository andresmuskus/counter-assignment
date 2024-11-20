// import necessary react testing library helpers here
// import the Counter component here
import {screen, fireEvent, render} from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText('Counter')).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incButton = screen.getByText("+");
  fireEvent.click(incButton);
  expect(screen.getByTestId("count").textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decButton = screen.getByText("-");
  fireEvent.click(decButton);
  expect(screen.getByTestId("count").textContent).toBe("-1");
});
