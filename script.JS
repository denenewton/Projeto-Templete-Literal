var petsData = [
    {
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2017,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
  ];
  let key = window.localStorage.length 
  for(let i = 0 ; i < key; i++){
    let pets = JSON.parse(window.localStorage.getItem(`${localStorage.key(i)}`))
  petsData.unshift(pets)
  }

  function Delete(id){
     window.localStorage.removeItem(id) //Remove um item do LocalStorange.
     document.location.reload()// recarrega a pagina
  }
  
  
  function foods(food){
    return `<h4>Favorite Food</h4>
            <ul>
            ${food.map(item => `<li class='foods-list'>${item}</li>`).join('')}
           </ul>
           `
  }

  function Age(birthYear){
    let age = new Date().getFullYear() - birthYear
    if(age == 1){
      return '1 year old'
    }else if(age == 0){
      return 'Baby'
    }else if (age > 1){
      return `${age} years old`
    }

  }
  

  function TempletePets(pets){
    return `<div class="animal"><img class="pet-photo" src = "${pets.photo}"/>
    <h2 class='pet-name'>${pets.name} <span class='species'>(${pets.species})</span></h2>
    <p><strong>Age:</strong> ${Age(pets.birthYear)}</p>
    ${pets.favFoods? foods(pets.favFoods) : ''}<button id="b-delete" onClick ="Delete(${pets.id})">Delete</button></div>`
  }
  
  
  document.getElementById('app').innerHTML = `
  <h1 class='app-title'>Pets (${petsData.length} results)</h1>
  ${petsData.map( TempletePets ).join('')} 
  <p class='footer'>These ${petsData.length} pets were added recently. Check back soon for more update.</p>`
  