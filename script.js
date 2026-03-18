const states = [
  {name:"FREMONT - CA", price:300},
  {name:"FRESNO - CA", price:320},
  {name:"FT.WORTH - TX", price:350},
];

let selectedIndex = 0;

const select = document.getElementById("stateSelect");
const list = document.getElementById("stateList");

states.forEach((s,i)=>{
  const div=document.createElement("div");
  div.className="item";
  div.innerText=s.name;
  div.onclick=()=>{
    select.innerText=s.name;
    selectedIndex=i;
    list.classList.remove("active"); // hide after select
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

function calc(){
  const price=Number(document.getElementById("price").value);
  const delivery=states[selectedIndex].price + 300; // +150 extra included
  document.getElementById("result").innerText = "Ціна: $" + (price + delivery);
}
