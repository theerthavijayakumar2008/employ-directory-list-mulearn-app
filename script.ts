interface Employee {
  name: string;
  role: string;
  department: string;
  email: string;
}

type Department = "Web Development" | "AI" | "Design";

const employees: Employee[] = [
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

function renderEmployees(list: Employee[]): void {
  const container = document.getElementById("employeeList");

  if (!container) return;

  container.innerHTML = list.map(employee => `
    <div class="employee">
      <h3>${employee.name}</h3>
      <p><strong>Role:</strong> ${employee.role}</p>
      <p><strong>Department:</strong> ${employee.department}</p>
      <p><strong>Email / MuID:</strong> ${employee.email}</p>
    </div>
  `).join("");
}

function searchEmployees(query: string): Employee[] {
  const value = query.toLowerCase().trim();

  return employees.filter(employee =>
    employee.name.toLowerCase().includes(value) ||
    employee.role.toLowerCase().includes(value) ||
    employee.department.toLowerCase().includes(value)
  );
}

const searchInput = document.getElementById("search");

searchInput?.addEventListener("input", event => {
  const target = event.target as HTMLInputElement;
  renderEmployees(searchEmployees(target.value));
});

renderEmployees(employees);
