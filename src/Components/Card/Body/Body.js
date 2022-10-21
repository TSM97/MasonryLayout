import { useEffect ,useState} from "react";
import Tab from "../Tab/Tab";

const Body = ({search}) =>{
    const url = 'https://api.openbrewerydb.org/breweries';
    const [brews,setBrews]=useState([])

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
    //     setBrews(data);
    const fetchData = async () => {
        const json = await fetch(url);
        const data = await json.json();
        setBrews(data);
    }
    fetchData().catch(console.error);
    },[])

    let Tinfo=shuffle((brews.map(({id,name,city,state,phone})=> {return {id,name,city,state,phone}} )))

    const Ids=brews.map(({id},key)=>{
        let image=key+1;
        return {id,image:image+'b'}}
    );

//    useEffect(()=>{
//     console.log(search)
//    if(search===null ){}
//    else {
//     const searched = Tinfo.filter((data)=>data.name.toLowerCase().includes(search.toLowerCase()))
//     setBrews(searched)}}
//    ,[search])
       

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
            </Tab>)           
        })
    )       

}
const chooseImage = (Ids,id) =>{
   
    return Ids.find(element => element.id===id).image

}

const shuffle= arr => [...arr].sort(()=> Math.random() - 0.5);

export default Body;