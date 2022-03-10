const data = [
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


////////////////////////////////////////////////////
/////////// button operations //////////////////////
const btnName = [
    {id:1, name:"All",isClick: true},
    {id:2, name:"Korea",isClick: false},
    {id:3, name:"Japan",isClick: false},
    {id:4, name:"China",isClick: false},
]

// button list render
const renderButtonList = () => {
    const subscriber = document.getElementById("btnContainer")
    subscriber.innerHTML = ""
    showButton(btnName, subscriber)
    
}

// button click update
const updateBtnName = (listId,listName) =>{
    btnName.forEach((list) => {
        if (Number(list.id) === Number(listId)) {
            return list.isClick = true
        }
        else{
            return list.isClick = false
        }
    });
    renderButtonList()
    renderMenu(listName)
}

// add button
const showButton = (list, subscriber) =>{
    list.forEach((item)=>{
        const button = document.createElement("button");

        button.setAttribute("id","btn" + item.id);
        button.innerHTML = item.name;
        if(item.isClick === true){
            button.style = "border: 3px solid rgb(99, 97, 97);"
        }
        button.className = "btn-item"
        button.onclick = (() => {
            updateBtnName(item.id,item.name)
        })
        
        subscriber.appendChild(button);
    })
}

// show menu
const renderMenu = (categoryName) =>{
    let filter = []

    if(categoryName != "All"){
        filter = data.filter((item) =>{
            if(item.category === categoryName){
                return true
            }
        })
    }
    else{
        filter = data
    }
    
    showMenu(filter)
}

const showMenu = (filteredArray) =>{
    const mainDiv = document.getElementById("sectionCenter");
    mainDiv.innerHTML = ""

    filteredArray.forEach((item)=>{
        const div_menuItems = document.createElement("div");
        div_menuItems.className = "menu-items col-lg-6 col-sm-12"
        div_menuItems.setAttribute("data-id", item.id);
        mainDiv.appendChild(div_menuItems);

        const img = document.createElement("img");
        img.className = "photo";
        img.src = item.img;
        div_menuItems.appendChild(img);


        const div_menuInfo = document.createElement("div");
        div_menuInfo.className = "menu-info"
        div_menuItems.appendChild(div_menuInfo);

        const div_menutitle = document.createElement("div");
        div_menutitle.className = "menu-title"
        div_menuInfo.appendChild(div_menutitle);

        const h4_1 = document.createElement("h4");
        h4_1.innerHTML = item.title;
        div_menutitle.appendChild(h4_1);

        const h4_2 = document.createElement("h4");
        h4_2.innerHTML = item.price;
        h4_2.className = "price";
        div_menutitle.appendChild(h4_2);


        const div_menuText = document.createElement("div");
        div_menuText.className = "menu-text"
        div_menuText.innerHTML = item.desc;
        div_menuInfo.appendChild(div_menuText);

    })
    
}

////////////////////////////////////////////////////
renderButtonList()
renderMenu("All")