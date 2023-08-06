import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import TableComponent from './index';

describe("Table Component", () => {
  it("renders all headers and rows", () => {
    const headers = ["Name", "Age"];
    const rows = [
      ["John Doe", "30"],
      ["Jane Doe", "25"]
    ];

    const { getByText } = render(
      <TableComponent
        headers={headers}
        rows={rows}
      />
    );

    headers.forEach(header => {
      expect(getByText(header)).toBeInTheDocument();
    });

    rows.forEach(row => {
      row.forEach(cell => {
        expect(getByText(cell)).toBeInTheDocument();
      });
    });
  });

  it("triggers click event as expected", () => {
    const headers = ["Name", "Age"];
    const rows = [
      ["John Doe", "30"],
      ["Jane Doe", "25"]
    ];
    const onClickMock = jest.fn();

    const { getByText } = render(
      <TableComponent
        headers={headers}
        rows={rows}
        onClick={onClickMock}
      />
    );

    fireEvent.click(getByText("John Doe"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
