import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "../../src/";

class Example extends React.Component {

  render() {

    const columns = ["Name", "Title", "Location"];

    const data = [
      ["Gabby George", "Business Analyst", "Minneapolis"],
      ["Aiden Lloyd", "Business Consultant", "Dallas"],
      ["Jaden Collins", "Attorney", "Santa Ana"],
      ["Franky Rees", "Business Analyst", "St. Petersburg"],
      ["Aaren Rose", null, "Toledo"]
    ];


    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'stacked',
    };

    return (
      <MUIDataTable data={data} columns={columns} options={options} />
    );

  }
}

ReactDOM.render(<Example />, document.getElementById("app-root"));
