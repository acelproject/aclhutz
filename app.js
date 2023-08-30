const containerMenus = document.querySelector(".menus .data-menus");

const viewAllMenus = () => {
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
      class="card w-full h-max lg:w-1/5 mr-4 mb-4 bg-white shadow-lg overflow-hidden"
    >
      <img src="data/img/pizza/${i.gambar}" class="w-full" alt="" />
      <div class="dec p-5">
        <h1 class="text-lg font-semibold">${i.nama}</h1>
        <p class="py-2 text-sm">
        ${i.deskripsi}
        </p>
        <p class="text-lg font-semibold">Rp. ${i.harga} ,-</p>
        <button
          class="mt-3 rounded-md font-normal bg-secondary p-2 text-white text-sm"
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
};

viewAllMenus();

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

    if (category == "All Menus") {
      const setloading = ' <div class="text-slate-600 text-2xl">... Sedang memuat ...</div>';
      containerMenus.innerHTML = setloading;
      setTimeout(viewAllMenus,1000);
      return;
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // JSON to object
        let dataMenus = JSON.parse(this.responseText);
        let menu = dataMenus.menu;

        // tampilkan data
        let content = "";
        menu.forEach((i) => {
          if (i.kategori == category.toLowerCase())
            content += `
      <div
      class="card w-full h-max lg:w-1/5 mr-4 mb-4 bg-white shadow-lg overflow-hidden"
    >
      <img src="data/img/pizza/${i.gambar}" class="w-full" alt="" />
      <div class="dec p-5">
        <h1 class="text-lg font-semibold">${i.nama}</h1>
        <p class="py-2 text-sm">
        ${i.deskripsi}
        </p>
        <p class="text-lg font-semibold">Rp. ${i.harga} ,-</p>
        <button
          class="mt-3 rounded-md font-normal bg-secondary p-2 text-white text-sm"
        >
          Beli sekarang
        </button>
      </div>
    </div>
      `;
        });
    
        
        const setloading = '<div class="text-slate-600 text-2xl w-max mx-auto">... Sedang memuat ...</div>';
        containerMenus.innerHTML = setloading;
        
        const readyContent = ()=>{
          containerMenus.innerHTML = content;
        }
        setTimeout(readyContent,1000);
        
      }
    };
    xhr.open("GET", "./data/pizza.json", true);
    xhr.send();
  });
};

// menu bars
const bars = document.querySelector(".bars");
const menuPhone = document.querySelector(".menu-phone");

bars.addEventListener("click", () => {
  menuPhone.classList.toggle("active");
  // alert('ok')
});
