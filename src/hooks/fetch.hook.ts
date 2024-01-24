import { useEffect, useState } from "react";

export type IUrl = `http${string}`;

export interface IUseFetch {
  url: IUrl;
  field: string;
}

export const useFetch = (props: IUseFetch) => {
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    fetch(props.url)
      // Exito
      .then((response) => response.json()) // convertir a json
      .then((json) => {
        setResult(json[props.field]);
      }) //imprimir los datos en la consola
      .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores
  }, [props.field, props.url]);

  return [result];
};
