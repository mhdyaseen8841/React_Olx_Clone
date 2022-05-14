import React, { Fragment,useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {useNavigate} from 'react-router-dom'
import {FirebaseContext,AuthContext} from '../../store/context'
import LoadingSpinner from "../LoadingSpinner/spinner";

const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false);

  const [name,setName]= useState('')
  const [errorMessage, setErrorMessage] = useState("");
  const [price,setPrice]= useState('')
  const [description,setDescription]= useState('')
  const [category,setCategory]= useState('hi')
  const [image,setImage]= useState(null)
  let navigate = useNavigate()
 const date = new Date()

const handleSelectChange = (event) => {

  
 setCategory(event.target.value)
}

  const handleSubmit=()=>
  {
    setIsLoading(true)
        firebase.storage().ref(`image/${image.name}`).put(image).then(({ref})=>{
          ref.getDownloadURL().then((url)=>{
            console.log(url)
            firebase.firestore().collection('products').add({
              name,
              category,
              price,
              url,
              userId:user.uid,
              createdAt:date.toDateString()
          }).then(()=>{
            setIsLoading(false);
          navigate('/')
          })
          })
        }).catch((err)=>{
          setIsLoading(false);
          setErrorMessage(err)
          console.log(err)
        
  })
  }
  

  const renderCreate = (

<Fragment>
      <Header />
      <card >
        <div  className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={(e)=>{ setName(e.target.value) }}
              defaultValue={name}            />

            <br />
            <label className="label" htmlFor="fname">Category</label>
            <br />
            <select id="lang"  onChange={handleSelectChange}>
                  <option   value="select" >Select</option>
                  <option   value="Cars" >Cars</option>
                  <option   value="Motorcycles" >Motorcycles</option>
                  <option   value="Mobiles" >Mobiles</option>
                  <option   value="HouseForsale" >HouseForsale</option>
                  <option   value="Scooter" >Scooter</option>
                  <option   value="CommercialVehicles" >CommercialVehicles</option>
                  <option   value="Laptops" >Laptops</option>
                  <option   value="PC Peripharls" >PC Periphaarls</option>
                  <option   value="Hardware" >Hardware</option>
               </select>
              
               
            <br />
            <label className="label" htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname"   defaultValue={price}    onChange={(e)=>{ setPrice(e.target.value) }} name="Price" />
            <br />

            <br />
            <label className="label" htmlFor="fname">Description</label>
            <br />
            <input className="input" type="text" id="fname"   defaultValue={description}    onChange={(e)=>{ setDescription(e.target.value) }} name="Description" />
            <br />
      
          <br />
          {image?
          <img  className='image' alt='photo'  src={image ? URL.createObjectURL(image) : ''} ></img>
        : ''}
            <br />
            <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} />
            <br />
            <button disabled={isLoading} onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>


  
    )


  
  return (
    <div className="App">
      {isLoading ? <LoadingSpinner /> : renderCreate}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default Create;
