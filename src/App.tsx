import "./App.css";
import { useEffect, useState } from "react";
//*Components
import { Button, ConditionalRender, Prop, Wrapper } from "./components";
import { useFetch } from "./hooks/fetch.hook";

const App = () => {
  // let number = 20;
  //!useStateHook

  const [number, setNumber] = useState(0);

  const [ result ] = useFetch( {url: 'https://api.github.com/users/moche123',field:'name'} )
  const [ blog ] = useFetch( {url: 'https://api.github.com/users/moche123',field:'blog'} )

  // const [name, setName] = useState('');

  useEffect(() => {
    let nuberInterval = 0;
    //*MODIFICATION
    console.log('USEEFFECT TRIGGER')
    const interval = setInterval( () => {
      console.log(`INTERVAL  ${nuberInterval++}`)
    },1000 )
  
    return () => {
      //*DESTROY => LIMPIAR BUCLES O EVENTOS QUE REPRESENTEN PÉRDIDA DE MEMORIA (MEMORY LEAK)
      clearInterval(interval)
    }
  }, [number]) //! INFORMACIÓN A LA CUAL EL USE EFFECT ESTÁ ATENTO A LOS CAMBIOS



  // useEffect(() => {
   
  //   fetch('https://api.github.com/users/moche123')
  //   // Exito
  //   .then(response => response.json())  // convertir a json
  //   .then((json) => {
  //     setName(json.name);
  //   })    //imprimir los datos en la consola
  //   .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
    
  
  // }, []) //! VACIO, el useffect ejecuta el código al inicio de todo una sola vez
  

  return (
    <div className="center">
      <hr />
      {/* {name} */}
      {result}
      {/* <img src={image} alt="" /> */}
      <a href={blog}>Go to blog</a>
      <hr />
      <h1>Hello</h1>
      <p className="number">{number}</p>
      <div onClick={() => setNumber(number + 1)}>
        <Button fillColor={"blue"} />
      </div>
      <hr />
      <Prop age={20} name={"Charles"} number={number} setNumber={setNumber} />
      <hr />
      <Wrapper>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          facilis aliquid ea, similique deserunt eligendi veritatis ut deleniti
          quibusdam et, provident laboriosam mollitia quos ab odio non
          voluptatibus? Est, animi?
        </p>
      </Wrapper>
      <br />
      <Wrapper>
        <h4>Content</h4>
      </Wrapper>
      <hr />
      <ConditionalRender />
    </div>
  );
};

export default App; //!default==> UNICA EXPORTACIÓN (solo exportar una cosa)
//! Varias export { App,Component1,... }
