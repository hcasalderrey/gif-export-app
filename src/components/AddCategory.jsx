import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange =({target}) =>{
        setInputValue(target.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault()
        const xValue = inputValue.trim()
        if(xValue.length<=1) return
        setInputValue('')
        onNewCategory(xValue)
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Buscar gif" value={inputValue} onChange={onInputChange} />
    </form>
  )
}
