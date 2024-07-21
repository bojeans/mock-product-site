// SimpleTest.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main title", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Mock fetch products for Coding Demonstration/i
  );
  expect(linkElement).toBeInTheDocument();
});

export {};
