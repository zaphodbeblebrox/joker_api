import React from 'react';
import {Link} from "react-router-dom";
import "../static/style.css";

const DisplayAllPets = ({allPets}) => {
    // Display a list of all pets
    console.log(allPets);

    return(
        <div>
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Animal is sick?</td>
                        <td>Number of legs</td>
                    </tr>
                </thead>
                <tbody>
                    { allPets.map((pet) => {
                        return (
                            <tr key={pet._id}>
                                <td>{pet.name}</td>
                                <td>{pet.animalType}</td>
                                <td>{pet.isSick ? "Yes" : "No"}</td>
                                <td>{pet.numOfLegs}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <p><Link to={"/newPet"}>Submit another pet</Link></p>
        </div>
    );
}
export default DisplayAllPets;