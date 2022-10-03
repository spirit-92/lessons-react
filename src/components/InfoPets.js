function InfoPets(props) {
    console.log(props)
    let {animal,year} = props.infoPets
    return (
        <div>
            <h1>My {animal} is {year} years old</h1>
        </div>
    )
}
export default InfoPets