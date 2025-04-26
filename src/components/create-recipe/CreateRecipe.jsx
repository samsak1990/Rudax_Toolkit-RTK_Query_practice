import React, { useState } from 'react'
import { useCreateRecipeMutation } from '../../store/favorites/api/api.ednpoints'

const defaultValue = {name:'', image: ''}

export default function CreateRecipe() {
    const [recipe, setRecipe] = useState(defaultValue)
    const [createRecipe] = useCreateRecipeMutation()

    const handleSubmit = (e)=>{
        e.preventDefault()
        createRecipe(recipe).then(()=>setRecipe(defaultValue))
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label> Имя рецепта
                    <input type="text" name="Name" id="" placeholder="Name" value={recipe.name} onChange={e=>{
                        setRecipe({...recipe, name: e.target.value})
                    }}/>
                </label>
                <label> Сcылка на изображение
                    <input type="text" name="Image" id="" value={recipe.image} placeholder="Image" onChange={e=>{
                        setRecipe({...recipe, image: e.target.value})
                    }}/>
                </label>
                <button type='submit'>Добавить</button>
        </form>
        </div>
    )
}
