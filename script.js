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

  div.onclick=(e)=>{
    e.stopPropagation();
    select.innerText=s.name;
    selectedIndex=i;
    list.classList.remove("active");
  };

  list.appendChild(div);
});

select.onclick=(e)=>{
  e.stopPropagation();

  document.querySelectorAll(".variables").forEach(el=>{
    if(el !== list) el.classList.remove("active");
  });

  list.classList.toggle("active");
};

document.addEventListener("click",()=>{
  list.classList.remove("active");
});

function calc(){
  const price=Number(document.getElementById("price").value);
  const delivery=states[selectedIndex].price + 300;
  document.getElementById("result").innerText =
    "Ціна: $" + (price + delivery);
}
