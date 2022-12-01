const imgDiv = document.querySelector(".user-img");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadebtn = document.querySelector("#uploadbtn");

function importData() {
  let input = document.createElement("input");
  input.type = "file";
  input.onchange = (_) => {
    // you can use this method to get file and perform respective operations
    let files = Array.from(input.files);
    // console.log(files);
    const file = files;
    // console.log(file[0]);
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      img.setAttribute("src", reader.result);
    });
    reader.readAsDataURL(file[0]);
  };
  input.click();
}
// file.addEventListener("change", function () {
//   const chosedfile = this.files[0];
//   if (chosedfile) {
//     const reader = new FileReader();

//     reader.addEventListener("load", function () {
//       img.setAttribute("src", reader.result);
//     });
//     reader.readAsDataURL(chosedfile);
//   }
// });
