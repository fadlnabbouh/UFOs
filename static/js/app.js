// import data from data.js 
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// create buildTable function
function buildTable(data) {
    // clear table
    tbody.html("");

    // loop through each object and append a row for each value
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // loop through each field and add value to table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}