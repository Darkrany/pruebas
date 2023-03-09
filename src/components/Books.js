import React, { useState } from 'react'

export default function Books() {
    
    const [books, setBook] = useState ({
        title:'',
        description: ''
    });


    const getData = event => {
        // Evitamos la recarga al pulsar submit

      // event.preventDefault();

         // Recogemos los datos 

       let target = event.target;
       let title = target.title.value;
       let description = target.description.value;

       // Los almacenamos 
      let booksContainer = {
         // id: new Date().getTime(),
          title,
          description
      };

      setBook(booksContainer);

      console.log(books);
    }

  return (
    <div className="add">
    <h5 className="title">Añadir Libros</h5>
    <form onSubmit={getData}>
        <input type="text" id="title" name="title" placeholder="Titulo"  />
        <textarea id="description" name="description" placeholder="Descripción"></textarea>
        <input type="submit" id="save" value="Guardar" />
    </form>
</div>
  )
}
