// STATES
const states = [
  {name:"FREMONT - CA", price:300},
  {name:"FRESNO - CA", price:320},
  {name:"FT.WORTH - TX", price:350},
];

let selectedState = 0;

// DROPDOWN
const select = document.getElementById("stateSelect");
const list = document.getElementById("stateList");

states.forEach((s,i)=>{
  const div=document.createElement("div");
  div.className="item";
  div.innerText=s.name;

  div.onclick=(e)=>{
    e.stopPropagation();
    select.innerText=s.name;
    selectedState=i;
    list.classList.remove("active");
  };

  list.appendChild(div);
});

select.onclick=(e)=>{
  e.stopPropagation();
  list.classList.toggle("active");
};

document.addEventListener("click",()=>{
  list.classList.remove("active");
});

// SWITCH TABS
function switchTab(tab){
  document.getElementById("usa").classList.add("hidden");
  document.getElementById("eu").classList.add("hidden");
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));

  document.getElementById(tab).classList.remove("hidden");
  event.target.classList.add("active");
}

// CLEARANCE
function clearance(price, year, engine, fuel){
  if(fuel==2) return 0;

  let base = fuel==0 ? 50 : 75;
  let age = new Date().getFullYear() - year;
  if(age<1) age=1; if(age>15) age=15;

  let excise = base*(engine/1000)*age;
  let duty = price*0.1;
  let vat = (price+duty+excise)*0.2;

  return duty+excise+vat;
}

// USA
function calcUSA(){
  const price=Number(document.getElementById("usa_price").value);
  const engine=Number(document.getElementById("usa_engine").value);
  const year=Number(document.getElementById("usa_year").value);
  const fuel=Number(document.getElementById("usa_fuel").value);

  const delivery = states[selectedState].price + 300;

  const customs = clearance(price, year, engine, fuel);

  const total = price + delivery + customs;

  document.getElementById("usa_result").innerText =
    "Загальна: $" + total.toFixed(0);
}

// EU
function calcEU(){
  const price=Number(document.getElementById("eu_price").value);
  const engine=Number(document.getElementById("eu_engine").value);
  const year=Number(document.getElementById("eu_year").value);
  const fuel=Number(document.getElementById("eu_fuel").value);

  const delivery = 800;

  const customs = clearance(price, year, engine, fuel);

  const total = price + delivery + customs;

  document.getElementById("eu_result").innerText =
    "Загальна: €" + total.toFixed(0);
}
