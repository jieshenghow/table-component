export interface TableProps{
  headers: string[];
  rows: any[][];
  onClick?: (rowIndex: number, columnIndex: number) => void;
  className?: string;
}
