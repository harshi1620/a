import React from 'React'
function PersonalData(){
    let data = {
        name:'Sam',
        age:30,
        city:'Vjy'
    }
    console.log(data)
    return(
        <div>
            My Personal Details: {data.name} <br />
            {data.age} - {data.city}
        </div>
    )
}

export default PersonalData