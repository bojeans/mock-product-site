import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBy from "../searchBy";

describe("SearchBy Component", () => {
  test("renders without crashing", () => {
    render(<SearchBy handleSearchChange={() => {}} />);
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });
  test("calls handleSearchChange with the search query", () => {
    const handleSearchChangeMock = jest.fn();
    render(<SearchBy handleSearchChange={handleSearchChangeMock} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });
    expect(handleSearchChangeMock).toHaveBeenCalledWith("test");
  });
});
