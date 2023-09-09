const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

let loadingScreen = document.getElementById("loading")

let listCard = document.getElementById("list-card");
let listSection = document.getElementById("list");

let mealsCard = document.getElementById("meals-card");
let mealsSection = document.getElementById("meals");

let mealCard = document.getElementById("card-det");
let mealSection = document.getElementById("meal-det");

let categoryCard = document.getElementById("category-card");
let categorySection = document.getElementById("category");

let searchSection = document.getElementById("search");
let searchCard = document.getElementById("search-card");

let contactSection = document.getElementById("contact");

let loadingsearch = document.getElementById("loadingsearch")
let iconCloseChange = document.getElementById("icon-change");

let sidebar = document.getElementById("sidebar");

let repasswordAlert = document.getElementById("repassword")
let passwordAlert = document.getElementById("password")

const regexName = /^[a-zA-Z\s]+$/
const regexEmail = /^[\w-\.]+@[\w-]{3}(\.)[\w-]{3}$/g;
const regexAge = /^[1-9][0-9]$/
const regexPhone = /^([+]\d{2}){0,1}\d{11}$/
const regexPassword = /^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{8,}$/
//validation 
function checkRegex(x , location) {

    switch (location) {
        case 'name':
          regexSol(regexName  , document.getElementById("name") , x)
        break;
        case 'age': 
        regexSol(regexAge  , document.getElementById("age") , x)
        break;
        case 'email':
          regexSol(regexEmail  , document.getElementById("email") , x)
        break;
        case 'phone':
          regexSol(regexPhone  , document.getElementById("phone") , x)
        break;
        case 'password':
          regexSol(regexPassword  , document.getElementById("password") , x)
        break;
        case 'repassword': 
        if (document.getElementById("pass").value == document.getElementById("repass").value) {
          if (repasswordAlert.classList.contains("show")) {
            repasswordAlert.classList.replace('show','hide')
          }        
        }else{
          if (repasswordAlert.classList.contains("hide")) {
            repasswordAlert.classList.replace('hide','show')
          }
        }
        break;
      default:
        break;
    }
  }
  function regexSol(regexx , alert , term) {
    if (regexx.test(term)) {
      alert.classList.replace('show','hide')
    } else{
      if (alert.classList.contains("hide")) {
        alert.classList.replace('hide','show')
      }
    }
  }
//======================== sidebar =================================
$(".sidebar li:first-child").animate({top: 0}, 400)
$(".sidebar li:nth-child(2)").animate({top: 0}, 500)
$(".sidebar li:nth-child(3)").animate({top: 0}, 600)
$(".sidebar li:nth-child(4)").animate({top: 0}, 700)
$(".sidebar li:nth-child(5)").animate({top: 0}, 800)  
$(document).ready(async function(){
  open("")
  $('#loading').fadeOut(500, ()=>{
    loadingScreen.classList.replace('show','hide')
  })

})
async function open(term){
  iconClose()
  response = await fetch(`${BASE_URL}/search.php?s=${term}`);
  const data = await response.json();
  const result = data.meals;
  let cartoona = "";
  for (let i = 0; i < result.length; i++) {
    cartoona += `
        <div class="card" onclick=displayMeal('${
          result[i].idMeal ? result[i].idMeal : result[i].idCategory
        }')>
        <picture><img src="${result[i].strMealThumb}" alt="${
      result[i].strMealThumb
    } photo"></picture>
        <div class="layer">
            <h3>${result[i].strMeal}</h3>
        </div>
            </div>
        `;
  } 
  mealsCard.innerHTML = cartoona;
}
  //======================== sidebar =================================
function iconClose() {
  let sidebarWidth = $(".sidebar").innerWidth();
  if ($("nav").css("left") == `0px`) {
    $(".sidebar li").animate({top: 400}, 500)
    $("nav").animate({ left: -sidebarWidth }, 500);
    iconCloseChange.classList.remove("fa-xmark");
    iconCloseChange.classList.add("fa-bars");
  } else {
    $(".sidebar li:first-child").animate({top: 0}, 400)
    $(".sidebar li:nth-child(2)").animate({top: 0}, 500)
    $(".sidebar li:nth-child(3)").animate({top: 0}, 600)
    $(".sidebar li:nth-child(4)").animate({top: 0}, 700)
    $(".sidebar li:nth-child(5)").animate({top: 0}, 800)   
    $("nav").animate({ left: 0 }, 500);
    iconCloseChange.classList.remove("fa-bars");
    iconCloseChange.classList.add("fa-xmark");
  }
}
//========================== Show Section =================================
function searchFun(){
  iconClose()
  if (searchSection.classList.contains("hide")) {
    searchSection.classList.replace("hide", "show");
  }
  if (contactSection.classList.contains("show")) {
    contactSection.classList.replace("show", "hide");
  }
  if (listSection.classList.contains("show")) {
    listSection.classList.replace("show", "hide");
  } 
   if (mealSection.classList.contains("show")) {
    mealSection.classList.replace("show", "hide");
  }  
   if (mealsSection.classList.contains("show")) {
    mealsSection.classList.replace("show", "hide");
  } 
   if (categorySection.classList.contains("show")) {
    categorySection.classList.replace("show", "hide");
  }
}
function contact(){
  iconClose()
  if (contactSection.classList.contains("hide")) {
    contactSection.classList.replace("hide", "show");
  }
  if (searchSection.classList.contains("show")) {
    searchSection.classList.replace("show", "hide");
  }
  if (listSection.classList.contains("show")) {
    listSection.classList.replace("show", "hide");
  } 
   if (mealSection.classList.contains("show")) {
    mealSection.classList.replace("show", "hide");
  }  
   if (mealsSection.classList.contains("show")) {
    mealsSection.classList.replace("show", "hide");
  } 
   if (categorySection.classList.contains("show")) {
    categorySection.classList.replace("show", "hide");
  }
}
function categories() {
  iconClose()
  if (listSection.classList.contains("show")) {
    listSection.classList.replace("show", "hide");
  } 
   if (mealSection.classList.contains("show")) {
    mealSection.classList.replace("show", "hide");
  }  
   if (mealsSection.classList.contains("show")) {
    mealsSection.classList.replace("show", "hide");
  } 
   if (categorySection.classList.contains("hide")) {
    categorySection.classList.replace("hide", "show");
  }
  if (searchSection.classList.contains("show")) {
    searchSection.classList.replace("show", "hide");
  }
  if (contactSection.classList.contains("show")) {
    contactSection.classList.replace("show", "hide");
  }
  getCategory();
}
function area() {  
  iconClose()
  getList("a", "list" , 'area');
}
function ingredients() {
  iconClose()
  getList("i", "list" , 'ingredients');
}
//========================== Get Data Section =================================
//Get List == integdients | Areas
async function getList(char, name , typeData) {
  $('#loading').fadeIn(0)
  switch (char) {
    case "a":
    case "i":
      response = await fetch(`${BASE_URL}/list.php?${char}=${name}`);
      break;

    default:
      response = await fetch(`${BASE_URL}/list.php?c=${name}`);
      break;
  }
  const data = await response.json();
  const result = data.meals;
  await displayList(result , typeData);
  $('#loading').fadeOut(500)
}
//Get Meals and display Meals
async function getMeals(data, char = "c") {
  $('#loading').fadeIn(0)
  if (listSection.classList.contains("show")) {
    listSection.classList.replace("show", "hide");
  } 
   if (mealSection.classList.contains("show")) {
    mealSection.classList.replace("show", "hide");
  } 
  
   if (mealsSection.classList.contains("hide")) {
    mealsSection.classList.replace("hide", "show");
  } 

   if (categorySection.classList.contains("show")) {
    categorySection.classList.replace("show", "hide");
  }

  let response = await fetch(
    `${BASE_URL}/filter.php?${char}=${data == "i" || "a" ? data : "c"}`
  );
  const responseData = await response.json();
  const result = responseData.meals;
  let cartoona = "";
  for (let i = 0; i < result.length; i++) {
    cartoona += `
        <div class="card" onclick=displayMeal('${
          result[i].idMeal ? result[i].idMeal : result[i].idCategory
        }')>
        <picture><img src="${result[i].strMealThumb}" alt="${
      result[i].strMealThumb
    } photo"></picture>
        <div class="layer">
            <h3>${result[i].strMeal}</h3>
        </div>
            </div>
        `;
  } 
  mealsCard.innerHTML = cartoona;
  $('#loading').fadeOut(500)
}
//Get Categories
async function getCategory() {
  $('#loading').fadeIn(0)
  const response = await fetch(`${BASE_URL}/categories.php`);
  const data = await response.json();
  const result = data.categories;
  let cartoona = "";
  for (let i = 0; i < result.length; i++) {
    
    cartoona += `
    <div class="card" onclick=getMeals('${result[i].strCategory}')>
    <picture><img src="${result[i].strCategoryThumb}" alt="${result[i].strCategory} photo"></picture>
    <div class="layer">
        <h3>${result[i].strCategory}</h3>
        <p>${result[i].strCategoryDescription}</p>
    </div>
        </div>
    `;
  }
  categoryCard.innerHTML = cartoona;
  $('#loading').fadeOut(0)
}
//========================== Display Data Section =================================
//Display List == integdients | Areas 
async function displayList(data , typeData) {
  if (listSection.classList.contains("hide")) {
    listSection.classList.replace("hide", "show");
  } 
   if (mealSection.classList.contains("show")) {
    mealSection.classList.replace("show", "hide");
  }  
   if (mealsSection.classList.contains("show")) {
    mealsSection.classList.replace("show", "hide");
  } 
   if (categorySection.classList.contains("show")) {
    categorySection.classList.replace("show", "hide");
  }
  if (searchSection.classList.contains("show")) {
    searchSection.classList.replace("show", "hide");
  }
  if (contactSection.classList.contains("show")) {
    contactSection.classList.replace("show", "hide");
  }

  let cartoona = "";
  for (let i = 0; i < 20; i++) {
   
    cartoona += `
    <div class="card" onclick="getMeals( '${
      data[i].strArea ? data[i].strArea : data[i].strIngredient
    }' , '${data[i].strArea ? "a" : "i"}' )">
        <i class="${
          data[i].strArea ? "show" : "hide"
        } fa-solid fa-house-laptop"></i>                
        <h3  class="${data[i].strArea ? "show" : "hide"}">${
      data[i].strArea
    }</h3>
    <div class="${data[i].strIngredient ? 'show' : 'hide'}">
    <i class="fa-solid fa-drumstick-bite fa-2xl"></i>
    </div>
        <h3  class="${data[i].strIngredient ? "show" : "hide"}" >${
      data[i].strIngredient
    }</h3>
        <h3  class="${data[i].strCategory ? "show" : "hide"}">${
      data[i].strCategory
    }</h3>
        <p  class="${data[i].strDescription ? "show" : "hide"}"">${
      data[i].strDescription?.split(" ").slice(0,25).join(" ")
    }</p>
    </div>
    `;
  }
  listCard.innerHTML = cartoona;
}
//Display Meal == integdients | Areas | Categries
async function displayMeal(data) {
  $('#loading').fadeIn(0)
 
  if (listSection.classList.contains("show")) {
    listSection.classList.replace("show", "hide");
  } 
   if (mealSection.classList.contains("hide")) {
    mealSection.classList.replace("hide", "show");
  } 
   if (mealsSection.classList.contains("show")) {
    mealsSection.classList.replace("show", "hide");
  } 
   if (categorySection.classList.contains("show")) {
    categorySection.classList.replace("show", "hide");
  }
  if (searchSection.classList.contains("show")) {
    searchSection.classList.replace("show", "hide");
  }
  if (contactSection.classList.contains("show")) {
    contactSection.classList.replace("show", "hide");
  }

  let response = await fetch(`${BASE_URL}/lookup.php?i=${data}`);
  const getData = await response.json();
  const mealData = getData.meals[0];

  //Recipes
  let recipes = "";
  for (let i = 1; i <= 20; i++) {
    if (mealData[`strIngredient${i}`]) {
      recipes += `<li>${mealData[`strMeasure${i}`]} ${
        mealData[`strIngredient${i}`]
      } </li>`;
    }
  }
  //tags
  let tagsData = "";
  const tags = mealData.strTags;
  if (tags) {
    let tagsArr = tags?.split(",");
  for (let i = 0; i <= tagsArr.length; i++) {
    if (tagsArr[i] == undefined) {
    }else{
      tagsData += `<li>${tagsArr[i]}</li>`;
    }
  }
  }

  let cartoona = `
  <div class="card-det-img">
                    <picture><img src="${mealData.strMealThumb}" alt="${mealData.strMeal} photo"></picture>
                    <h3>${mealData.strMeal}</h3>
                </div>
                <div class="card-det-content">
                    <h2>Instructions</h2>
                    <p>${mealData.strInstructions}</p>
                    <h3>Area : <span>${mealData.strArea}</span></h3>
                    <h3>Category : <span>${mealData.strCategory}</span></h3>
                    <h3>Recipes :</h3>
                    <ul class="recipes">
                        ${recipes}
                    </ul>
                    <h3>Tags :</h3>
                    <ul class="tags">
                       ${tagsData}
                    </ul>
                    <div class="btns-group">
                        <a class="btn btn-source" target="_blank" href="${mealData.strSource}">Source</a>
                        <a class="btn btn-video" target="_blank" href="${mealData.strYoutube}">Youtube</a>
                    </div>
                </div>                
  `;
  mealCard.innerHTML = cartoona;
  $('#loading').fadeOut(500)
  
}
//========================== Search =================================
async function search(term) {
  let response = await fetch(
    `${BASE_URL}/search.php?s=${term}`
  );
  const responseData = await response.json();

  const result = responseData.meals;
  let cartoona = "";
if (result == null) {
   searchCard.innerHTML = cartoona;
} else {
    for (let i = 0; i < result.length; i++) {
    cartoona += `
        <div class="card" onclick=displayMeal('${
          result[i].idMeal ? result[i].idMeal : result[i].idCategory
        }')>
        <picture><img src="${result[i].strMealThumb}" alt="${
      result[i].strMealThumb
    } photo"></picture>
        <div class="layer">
            <h3>${result[i].strMeal}</h3>
        </div>
            </div>
        `;
  } 

  searchCard.innerHTML = cartoona;
}
}

