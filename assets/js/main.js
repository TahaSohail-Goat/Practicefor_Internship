document.addEventListener("DOMContentLoaded", () => {
	const themeToggle = document.getElementById("theme-toggle");
	const root = document.documentElement;
	const storageKey = "portfolio-theme";

	const getSystemTheme = () =>
		window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";

	const applyTheme = (theme) => {
		root.setAttribute("data-theme", theme);
		themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
		themeToggle.textContent = theme === "dark" ? "Switch to Light Mode" : "Toggle Dark Mode";
	};

	const savedTheme = window.localStorage.getItem(storageKey);
	const initialTheme = savedTheme || getSystemTheme();

	applyTheme(initialTheme);

	themeToggle.addEventListener("click", () => {
		const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
		window.localStorage.setItem(storageKey, nextTheme);
		applyTheme(nextTheme);
	});
});
