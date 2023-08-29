const containerMenus = document.querySelector(".menus .data-menus");

// fetch data dari api/path
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // JSON to object
    let dataMenus = JSON.parse(this.responseText);
    let menu = dataMenus.menu;

    // tampilkan data
    let output = "";
    menu.forEach((i) => {
      output += `
      <div
      class="card w-full h-max lg:w-1/5 bg-white shadow-lg overflow-hidden"
    >
      <img src="data/img/pizza/${i.gambar}" class="w-full" alt="" />
      <div class="dec p-5">
        <h1 class="text-2xl font-semibold">${i.nama}</h1>
        <p class="py-2 text-base">
        ${i.deskripsi}
        </p>
        <p class="text-xl font-semibold">Rp. ${i.harga} ,-</p>
        <button
          class="mt-3 rounded-md font-normal bg-secondary p-2 text-white"
        >
          Beli sekarang
        </button>
      </div>
    </div>
      `;
    });

    console.log(menu);
    containerMenus.innerHTML = output;
  }
};
xhr.open("GET", "./data/pizza.json", true);
xhr.send();


const menuItems = document.querySelector(".items");
// menu active fungtion
  window.onload = () => {
    menuItems.addEventListener("click", (e) => {
      if (e.target.classList.contains("item")) {
        menuItems.querySelector(".text-primary").classList.remove("text-primary");
        e.target.classList.add("text-primary");
      }

      // fillter menu by category
      let category = e.target.innerText;
      document.querySelector(".menus .title").innerHTML = category;
    });
  };


// menu bars
const bars = document.querySelector('.bars');
const menuPhone = document.querySelector('.menu-phone');

bars.addEventListener('click', ()=>{
  menuPhone.classList.toggle('active');
  // alert('ok')
})