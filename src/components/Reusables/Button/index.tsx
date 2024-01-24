import './button.css';

export interface IButton{
  fillColor: string;
}

export const Button = ( props:IButton ) => {


  return (
    <div className="wrapper">
      <button className={ 'fill-'+props.fillColor }><span>Click!</span></button>
    </div>
  )
}
