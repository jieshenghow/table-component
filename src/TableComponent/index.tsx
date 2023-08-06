import React, {useEffect, useRef, useState} from "react";
import './style.css'
import ErrorBoundary from "../ErrorBoundary";

function isOverflowed(element: HTMLElement) {
  return element.scrollWidth > element.offsetWidth;
}

function isOffScreen(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.right > window.innerWidth;
}

/**
 *
 */
interface TableComponentProps {
  headers: string[];
  rows: any[][];
  onClick?: (rowIndex: number, columnIndex: number) => void;
  type?: "radio" | "checkbox";
  onChange?: (index: number, checked: boolean) => void;
  className?: string;
  sortable?: boolean;
  initSortColumnIndex?: number;
  initSortAscending?: boolean;
  tableName?: string
}

/**
 *
 */
interface CheckBoxProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

/**
 *
 */
interface RadioButtonProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

/**
 *
 */
const RadioButton = (props: RadioButtonProps) => {
  const {isChecked, onChange} = props
  const handleOnClick = () => {
    onChange(!isChecked)
  }
  return (
    <div className={`custom-radio ${isChecked ? 'checked' : ''}`} onClick={handleOnClick}>
      {
        isChecked && (
          <div className="custom-radio-inner"/>
        )
      }
    </div>
  )
}

/**
 *
 */
const CheckBox = (props: CheckBoxProps) => {
  const {isChecked, onChange} = props

  const handleOnClick = () => {
    onChange(!isChecked)
  }
  return (
    <div className={`custom-checkbox ${isChecked ? 'checked' : ''}`} onClick={handleOnClick}>
      {
        isChecked && (
          <svg
            className="checkbox"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )
      }

    </div>
  )
}

/**
 *
 */
const TableComponent: React.FC<TableComponentProps> = ({
                                                         headers,
                                                         rows,
                                                         onClick,
                                                         type,
                                                         onChange,
                                                         className,
                                                         sortable,
                                                         initSortColumnIndex,
                                                         initSortAscending,
                                                         tableName = ''
                                                       }) => {

  // ========== HOOKS ========== //
  const tableRef = useRef<null | HTMLTableElement>(null);
  const [sortedRows, setSortedRows] = useState<any[][]>(rows);
  const [sortColumnIndex, setSortColumnIndex] = useState<number>(initSortColumnIndex!);
  const [ascending, setAscending] = useState<boolean>(initSortAscending!);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [isCompact, setIsCompact] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (sortable) {
      sortByColumnIndex(sortColumnIndex, ascending);
    }
  }, [rows, sortable, sortColumnIndex, ascending]);

  useEffect(() => {
    if (tableRef.current) {
      if (isOffScreen(tableRef.current)) {
        setIsCompact(true);
      }
    }
  }, [sortedRows]);
  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  useEffect(() => {
    if (tableRef.current && windowWidth) {
      if (isOffScreen(tableRef.current)) {
        setIsCompact(true);
      } else {
        setIsCompact(false);
      }
    }
  }, [windowWidth, sortedRows]);

  // ========== FUNCTIONS ========== //
  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };
  const sortByColumnIndex = (index: number, ascending: boolean) => {
    const newSortedRows = [...rows].sort((a, b) => ascending ? `${a[index]}`.localeCompare(`${b[index]}`)
      : `${b[index]}`.localeCompare(`${a[index]}`));
    setSortedRows(newSortedRows);
  };

  const handleRowChange = (index: number, checked: boolean) => {
    if (type === "radio") {
      setSelectedRows([index]);
    } else {
      if (checked) {
        setSelectedRows([...selectedRows, index]);
      } else {
        setSelectedRows(selectedRows.filter(idx => idx !== index));
      }
    }
    if (onChange) {
      onChange(index, checked);
    }
  };

  // ========== RENDER ========== //


  return (
    <ErrorBoundary>
      <table ref={tableRef} className={className}>
        <thead>
        {
          isCompact ? (
            tableName !== '' && (
              <tr>
                <th></th>
                {type && <th></th>}
                <th>
                  {tableName}
                </th>
                <th/>
              </tr>
            )
          ) : (
            <tr>
              <th></th>
              {type && <th></th>}
              {headers.map((header, index) => (
                <th
                  key={index}
                  onClick={() =>
                    sortable &&
                    (setSortColumnIndex(index), setAscending(index === sortColumnIndex ? !ascending : true))
                  }
                >
                  {header}
                  {
                    sortable &&
                      <img
                          className={`${index === sortColumnIndex ? (ascending ? "arrow rotated" : "arrow") : "arrow"} sort-icon`}
                          alt='sorting-icon'
                          src={index === sortColumnIndex ? './icons/arrow.svg' : './icons/arrow-neutral.svg'}/>
                  }
                </th>
              ))}
              <th></th>
            </tr>
          )
        }
        </thead>
        <tbody>
        {sortedRows.map((row, rowIndex) => (
          <tr key={rowIndex}
              style={{backgroundColor: selectedRows.includes(rowIndex) ? "#EFEDFD" : "transparent"}}>
            <td></td>
            {type === "radio" && (
              <td className={`${isCompact ? 'align-top' : ''}`}>
                <div className={`${isCompact ? 'mt-8' : ''}`}>
                  <RadioButton isChecked={selectedRows.includes(rowIndex)}
                               onChange={() => handleRowChange(rowIndex, !selectedRows.includes(rowIndex))}/>
                </div>
              </td>
            )}
            {type === "checkbox" && (
              <td className={`${isCompact ? 'align-top' : ''}`}>
                <div className={`${isCompact ? 'mt-8' : ''}`}>
                  <CheckBox isChecked={selectedRows.includes(rowIndex)}
                            onChange={() => handleRowChange(rowIndex, !selectedRows.includes(rowIndex))}/>
                </div>
              </td>
            )}
            {
              isCompact ? (
                <td>
                  {headers.map((header, index) => (
                    <div key={index} className={' flex-row'}>
                      <div className={'compact-header'}>
                        {header}:
                      </div>
                      <div className={'compact-data flex items-center'}>
                        {row[index]}
                      </div>
                    </div>
                  ))}
                </td>
              ) : (
                row.map((col, colIndex) => (
                  <td data-label={headers[colIndex]} key={colIndex}
                      onClick={() => onClick && onClick(rowIndex, colIndex)}>
                    {col}
                  </td>
                ))
              )
            }
            <td></td>
          </tr>

        ))}
        </tbody>
      </table>
    </ErrorBoundary>
  );
};

TableComponent.defaultProps = {
  sortable: false,
  initSortColumnIndex: 0,
  initSortAscending: true,
};

export default TableComponent;
