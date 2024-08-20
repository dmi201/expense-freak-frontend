import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders Hello Expense Freak", () => {
  render(<App />);
  const helloElement = screen.getByText(/Hello Expense Freak/i);
  expect(helloElement).toBeInTheDocument();
});
