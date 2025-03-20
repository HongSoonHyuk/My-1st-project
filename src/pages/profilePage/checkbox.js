const allAgree = document.querySelector("#allAgree");
const agree = document.querySelectorAll("ul input");
const submitButton = document.querySelector("#save");

allAgree.addEventListener("click", (e) => {
  e.preventDefault();
});

for (const agree of agrees) {
  agree.addEventListener("click", updateDisplay);
}

function toggleSubmitButton() {
  if (allAgree.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function updateDisplay() {
  const checkedCount = [...agrees].filter((agree) => agree.checked).length;

  if (checkedCount === 0) {
    allAgree.checked = false;
    allAgree.indeterminate = false;
  } else if (checkedCount < agrees.length) {
    allAgree.checked = false;
    allAgree.indeterminate = true;
  } else {
    allAgree.checked = true;
    allAgree.indeterminate = false;
  }

  toggleSubmitButton();
}
