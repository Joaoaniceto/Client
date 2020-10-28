import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";

export default function Body(){
  
const [showdata, setshowdata] = useState([]);
const { register, handleSubmit } = useForm();
const [Loading, setLoading] = useState(false);

const onSubmit = async (data) => {
  try {
    setLoading(true);
    senddata(data.url,data.name);
    setLoading(false);
  } catch (error) {
    console.error(error);
    setLoading(false);
  }
};

async function senddata(url,name){
 const response = await  fetch('Http://localhost:1337/url',{
   method: 'POST',
   headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    url:url,
    name:name
  }),
});
 setshowdata(JSON.stringify({
  url: 'localhost:1337/' + name,
  name:name
}));
}



return (<div>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label htmlFor="low">url</label>
        <input type="Url"  name="url" ref={register} />
      </div>
      <div className="field">
        <label htmlFor="high">Name</label>
        <input  name="name" ref={register} />
      </div>
      <button disabled={Loading}>{Loading ? 'Loading...' : 'Create Entry'}</button>
    </form>
    <div>{showdata}</div>
</div>);
}