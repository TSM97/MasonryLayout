import { useEffect ,useState} from "react";
import Tab from "../Tab/Tab";

const chooseImage = (Ids,id) => Ids.find(element => element.id===id).image
const shuffle= arr => [...arr].sort(()=> Math.random() - 0.5);
const BASE_URL = 'https://api.openbrewerydb.org/breweries';

const Body = ({search}) =>{

  const [brews,setBrews]=useState([]);
  const [filterBrews, setFilterBrews] = useState([])

  const Tinfo=shuffle((filterBrews.map(({id,name,city,state,phone})=> {return {id,name,city,state,phone}} )));

  const Ids=filterBrews.map(({id},key)=>{
    let image=key+1;
    return {id,image:image+'b'}}
  );

  useEffect(()=>{
    const fetchData = async () => {
      const json = await fetch(BASE_URL);
      const data = await json.json();
      setBrews(data);
      setFilterBrews(data)
    }
    fetchData().catch(console.error);
  },[]);

  useEffect(()=>{
    const filtered= brews.filter((data)=>{return data.name.toLowerCase().includes(search.toLowerCase())})
    if(filtered.length===0){
        setFilterBrews(brews)
    }else
    {console.log(filtered)
    setFilterBrews(filtered)}
  },[search])


  return(
    Tinfo.map((data,i)=>{
      return (<Tab
        id={data.id}
        name={data.name}
        city={data.city}
        phone={data.phone}
        key={i}
        img={chooseImage(Ids,data.id)}
      >
      </Tab>);
    })
  );
}

export default Body;
