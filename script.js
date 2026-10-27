"use strict";
const employees = [
    {
        name: "Theertha Vijayakumar",
        role: "Student Developer",
        department: "Web Development",
        email: "theerthavijayakumar@mulearn"
    },
    {
        name: "Ananya",
        role: "Frontend Developer",
        department: "Web Development",
        email: "ananya@example.com"
    },
    {
        name: "Arjun",
        role: "AI Developer",
        department: "AI",
        email: "arjun@example.com"
    },
    {
        name: "Meera",
        role: "UI/UX Designer",
        department: "Design",
        email: "meera@example.com"
    }
];
function renderEmployees(list) {
    const container = document.getElementById("employeeList");
    if (!container)
        return;
    container.innerHTML = list.map(employee => `
    <div class="employee">
      <h3>${employee.name}</h3>
      <p>Role: ${employee.role}</p>
      <p>Department: ${employee.department}</p>
      <p>Email / MuID: ${employee.email}</p>
    </div>
  `).join("");
}
function searchEmployees(query) {
    const value = query.toLowerCase().trim();
    return employees.filter(employee => employee.name.toLowerCase().includes(value) ||
        employee.role.toLowerCase().includes(value) ||
        employee.department.toLowerCase().includes(value));
}
const searchInput = document.getElementById("search");
searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener("input", event => {
    const target = event.target;
    renderEmployees(searchEmployees(target.value));
});
renderEmployees(employees);
