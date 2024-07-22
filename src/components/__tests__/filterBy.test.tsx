import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FilterBy from "../filterBy";

describe("FilterBy Component", () => {
  test("renders without crashing", () => {
    render(<FilterBy handleFilterChange={() => {}} />);
    expect(screen.getByLabelText(/Filter By:/i)).toBeInTheDocument();
  });
  test("calls handleFilterChange with 'all' when selected", () => {
    const handleFilterChangeMock = jest.fn();
    render(<FilterBy handleFilterChange={handleFilterChangeMock} />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "all" },
    });
    expect(handleFilterChangeMock).toHaveBeenCalledWith("all");
  });
  test("calls handleFilterChange with 'Rating 4 or higher' when selected", () => {
    const handleFilterChangeMock = jest.fn();
    render(<FilterBy handleFilterChange={handleFilterChangeMock} />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "rating" },
    });
    expect(handleFilterChangeMock).toHaveBeenCalledWith("rating");
  });
});
