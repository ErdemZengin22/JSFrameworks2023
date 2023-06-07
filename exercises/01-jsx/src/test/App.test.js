import { render, screen } from "@testing-library/react";
import App from "../App";

test('it should render "My name is ____"', () => {
  render(<App />);
  const app = screen.getAllByText(/My name is/i);
});
