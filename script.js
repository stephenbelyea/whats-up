const setTodaysDate = (dateText) => {
  const date = new Date();
  dateText.textContent = date.toLocaleString("en-CA", { dateStyle: "full" });
};

const setToggleButtons = (toggleButtons) => {
  toggleButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
      const button = e.target;
      const sectionName = button.getAttribute("data-section");
      const panel = document.getElementById(`${sectionName}-panel`);

      if (button.getAttribute("aria-expanded") === "true") {
        button.textContent = `Show all ${sectionName}`;
        button.setAttribute("aria-expanded", "false");
        panel.setAttribute("aria-hidden", "true");
      } else {
        button.textContent = `Hide all ${sectionName}`;
        button.setAttribute("aria-expanded", "true");
        panel.setAttribute("aria-hidden", "false");
      }
    });
  });
};

setTodaysDate(document.getElementById("date"));
setToggleButtons(document.querySelectorAll("button.toggle"));
