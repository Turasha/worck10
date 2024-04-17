// //new promice

// let lottery = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (Math.random() >= 0.5) {
//             resolve("you win");
//           } else {
//             reject("you lost");
//           }
//     },  3000);

// });

// lottery
//   .then((Response) => console.log(Response))
//   .catch((error) => console.log(error));

//   //აქ გვაქვს ფუნქცია სადაც ვაბრუნებინებტ პირობას

//   let wait=function(second){
//     return new Promise(function(resolve){
//         setTimeout(resolve, second * 1000)
//     })
//   }

//   wait(3)
//   .then(()=>{
//     console.log('3 second later');
//     return wait(2)
//   }).then(()=>{
//     console.log('2second later');
//   })

//practice
// let imgContainer = document.querySelector(".images");
// let currentImage;
// let api =document.getElementById('api')

// let wait = function (second) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, second * 1000);
//   });
// };

// let createImgEelement = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     let imgNewEl = document.createElement("img");
//     imgNewEl.src = imgPath;

//     imgNewEl.addEventListener("load", function () {
//       imgContainer.appendChild(imgNewEl);
//       resolve(imgNewEl);
//     });

//     imgNewEl.addEventListener("error", function () {
//       reject(new error("img not found"));
//     });
//   });
// };
// createImgEelement("images/img1.jpg")
//   .then((image) => {
//     currentImage=image
//     console.log("image load");
//     return wait(2)
//   })
//   .then(()=>{
//     currentImage.style.display='none'
//     return createImgEelement('images/img2.jpeg')
//   })
//   .then((image)=>{
//     currentImage=image
//     console.log();
//     return wait(2)
//   })
//   .then((image)=>{
//     currentImage.style.display='none'
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//  async  await

//   let input=document.getElementById('input-filter')
//   let ulElement=document.getElementById('result')
//   let listItems=[]
//   function test1(){
//     setTimeout(() => {
//         console.log('hello1');
//     }, 3000);
//   }
//   function test2(){
//     setTimeout(() => {
//         console.log('hello1');
//     }, 2000);
//   }

//   async function testfnc(){
//     await test1()
//     await test2()
//   }

// testfnc();

//  async  await with fetch

// let input = document.getElementById("input-filter");
// let ulElement = document.getElementById("result");
// let listItems = [];

// async function asyncfnc() {
//   let response = await fetch("https://reqres.in/api/users?page=2");
//   console.log(response);
//   if (!response.ok) {
//     throw new Error("cent fatch data");
//   }
//   let responsedata = await response.json();
//   responsedata.data.forEach((element) => {
//     let li = document.createElement("li");
//     li.textContent = `${element.first_name} ${element.last_name}`;
//     listItems.push(li);
//     ulElement.appendChild(li);
//   });
// }

// asyncfnc();

// function filtreData(searchItem) {
//   listItems.forEach((item) => {
//     if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
//       item.classList.remove("active");
//     } else {
//       item.classList.add("active");
//     }
//   });
// }

// input.addEventListener("keyup", function () {
//   filtreData(this.value);
// });

// .then((mosuliInfo)=>{
//     let p =document.createElement('p')
//   p. innerText =mosuliInfo.data[1].first_name
//     api.appendChild(p)

// }).catch((error)=>console.log(error))

let wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

//
let imgConteinr = document.querySelector(".images");
let currentImage;
let createImgElement = function (imagePath) {
  return new Promise(function (resolve, reject) {
    let imageNewEl = document.createElement("img");
    imageNewEl.src = imagePath;

    imageNewEl.addEventListener("load", function () {
      imgConteinr.appendChild(imageNewEl);
      resolve(imageNewEl);
    });
    imageNewEl.addEventListener("error", function () {
      reject(new Error("image not found"));
    });
  });
};

createImgElement("images/img1.jpg")
  .then((image) => {
    currentImage = image;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImgElement("images/img2.jpeg");
  })
  .then((image) => {
    currentImage = image;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
  })
  .catch((error) => {
    console.log(error);
  });

// async await

let input = document.getElementById("input-filter");
let ulElement = document.getElementById("result");
let listItems = [];

async function asyncfnc() {
  try {
    let response = await fetch("https://reqres.in/api/users?page=2");
    if (!response.ok) {
      throw new Error("cent fatch data");
    }
    let responsedata = await response.json();
    responsedata.data.forEach((element) => {
      let li = document.createElement("li");
      li.textContent = `${element.first_name} ${element.last_name}`;
      listItems.push(li);
      ulElement.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
}

asyncfnc();

function filtreData(serchitem) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(serchitem.toLowerCase())) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
}

input.addEventListener("keyup", function () {
  filtreData(this.value);
});
