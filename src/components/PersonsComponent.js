import DateMockComponent from "./DateMockComponent";
import './PersonsStyle.css';
function PersonsComponent(persons){
    let result = Object.keys(persons).map((key) => persons[key]);

    return (
        <ul className="cards">
            {result.map((person,index) =>{
                return (<DateMockComponent  key={person.id} {...person} />)
            })}
        </ul>
    )
}
export default PersonsComponent