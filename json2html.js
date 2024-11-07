// json2html.js
export default function json2html(data) {
    // Get all unique keys to use as headers in the table
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    // Start building the HTML table
    let html = `<table data-user="mercybandaru2@gmail.com">\n`;
    html += "  <thead>\n    <tr>";
  
    // Create table headers
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
  
    html += "</tr>\n  </thead>\n  <tbody>\n";
  
    // Create table rows
    data.forEach(row => {
      html += "    <tr>";
      headers.forEach(header => {
        html += `<td>${row[header] ?? ""}</td>`;
      });
      html += "</tr>\n";
    });
  
    html += "  </tbody>\n</table>";
  
    return html;
  }
  