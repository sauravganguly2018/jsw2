import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { expect, test } = require("@jest/globals");
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
