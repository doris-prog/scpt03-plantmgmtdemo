// const binKey = "66af3c46e41b4d34e41b71c5";
// const url = `https://api.jsonbin.io/v3/b/${binKey}`;
// const masterKey = "$2a$10$otOkSZVaXkcgugBrzrH5XubQRTdfbPZVP57ZJ65gdbXugsF.7cQq2";

// let plants = [];

// document.addEventListener("DOMContentLoaded", async function () {
//   plants = await loadPlants(); //Load data from json server
//   renderList(); //render list
// });

// async function loadPlants() {
//   try {
//     const response = await axios.get(`${url}/latest`,
//       {
//         headers: {
//           'X-Master-Key': masterKey
//         }
//       });

//     return response.data.record;
//   } catch (error) {
//     console.error('Error fetching plant data:', error);
//   }
// }

// // list rendering in placeholder format
// function renderList() {

//   let plantListDiv = document.querySelector("#plantList");
//   let outputString = "";

//   for (let plant of plants) {

//     outputString += `
//       <div class="col-md-4">
//       <div class="card mb-3" style="max-width: 300px;">
//         <div class="card-body">
//           <h5 class="card-title">${plant.name}</h5>
//           <p class="card-text">Price: ${plant.price}<br>Pet Safe: ${plant.petSafe}<br>Care Level: ${plant.careLevel}</p>
//           <div class="d-flex justify-content-between">
//             <button class="btn btn-info btn-md edit" data-plantid="${plant.id}">Edit</button>
//             <button class="btn btn-danger btn-md delete" data-plantid="${plant.id}">Delete</button>
//           </div>
//         </div>
//       </div>
//       </div>`

//   }

//   plantListDiv.innerHTML = outputString;

//   document.querySelectorAll(".edit").forEach(button => {
//     button.addEventListener("click", modifyPlant);
//   });
//   document.querySelectorAll(".delete").forEach(button => {
//     button.addEventListener("click", deletePlant);
//   });

// }

// function addPlant(name, price, petSafe, careLevel) {

//   if (name == "" || price == "" || petSafe == "" || careLevel == "") {
//     alert("Missing information found, please fill in all");
//     return;
//   }

//   let newPlant = {

//     id: Math.floor(Math.random() * 100 + 1),
//     name: name,
//     price: price,
//     petSafe: petSafe,
//     careLevel: careLevel

//   };

//   console.log(newPlant)

//   plants.push(newPlant);
//   renderList();

// }

// // interaction part
// document.querySelector("#addPlant").addEventListener("click", function () {
//   let name = document.querySelector("#name").value;
//   let price = document.querySelector("#price").value;
//   let petSafe = document.querySelector("#petSafe").value;
//   let careLevel = document.querySelector("#careLevel.active").value;

//   addPlant(name, price, petSafe, careLevel);
// });

// // function handleEdit(event) {
// //   const plantId = event.target.dataset.plantid;
// //   const plant = plants.find(p => p.id == plantId);

// //   if (plant) {
// //     const newPlantName = prompt("Enter new plant name:", plant.name);
// //     const newPrice = prompt("Enter new price affordability:", plant.price);
// //     const newPetSafe = prompt("Is it safe for pets? (Yes/No):", plant.petSafe);
// //     const newCareLevel = prompt("Enter new care level [Low(1) to High(5)]:", plant.careLevel);

// //     modifyPlant(plantId, newPlantName, newPrice, newPetSafe, newCareLevel);
// //   } else {
// //     console.log("Plant not found");
// //   }
// // }

// // function modifyPlant(plantId, id, newPlantName, newPrice, newPetSafe, newCareLevel) {
// //   let plant = null;
// //   for (let t of plants) {
// //     if (t.id == id) {
// //       plant = t;
// //     }
// //   }
// //   if (plant) {
// //     plant.name = newPlantName;
// //     plant.price = newPrice;
// //     plant.petSafe = newPetSafe;
// //     plant.careLevel = newCareLevel;

// //   } else {
// //     console.log("Plant not found");
// //   }
// // }
// function modifyPlant(id) {
//   let plant = null;

//   // Find the plant with the given id
//   for (let t of plants) {
//     if (t.id == id) {
//       plant = t;
//     }
//   }

//   if (plant) {
//     // Prompt user for new values and update the plant object
//     const newPlantName = prompt("Enter new plant name:", plant.name);
//     const newPrice = prompt("Enter new price affordability:", plant.price);
//     const newPetSafe = prompt("Is it safe for pets? (Yes/No):", plant.petSafe);
//     const newCareLevel = prompt("Enter new care level [Low(1) to High(5)]:", plant.careLevel);

//     // Update the plant object with the new values
//     plant.name = newPlantName;
//     plant.price = parseFloat(newPrice); // Ensure the price is a number
//     plant.petSafe = newPetSafe;
//     plant.careLevel = parseInt(newCareLevel); // Ensure the care level is an integer

//     // Re-render the list with updated plant details
//     renderList();
//   } else {
//     console.log("Plant not found");
//   }
// }

// function handleDelete(event) {
//   const plantId = event.target.dataset.plantid;
//   deletePlant(plantId);
// }

// function deletePlant(id) {
//   const indexToDelete = plants.findIndex(p => p.id == id);

//   if (indexToDelete !== -1) {
//     plants.splice(indexToDelete, 1);
//     renderList();
//   } else {
//     console.log("Plant not found");
//   }
// }

// // function deletePlant(plants, id) {
// //   let indexToDelete = null;
// //   for (let i = 0; i < plants.length; i++) {
// //     if (plants[i].id == id) {
// //       indexToDelete = i;
// //       break;
// //     }
// //   }
// //   if (indexToDelete !== null) {
// //     plants.splice(indexToDelete, 1);
// //   } else {
// //     console.log("Plant not found");
// //   }
// // }

// // Get all buttons with class="btn" inside the container
// var btn2s = document.getElementsByClassName("btn2");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btn2s.length; i++) {
//   // console.log(btn2s[i])

//   btn2s[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");

//     // If there's no active class
//     if (current.length > 0) {
//       for (var j = 0; j < current.length; j++) {
//         current[j].className = current[j].className.replace(" active", "");
//     }
//   }

//     // Add the active class to the current/clicked button
//     this.className += " active";
//   });
// }
const binKey = "66af3c46e41b4d34e41b71c5";
const url = `https://api.jsonbin.io/v3/b/${binKey}`;
const masterKey = "$2a$10$otOkSZVaXkcgugBrzrH5XubQRTdfbPZVP57ZJ65gdbXugsF.7cQq2";

let plants = [];

document.addEventListener("DOMContentLoaded", async function () {
  plants = await loadPlants(); // Load data from JSON server
  renderList(); // Render list
});

async function loadPlants() {
  try {
    const response = await axios.get(`${url}/latest`, {
      headers: {
        'X-Master-Key': masterKey,
          'Content-Type': 'application/json'
      }
    });
    return response.data.record.plants;
  } catch (error) {
    console.error('Error fetching plant data:', error);
  }
}

function renderList() {
  let plantListDiv = document.querySelector("#plantList");
  let outputString = '<div class="row">';

  for (let plant of plants) {
    outputString += `
      <div class="col-md-4">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${plant.name}</h5>
            <p class="card-text">Price: ${plant.price}<br>Pet Safe: ${plant.petSafe}<br>Care Level: ${plant.careLevel}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-info btn-md edit" data-plantid="${plant.id}">Edit</button>
              <button class="btn btn-danger btn-md delete" data-plantid="${plant.id}">Delete</button>
            </div>
          </div>
        </div>
      </div>`;
  }

  outputString += '</div>';

  plantListDiv.innerHTML = outputString;

  document.querySelectorAll(".edit").forEach(button => {
    button.addEventListener("click", handleEdit);
  });
  document.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", handleDelete);
  });
}

function addPlant(name, price, petSafe, careLevel) {
  if (name === "" || price === "" || petSafe === "" || careLevel === "") {
    alert("Please fill in all missing information");
    return;
  }

  let newPlant = {
    id: Math.floor(Math.random() * 100 + 1),
    name: name,
    price: price,
    petSafe: petSafe,
    careLevel: careLevel
  };

  console.log(newPlant);
  plants.push(newPlant);
  renderList();
}

document.querySelector("#addPlant").addEventListener("click", function () {
  let name = document.querySelector("#name").value;
  let price = document.querySelector("#price").value;
  let petSafe = document.querySelector("#petSafe").value;
  let careLevel = document.querySelector("#careLevel.active").value;

  addPlant(name, price, petSafe, careLevel);
});

function handleEdit(event) {
  const plantId = event.target.dataset.plantid;
  modifyPlant(plantId);
}

function modifyPlant(id) {
  let plant = plants.find(p => p.id == id);

  if (plant) {
    const newPlantName = prompt("Enter new plant name:", plant.name);
    const newPrice = prompt("Enter new price affordability:", plant.price);
    const newPetSafe = prompt("Is it safe for pets? (Yes/No):", plant.petSafe);
    const newCareLevel = prompt("Enter new care level [Low(1) to High(5)]:", plant.careLevel);

    plant.name = newPlantName;
    plant.price = newPrice;
    plant.petSafe = newPetSafe;
    plant.careLevel = parseInt(newCareLevel); // Ensure the care level is an integer

    renderList();
  } else {
    console.log("Plant not found");
  }
}

function handleDelete(event) {
  const plantId = event.target.dataset.plantid;
  deletePlant(plantId);
}

function deletePlant(id) {
  const indexToDelete = plants.findIndex(p => p.id == id);

  if (indexToDelete !== -1) {
    plants.splice(indexToDelete, 1);
    renderList();
  } else {
    console.log("Plant not found");
  }
}

// Get all buttons with class="btn" inside the container
var btn2s = document.getElementsByClassName("btn2");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btn2s.length; i++) {
  btn2s[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      for (var j = 0; j < current.length; j++) {
        current[j].className = current[j].className.replace(" active", "");
      }
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

async function savePlantData(plants) {
  try {
    const response = await axios.put(url, { plants: plants }, {
      headers: {
        'X-Master-Key': masterKey,
        'Content-Type': 'application/json'
      }
    });
    console.log('Plants data saved!', response.data);
  } catch (error) {
    console.error('Error saving plant data:', error);
  }
}

const savebtn = document.getElementById("SaveBtn");
savebtn.addEventListener("click", function () {
  savePlantData(plants);
  renderList();
});
