var student1 = {
    firstName: "hafed",
    lastName: "inoubli",
    age: 26,
    location: "Tunisia"
};
var student2 = {
    firstName: "coucou",
    lastName: "coucou",
    age: 25,
    location: "Canada"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
document.body.appendChild(table);
var thead = document.createElement('thead');
thead.innerHTML = '<tr><th>firstName</th><th>location</th></tr>';
table.appendChild(thead);
var tbody = document.createElement('tbody');
table.appendChild(tbody);
for (var i = 0; i < studentsList.length; i++) {
    var row = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    th1.innerHTML = studentsList[i].firstName;
    th2.innerHTML = studentsList[i].location;
    row.appendChild(th1);
    row.appendChild(th2);
    tbody.appendChild(row);
}
