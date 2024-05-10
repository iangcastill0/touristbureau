document.addEventListener("DOMContentLoaded", () => {
  // display the categories
  // for loop (categories) pulls from the activities.js file
  for (let cat of categories) {
    const option = document.createElement("option");
    option.innerText = cat;
    cats.appendChild(option);
  }
  // display the activities within the categories
  cats.addEventListener("change", (e) => {
    activitiesElement.innerHTML = "";
    for (let a of activities) {
      if (cats.value == a.category) {
        const option = document.createElement("option");
        option.innerText = a.name;
        activitiesElement.appendChild(option);
      }
    }
  });
  //dispay details for selected activity
  activitiesElement.addEventListener("change", (e) => {
    for (a of activities) {
      if (a.name == activitiesElement.value) {
        details.innerText = `
                  ${a.description} 
  
                  ${a.location}
                  $${a.price.toFixed(2)} 
              `;
      }
    }
  });
}); //end DOM element
