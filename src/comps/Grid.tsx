import * as React from "react";
import { Cell, ICell } from "./Cell";
import { Info } from "./Info";
import "./Grid.css";

export interface GridProps {
  data: { nofCols: number; nofRows: number; fillRatio: number };
  onClick?: any;
}

export class Grid extends React.Component<GridProps, {}> {
  state = {
    cells: [],
    showInfo: false,
    info: null
  };

  componentWillMount() {
    let data = this.props.data;
    let cells = this.randomlyGenerateCells(
      data.nofRows,
      data.nofCols,
      data.fillRatio
    );
    this.setState({ cells });
  }

  randomlyGenerateCells(
    nofRows: number,
    nofCols: number,
    fillRatio = 0.75
  ): ICell[] {
    let cells: ICell[] = [];

    for (let row = 0; row < nofRows; row++) {
      for (let col = 0; col < nofCols; col++) {
        let cell: ICell = {
          row,
          col,
          empty: Math.random() > fillRatio,
          width: 25,
          height: 25
        };
        cells.push(cell);
      }
    }

    return cells;
  }

  handleCellClick = (cell: { row: number; col: number; empty: boolean }) => {
    console.log("Cell", cell);

    if (cell.empty) return;

    this.setState({
      showInfo: true,
      info: cell
    });

    setTimeout(() => {
      this.setState({
        showInfo: false
      });
    }, 5000);
  };

  handleInfoClick = () => {
    this.setState({ showInfo: false });
  };

  render() {
    let { data } = this.props;
    let { cells } = this.state;
    let info = this.state.info;

    return (
      <div>
        Grid: {data.nofRows}x{data.nofCols}
        <div>
          {this.state.showInfo ? (
            <Info data={info} onClick={this.handleInfoClick} />
          ) : (
            ""
          )}
        </div>
        <div className="grid">
          {cells.map((cell: ICell) => (
            <Cell
              key={`k${cell.row}-${cell.col}`}
              data={cell}
              onClick={this.handleCellClick}
            />
          ))}
        </div>
      </div>
    );
  }
}
