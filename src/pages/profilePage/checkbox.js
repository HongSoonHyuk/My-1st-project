const allAgree = document.querySelector("#allAgree");
const agrees = document.querySelectorAll(
  "input[type='checkbox'][name='agrees']"
);
const resetButton = document.querySelector("#reset");
const submitButton = document.querySelector("#save");
const savePopup = document.querySelector("#save-popup");
const closeButton = savePopup.querySelector("button");

allAgree.addEventListener("change", (e) => {
  const isChecked = e.target.checked;
  agrees.forEach((agree) => {
    agree.checked = isChecked;
  });
  toggleSubmitButton();
});

agrees.forEach((agree) => {
  agree.addEventListener("change", updateDisplay);
});

function updateDisplay() {
  const checkedCount = [...agrees].filter((agree) => agree.checked).length;
  allAgree.checked = checkedCount === agrees.length;
  allAgree.indeterminate = checkedCount > 0 && checkedCount < agrees.length;
  toggleSubmitButton();
}

function toggleSubmitButton() {
  submitButton.disabled = ![...agrees].every((agree) => agree.checked);
}

resetButton.addEventListener("click", () => {
  submitButton.disabled = true;
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // 기본 동작 방지
  savePopup.classList.remove("hidden"); // 모달 보이기
});

closeButton.addEventListener("click", () => {
  savePopup.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    savePopup.classList.add("hidden");
  }
});

document.addEventListener("click", (e) => {
  if (!savePopup.contains(e.target) && e.target !== submitButton) {
    savePopup.classList.add("hidden");
  }
});
