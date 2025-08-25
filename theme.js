// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle")
    const themeIcon = document.getElementById("theme-icon")
  
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  
    // Set initial theme
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme)
      updateIcon(savedTheme)
    } else if (prefersDark) {
      document.documentElement.setAttribute("data-theme", "dark")
      updateIcon("dark")
    }
  
    // Toggle theme when button is clicked
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme")
      const newTheme = currentTheme === "dark" ? "light" : "dark"
  
      document.documentElement.setAttribute("data-theme", newTheme)
      localStorage.setItem("theme", newTheme)
      updateIcon(newTheme)
    })
  
    // Update icon based on current theme
    function updateIcon(theme) {
      if (theme === "dark") {
        themeIcon.classList.remove("bx-sun")
        themeIcon.classList.add("bx-moon")
      } else {
        themeIcon.classList.remove("bx-moon")
        themeIcon.classList.add("bx-sun")
      }
    }
  })
  