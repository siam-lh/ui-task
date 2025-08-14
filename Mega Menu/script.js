document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar-drawer");
  const closeBtn = document.getElementById("close-drawer");
  const hamburgerBtn = document.getElementById("hamburger-icon");
  const sidebarItems = document.querySelector(".sidebar-drawer");
  const ul = sidebarItems.querySelector(".sidebar-drawer-items ul");
  const contents = sidebarItems.querySelectorAll(".drawer-item-contents");

  const backBtn = sidebarItems.querySelector(".back-btn");
  const logo = sidebarItems.querySelector(".stripe-logo");

  hamburgerBtn.addEventListener("click", function () {
    sidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("active");
    ul.style.display = "flex";
    contents.forEach((c) => (c.style.display = "none"));
    backBtn.style.display = "none";
    logo.style.display = "block";
  });

  backBtn.style.display = "none";

  contents.forEach((c) => (c.style.display = "none"));

  ul.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      const targetId = li.dataset.target;
      ul.style.display = "none";
      logo.style.display = "none";
      backBtn.style.display = "flex";

      contents.forEach((c) => {
        c.style.display = c.id === targetId ? "block" : "none";
      });
    });
  });

  backBtn.addEventListener("click", () => {
    contents.forEach((c) => (c.style.display = "none"));
    ul.style.display = "flex";
    backBtn.style.display = "none";
    logo.style.display = "block";
  });
});
