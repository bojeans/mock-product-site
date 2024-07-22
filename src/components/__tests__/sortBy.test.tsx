import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SortBy from "../sortBy";

describe("SortBy Component", () => {
  test("renders without crashing", () => {
    render(<SortBy handleSortChange={() => {}} />);
    expect(screen.getByLabelText(/Sort By:/i)).toBeInTheDocument();
  });

  test("calls handleSortChange with the correct value when selection changes", () => {
    const handleSortChangeMock = jest.fn();
    render(<SortBy handleSortChange={handleSortChangeMock} />);

    // Simulate changing the dropdown's value
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "lowprice" },
    });
    expect(handleSortChangeMock).toHaveBeenCalledWith("lowprice");

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "highprice" },
    });
    expect(handleSortChangeMock).toHaveBeenCalledWith("highprice");
  });
});
