
async function getContent() {
  try {
    const response = await fetch("http://localhost:3001/");
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

    show(data)

  } catch (error) {
    console.error(error)
  }
}
getContent()

function show(variavel) {

  let Saida = ''

  //Para cada usuario pega um usuario da lista e renderiza uma lista 
  for (let user of variavel) {
    Saida += `<li>${user.name}</li>`

    document.getElementById('test').innerHTML = Saida
  }
}
