const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

    //DOM ELEMENTS

    const sectionDOM = document.querySelector('.section-center')
    const btnContainer = document.querySelector('.btn-container');
    

    //**** KATEGORİ SAYISINI BULMA **** 

let allCategory =menu.map(item => { // --> Burada bütün category içeriğini bir arrayin içine alıyoruz
       return item.category
})

    let categoryCount = allCategory.reduce((acc,item) => {   // --> Burada allCategory içindeki tekrarlayan elemanları silip yeni bir array oluşturuyoruz
        if(!acc.includes(item)) {
            acc.push(item)
        }
        return acc
    }, [])

  let categories = ["All",...categoryCount] // --> Burada All kategorisini ekleyerek elde ettiğimiz arrayi categories içerisine aktarıyoruz.
                                            // --> Yeni arrayimizin içeriği şu anda ["All","Korea","Japan","China"] 

  categories.forEach((category,i) => {   // --> Burada yeni oluşturduğumuz arrayi dönerek butonlarımızı html sayfasına ekliyoruz
    createBtn(category);
  })

  //*** BİTİŞ *** 


  // BUTTON DOM ELEMENTS
  const allBtn = document.querySelector('#all')
  const koreaBtn=document.querySelector('#korea')
  const japanBtn=document.querySelector('#japan')
  const chinaBtn =document.querySelector('#china')

   // BUTTON EVENT LİSTENER
  allBtn.addEventListener('click',getAll)
  koreaBtn.addEventListener('click',getKorea);
  japanBtn.addEventListener('click',getJapan);
  chinaBtn.addEventListener('click',getChina);


  //FONKSİYONLAR

  function createBtn(name) { // --> Buton elementini bu fonksiyon ile oluşturuyoruz(id kısmına name parametresi veriyoruz ki dom elementini id olarak alabilelim.)
    let btn = `<button class="btn btn-outline-dark" id="${name.toLowerCase()}">${name}</button>`
    btnContainer.innerHTML += btn
   }



  function getAll() { // getAll fonksiyonu ile menu dizisindeki tüm elemanları getiriyoruz.
                      // (Aynı zamanda html sayfasında body elementinin onload eventine getAll fonksiyonunu atıyoruz ki sayfa yüklendiğinde tüm menü içeriğini sayfada görelim)
    listItems = menu.map(item => {
      sectionDOM.innerHTML += `<div class="menu-items col-lg-6 col-sm-12">
      <img src=${item.img} alt=${item.title} class="photo">
      <div class="menu-info">
      <div class="menu-title">
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">${item.desc}</div>
      </div>
      </div>`
      
   })
  }

  function getKorea() { // getKorea fonksiyonunda önce menu dizisini filter methodu ile categorysi sadece Korea olanları alıp daha sonra map ediyoruz.
    sectionDOM.innerHTML ="" // -> Burada sectionDOM içeriğini boşaltıyoruz ki var olan elemanların üzerine yazmasın diye 
    let korea = menu.filter(item => item.category === "Korea").map(item => {
      sectionDOM.innerHTML += `<div class="menu-items col-lg-6 col-sm-12">
      <img src=${item.img} alt=${item.title} class="photo">
      <div class="menu-info">
      <div class="menu-title">
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">${item.desc}</div>
      </div>
      </div>`
    })
  }

  function getJapan() {  // --> getJapan fonksiyonunda önce menu dizisini filter methodu ile categorysi sadece Japan olanları alıp daha sonra map ediyoruz.
    sectionDOM.innerHTML ="" 
    let japan = menu.filter(item => item.category === "Japan").map(item => {
      sectionDOM.innerHTML += `<div class="menu-items col-lg-6 col-sm-12">
      <img src=${item.img} alt=${item.title} class="photo">
      <div class="menu-info">
      <div class="menu-title">
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">${item.desc}</div>
      </div>
      </div>`
    })
  }
  function getChina() {  // getChina fonksiyonunda önce menu dizisini filter methodu ile categorysi sadece China olanları alıp daha sonra map ediyoruz.
    sectionDOM.innerHTML ="" 
    let china = menu.filter(item => item.category === "China").map(item => {
      sectionDOM.innerHTML += `<div class="menu-items col-lg-6 col-sm-12">
      <img src=${item.img} alt=${item.title} class="photo">
      <div class="menu-info">
      <div class="menu-title">
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">${item.desc}</div>
      </div>
      </div>`
    })
  }


