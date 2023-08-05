import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TableComponent from "./index";

describe("TableComponent", () => {
  const headers = ["Name", "Age"];
  const rows = [["Alice", 20], ["Bob", 30]];
  let clickedCell: { rowIndex: number; columnIndex: number } | null = null;

  const onClick = (rowIndex: number, columnIndex: number) => {
    clickedCell = { rowIndex, columnIndex };
  };

  beforeEach(() => {
    render(<TableComponent headers={headers} rows={rows} onClick={onClick} />);
  });

  it("renders headers", () => {
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it("renders rows", () => {
    rows.forEach((row) => {
      row.forEach((cell) => {
        expect(screen.getByText(String(cell))).toBeInTheDocument();
      });
    });
  });

  it("handles cell clicks", () => {
    fireEvent.click(screen.getByText("Alice"));
    expect(clickedCell).toEqual({ rowIndex: 0, columnIndex: 0 });

    fireEvent.click(screen.getByText("30"));
    expect(clickedCell).toEqual({ rowIndex: 1, columnIndex: 1 });
  });
});
