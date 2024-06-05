import React, { useState } from "react";
const Form = () => {
  let country=[
    {id:1, name:"India"}, 
  {id:2, name:"Australia"}]

let state=[
    { "id": 1, "name": "Andhra Pradesh", "country_id": 1 },
    { "id": 2, "name": "Assam", "country_id": 1 },
    { "id": 3, "name": "Bihar", "country_id": 1 },
    { "id": 4, "name": "Gujarat", "country_id": 1 },
    { "id": 5, "name": "Kerala", "country_id": 1 },
    { "id": 6, "name": "Maharashtra", "country_id": 1 },
    { "id": 7, "name": "Odisha", "country_id": 1 },
    { "id": 8, "name": "Rajasthan", "country_id": 1 },
    { "id": 9, "name": "Tamil Nadu", "country_id": 1 },
    { "id": 10, "name": "Uttar Pradesh", "country_id": 1 },
    { "id": 11, "name": "New South Wales", "country_id": 2 },
    { "id": 12, "name": "Northern Territory", "country_id": 2 },
    { "id": 13, "name": "Queensland", "country_id": 2 },
    { "id": 14, "name": "South Australia", "country_id": 2 },
    { "id": 15, "name": "Tasmania", "country_id": 2 },
    { "id": 16, "name": "Victoria", "country_id": 2 },
    { "id": 17, "name": "Western Australia", "country_id": 2 }];

let district=[
    { "id": 1, "name": "Visakhapatnam", "state_id": 1 },
    { "id": 2, "name": "Guntur", "state_id": 1 },
    { "id": 3, "name": "Vijayawada", "state_id": 1 },
    { "id": 4, "name": "Tirupati", "state_id": 1 },
    { "id": 5, "name": "Rajahmundry", "state_id": 1 },
    { "id": 6, "name": "Guwahati", "state_id": 2 },
    { "id": 7, "name": "Silchar", "state_id": 2 },
    { "id": 8, "name": "Dibrugarh", "state_id": 2 },
    { "id": 9, "name": "Jorhat", "state_id": 2 },
    { "id": 10, "name": "Tezpur", "state_id": 2 },
    { "id": 11, "name": "Patna", "state_id": 3 },
    { "id": 12, "name": "Gaya", "state_id": 3 },
    { "id": 13, "name": "Bhagalpur", "state_id": 3 },
    { "id": 14, "name": "Muzaffarpur", "state_id": 3 },
    { "id": 15, "name": "Purnia", "state_id": 3 },
    { "id": 16, "name": "Ahmedabad", "state_id": 4 },
    { "id": 17, "name": "Surat", "state_id": 4 },
    { "id": 18, "name": "Vadodara", "state_id": 4 },
    { "id": 19, "name": "Rajkot", "state_id": 4 },
    { "id": 20, "name": "Bhavnagar", "state_id": 4 },
    { "id": 21, "name": "Thiruvananthapuram", "state_id": 5 },
    { "id": 22, "name": "Kochi", "state_id": 5 },
    { "id": 23, "name": "Kozhikode", "state_id": 5 },
    { "id": 24, "name": "Thrissur", "state_id": 5 },
    { "id": 25, "name": "Kollam", "state_id": 5 },
    { "id": 26, "name": "Mumbai", "state_id": 6 },
    { "id": 27, "name": "Pune", "state_id": 6 },
    { "id": 28, "name": "Nagpur", "state_id": 6 },
    { "id": 29, "name": "Nashik", "state_id": 6 },
    { "id": 30, "name": "Aurangabad", "state_id": 6 },
    { "id": 31, "name": "Bhubaneswar", "state_id": 7 },
    { "id": 32, "name": "Cuttack", "state_id": 7 },
    { "id": 33, "name": "Rourkela", "state_id": 7 },
    { "id": 34, "name": "Berhampur", "state_id": 7 },
    { "id": 35, "name": "Sambalpur", "state_id": 7 },
    { "id": 36, "name": "Jaipur", "state_id": 8 },
    { "id": 37, "name": "Jodhpur", "state_id": 8 },
    { "id": 38, "name": "Kota", "state_id": 8 },
    { "id": 39, "name": "Bikaner", "state_id": 8 },
    { "id": 40, "name": "Ajmer", "state_id": 8 },
    { "id": 41, "name": "Chennai", "state_id": 9 },
    { "id": 42, "name": "Coimbatore", "state_id": 9 },
    { "id": 43, "name": "Madurai", "state_id": 9 },
    { "id": 44, "name": "Tiruchirappalli", "state_id": 9 },
    { "id": 45, "name": "Salem", "state_id": 9 },
    { "id": 46, "name": "Lucknow", "state_id": 10 },
    { "id": 47, "name": "Kanpur", "state_id": 10 },
    { "id": 48, "name": "Ghaziabad", "state_id": 10 },
    { "id": 49, "name": "Agra", "state_id": 10 },
    { "id": 50, "name": "Varanasi", "state_id": 10 },
    { "id": 51, "name": "Sydney", "state_id": 11 },
    { "id": 52, "name": "Melbourne", "state_id": 11 },
    { "id": 53, "name": "Brisbane", "state_id": 11 },
    { "id": 54, "name": "Perth", "state_id": 11 },
    { "id": 55, "name": "Adelaide", "state_id": 11 },
    { "id": 56, "name": "Darwin", "state_id": 12 },
    { "id": 57, "name": "Alice Springs", "state_id": 12 },
    { "id": 58, "name": "Katherine", "state_id": 12 },
    { "id": 59, "name": "Tennant Creek", "state_id": 12 },
    { "id": 60, "name": "Palmerston", "state_id": 12 },
    { "id": 61, "name": "Brisbane", "state_id": 13 },
    { "id": 62, "name": "Gold Coast", "state_id": 13 },
    { "id": 63, "name": "Cairns", "state_id": 13 },
    { "id": 64, "name": "Townsville", "state_id": 13 },
    { "id": 65, "name": "Toowoomba", "state_id": 13 }
];
const [selected_country,set_country]=useState("");
const [selected_state, set_state] = useState(null);
const [selected_district, set_district]=useState("");
const [show_other_district, set_show_other_district]=useState(false) //hiding the other textbox by default
const[other_district, set_other_district]=useState("")


const changed_country=(e,value)=>{
    set_country(e.target.value);
    set_state(""); 
    set_district("");
    set_show_other_district(false);
    console.log("Selected Country ID:", e.target.value);
};
const changed_state=(e)=>{
    set_state(e.target.value);
    set_show_other_district(false)
    console.log("Selected State ID:", e.target.value);
};

const changed_district=(e)=>{
    const district_selected=e.target.value;
    set_district(e.target.value);
    console.log("Selected District ID:", e.target.value);
    if(district_selected==="other")
        {
            set_show_other_district(true) //setting to true displays the other textbox
        }
    else{
        set_show_other_district(false)
    }
};

let filtered_s=state.filter(i=>i.country_id==selected_country);
let filtered_d=district.filter(i=>i.state_id==selected_state);

const handle_other_change=(e)=>
    {
        set_other_district(e.target.value) //input of other textbox is stored
        
    }

const display_other_input=(e)=>
    {
        if(e.key=='Enter')
            {   
                e.preventDefault(); //stops form from submitting automatically
                console.log("Other District:",other_district)
            }

    }

  return (
    <div><center><h3>Location Picker</h3></center>
    <form><div class="main">
        <fieldset>
        <label>Country: </label>
        <select onChange={changed_country} >
        <option value="" disabled selected>Select an option</option>
            {
                country.map(c=>(
                    <option value={c.id}>{c.name}</option>
                ))
            }
        </select><br/><br/>

        <label>State: </label>
        <select onChange={changed_state} value={selected_state}>
        <option value="" disabled selected>Select an option</option>
            {
                filtered_s.map(s=>(
                    <option value={s.id}>{s.name}</option>
                ))
            }
        </select><br/><br/>

        <label>District: </label>
        <select onChange={changed_district} value={selected_district}>
        <option value="" disabled selected>Select an option</option>
            {
                filtered_d.map(d=>(
                    <option value={d.id}>{d.name}</option>
                ))
            }
        <option id="other" value="other">Other</option>
        </select><br/><br/>
        {
            show_other_district && (
                <>
                <label>Enter District:</label>
                <input type="text" value={other_district} onChange={handle_other_change} onKeyDown={display_other_input}/>
                </>
            )
        }
       </fieldset>
       </div>   
    </form>
    </div>
  )
}

export default Form;