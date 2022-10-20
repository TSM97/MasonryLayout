import { useEffect ,useState} from "react";
import Tab from "../Tab/Tab";

const Body = () =>{
    const url = 'https://api.openbrewerydb.org/breweries';
    const [Brews,SetBrews]=useState([])

    useEffect(()=>{
    //    const data=(fetch(url)
    //     .then(res=>{
    //     if(res.ok){
    //         console.log("Success")
    //         return res.json()
    //     }else{
    //         console.log("Not Success")
    //     }})
    //     .then(data=>console.log(data)))
    //     SetBrews(data);
    const fetchData = async () => {
        const json = await fetch(url);
        const data = await json.json();
        SetBrews(data);
    }
    fetchData().catch(console.error);
    },[])

    const Tinfo=shuffle((Brews.map(({id,name,city,state,phone})=> {return {id,name,city,state,phone}} )))

    const Ids=Brews.map(({id},key)=>{
        let image=key+1;
        return {id,image:image+'b'}}
    );

    return(
  
        Tinfo.map((data,i)=>{
            return (<Tab 
            id={data.id}    
            name={data.name}
            city={data.city}
            phone={data.phone}
            key={i}
            ids={chooseImage(Ids,data.id)}
            >  
            </Tab>)
        })
    )       

}
const chooseImage = (Ids,id) =>{
    for(let i=0; Ids.length; i++){
      if(Ids[i].id===id){
        return Ids[i].image
      }
    }
}

const shuffle= arr => [...arr].sort(()=> Math.random() - 0.5);

export default Body;