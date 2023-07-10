function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0;
  } else {
    return number_value;
  }
}

document.getElementById("comment-btn").addEventListener("click", (event) => {
  let element_comments_list = document.getElementById("comments-list");
  let new_div = document.createElement("div");
  new_div.innerText = document.getElementById("comment-field").value;

  element_comments_list.appendChild(new_div);
});
