export default function GetRecipe(props){
    return(
        <button className="get-recipe" onClick={props.getRecipe}>Get recipe via AI</button>
    )
}