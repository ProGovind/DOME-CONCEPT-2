let btn = document.querySelector("#addmore");
let education = document.querySelector(".education");


btn.addEventListener("click" , display);

let data = [
  {
    label:"Education :",
    id:"education",
  },
     {
    label:"Institution :",
    id:"institution",
  },
        {
    label:"Year of Passing :",
    id:"timeperiod",
  }
]
let count = 2;
function display(){
  event.preventDefault();
  let fieldset = document.createElement("fieldset");
  let legend = document.createElement("legend");
  legend.innerText = `Education Qualification  ${count}`;
  fieldset.append(legend);
  for(let t of data)
    {
      let div = document.createElement("div");
      div.className = "elements";
      fieldset.append(div);
      let label = document.createElement("label");
      label.innerText = t.label;
      label.htmlFor =  t.id+count;
      div.append(label);
      let input = document.createElement("input");
      input.type = "text";
     input.innerText = t.id+count;
      div.append(input);
    }
  education.append(fieldset);
  count++;
  
}