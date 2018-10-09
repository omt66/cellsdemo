import * as React from "react";
import "./Cell.css";

export interface ICell {
  row: number
  col: number
  empty: boolean
  width: number
  height: number
}

export interface ICellProps {
  data: ICell;
  onClick?: any;
}

export class Cell extends React.Component<ICellProps, {}> {
  render() {
    let { data, onClick } = this.props;
    let cName = "cell " + (data.empty ? "cell-empty": "");

    let w = data.width;
    let h = data.height;
    let top = data.row*w + "px";
    let left = data.col*h + "px";
    let width = w + "px";
    let height = h + "px";

    return (
      <div 
        className={cName} 
        style={{ top, left, width, height}}
        onClick={e => onClick(data)} >
        
      </div>
    );
  }
}
