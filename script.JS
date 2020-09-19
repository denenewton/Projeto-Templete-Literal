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
  
  function foods(food){
    return `<h4>Favorite Food</h4>
            <ul>
            ${food.map(item => `<li class='foods-list'>${item}</li>`).join('')}
           </ul>`
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

  function salvarPetsData(){
    //Obter os dados do formulário.
    var nome = document.getElementById('txt-nome').value
    let especie = document.getElementById('txt-especie').value
    let food1 = document.getElementById('txt-food1').value
    let food2 = document.getElementById('txt-food2').value
    let food3 = document.getElementById('txt-food3').value
    let nasc = document.getElementById('txt-data-nasc').value
    let foto = document.getElementById('txt-foto').value
     
  window.alert(`Seus dados foram atualizado! ${name}`)
  console.log(`Seus dados foram atualizado! ${name}`)
  

  }
  

  function TempletePets(pets){
    return `<div class="animal"><img class="pet-photo" src = "${pets.photo}"/>
    <h2 class='pet-name'>${pets.name} <span class='species'>(${pets.species})</span></h2>
    <p><strong>Age:</strong> ${Age(pets.birthYear)}</p>
    ${pets.favFoods? foods(pets.favFoods) : ''}</div>`
  }
  
  
  document.getElementById('app').innerHTML = `
  <h1 class='app-title'>Pets (${petsData.length} results)</h1>
  ${petsData.map( TempletePets ).join('')} 
  <p class='footer'>These ${petsData.length} pets were added recently. Check back soon for more update.</p>`
  