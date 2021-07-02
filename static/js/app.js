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
};

// create the handleClick function
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    buildTable(filteredData);
};
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);