let data = [
  { firstName: "Negar", lastName: "Mahdavi" },
  { firstName: "Mahsa", lastName: "Goodarzi" },
  { firstName: "Mahdis", lastName: "Ahmadi" },
  { firstName: "Fatima", lastName: "Esfandiyar" },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return (
    "<div>" +
    item.firstName +
    " " +
    item.lastName +
    " " +
    "is " +
    "work in narvan." +
    "</div>"
  );
});

info.innerHTML = details.join("\n");

const title = document.querySelector(".title");
const infoId = document.querySelector("#info");

title.addEventListener("click", () => {
  info.classList.add("active");
});

