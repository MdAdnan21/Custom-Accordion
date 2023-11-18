// /*=============== ACCORDION ===============*/
// const accordionItems = document.querySelectorAll('.accordion__item')

// // 1. Selecionar cada item
// accordionItems.forEach((item) =>{
//     const accordionHeader = item.querySelector('.accordion__header')

//     // 2. Seleccionar cada click del header
//     accordionHeader.addEventListener('click', () =>{
//         // 7. Crear la variable
//         const openItem = document.querySelector('.accordion-open')
        
//         // 5. Llamar a la funcion toggle item
//         toggleItem(item)

//         // 8. Validar si existe la clase
//         if(openItem && openItem!== item){
//             toggleItem(openItem)
//         }
//     })
// })

// // 3. Crear una funcion tipo constante
// const toggleItem = (item) =>{
//     // 3.1 Crear la variable
//     const accordionContent = item.querySelector('.accordion__content')

//     // 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
//     if(item.classList.contains('accordion-open')){
//         accordionContent.removeAttribute('style')
//         item.classList.remove('accordion-open')
//     }else{
  //         // 4. Agregar el height maximo del content
  //         accordionContent.style.height = accordionContent.scrollHeight + 'px'
  //         item.classList.add('accordion-open')
  //     }
  // }
  
  
  
  
  // http://localhost:3000/posts
  
  let data1;

async function getapi(){
   let fetchapi=await fetch('http://localhost:3000/posts1')  //get api address
  .then(response => response.json()) //get  data in json format and change data in javascript array of  object 
  .then(data => data1=data) //it store in variable
  .catch(error => console.error('Error:', error));// if get error show error

 


  const tableBody = document.getElementById('table1'); // find table
// console.log(tableBody);
console.log(data1,"th is data1")
  // Iterate through the data and create table rows
  data1.forEach(item => {
    let row = document.createElement('tr'); //creating row
      row.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.email}</td> '`;
      // Add more cells based on your API data structure

      tableBody.appendChild(row);
  });



  
}

let id1=document.getElementById('id1');
let name1=document.getElementById('name1');
let email=document.getElementById('email1');





  function postapi(){


    const postData = {
    
       name: name1.value,
     email:email.value
     };

     console.log(JSON.stringify(postData),"stringify")

      console.log(postData,"this is post data");
  
      fetch('http://localhost:3000/posts1', {   // post api
          method: 'POST',  // method of api for example get ,post ,put ,delete
          headers: {
              'Content-Type': 'application/json' //not important in react
    },
    body: JSON.stringify(postData) //  change javascript object to api format
  })
    .then(response => response.json())
    .then(data => console.log('POST Result:', data)
    )
    .catch(error => console.error('Error:', error));


// debugger;
    console.log(name1.value,"name value")
    console.log(id1.value,"id value")
    console.log(email.value,"email value")
    
}

    getapi();



