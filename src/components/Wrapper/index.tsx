import { ReactElement } from "react"

export interface IWrapper{
  children: ReactElement
}


export const Wrapper = (props:IWrapper) => {
  return (
    <div style={{ backgroundColor: 'aqua', padding: '1rem', display:'flex', gap:'2rem' }}>
      <h2>Title of Wrapper</h2>
      {props.children}
    </div>
  )
}
