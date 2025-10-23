// script.js

// Function to download CSV with sample resume data
function downloadcsv() {
  const csvContent = [
    ["Name", "M RAIHAN kHANAM"],
    ["College", "SRIKRISHNA ADITHYA COLLEGE OF ARTS AND SCIENCE"],
    ["Skills", "C, C++, Web Design, Soft Skills"],
    ["Projects", "Lexical Analyzer, Student Attendance Portal"],
    ["Achievements", "2nd Place Coding Contest (2024), Web Dev Certificate (2025)"]
  ]
    .map(row => row.join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.setAttribute("href", URL.createObjectURL(blob));
  link.setAttribute("download", "resume.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Form submission handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Simulate form submission
  alert(`Thank you, ${name}! Your message has been sent.`);
  this.reset();
});