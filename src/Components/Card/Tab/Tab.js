import "./Tab.css"

const Tab = ({id,name,city,phone,ids}) => {

  return(
    <div className="tab">
      <img className="img" src={require("../../../Images/"+ids+".jpg")} alt ="Brewery"/>
      <div className="info">
        <div>Brewery: {name}</div>
        <div>City: {city}</div>
        <div> Phone: {phone}</div>
      </div>    
    </div>
  )

}


export default Tab;