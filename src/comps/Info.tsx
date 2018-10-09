import * as React from "react";
import "./Info.css";

export interface IInfoProps {
  data: { row: number; col: number; empty: boolean };
  onClick?: any;
}

export class Info extends React.Component<IInfoProps, {}> {
  render() {
    let { data, onClick } = this.props;

    return (
      <div className="info-bg">
        <div className="info" onClick={onClick}>
          <h4>Cell Info</h4>
          <hr />
          Row: {data.row}
          <br />Col: {data.col}
          <br />
          {data.empty ? " (empty cell)" : ""}
        </div>
      </div>
    );
  }
}
