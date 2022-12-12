let myHeading = document.querySelector("h1");
myHeading.textContent = "This is my website.";

function item1button() {
  const i1 = document.getElementById("item1Info");
  // 取得 `foo` 的 class 列表。
  // `toggle` 會賦予元素給定的 class，或是移除給定的 class，
  // 取決於 class 是否已經存在
  i1.classList.toggle("invisible");
}
function item2button() {
  const i2 = document.getElementById("item2Info");
  // 取得 `foo` 的 class 列表。
  // `toggle` 會賦予元素給定的 class，或是移除給定的 class，
  // 取決於 class 是否已經存在
  i2.classList.toggle("invisible");
}
