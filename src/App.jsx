import React, { useState } from 'react'

const App = () => {
  const [input,Setinput] = useState('')
  const [number,Setnumber] = useState('')
  const [profile,Setprofile] = useState('')
  const [contact,Setcontact] = useState([])
  const [edit,Setedit] = useState(null)
  function SubmitHandler(e){
    e.preventDefault()

    if(edit !== null){
      const newEdit = [...contact]
      newEdit[edit] = {input , number , profile}
      Setcontact(newEdit)
      Setedit(null)
    }
    else{
       Setcontact([...contact,{input,number,profile}])
    }
    console.log(input,number,profile);

    Setinput('')
    Setnumber('')
    Setprofile('')
  }
  function deleteContact(index){
  const updatedContacts = contact.filter((_, i) => i !== index)
  Setcontact(updatedContacts)
}
function EditContact(item, index){
  Setinput(item.input)
  Setnumber(item.number)
  Setprofile(item.profile)
  Setedit(index)
}



  return (
    <div className=' h-[100vh] w-[100vw] bg-gray-800 flex justify-around items-center p-3.5 max-sm:flex-col max-sm:gap-2'>
      <div className=' w-[40%] h-[90%] bg-gray-700 overflow-auto rounded-2xl flex flex-col p-3 items-center max-sm:w-[90vw] '>
        <h1 className=' text-[3vw] text-white max-sm:text-2xl '>CallList</h1>
        <form onSubmit={(e)=>{
          SubmitHandler(e)
        }} className=' mt-2 flex flex-col gap-2 h-[100%] w-[100%] justify-around items-center' action="">
          <input onChange={(e)=>{
            Setinput(e.target.value)
          }} value={input} className=' w-[80%] p-3 bg-transparent  text-white outline-none border-b-1 border-white' type="text" placeholder='Enter Your Name' required />
        <input  onChange={(e)=>{
            Setnumber(e.target.value)
          }} value={number} className=' w-[80%] p-3 bg-transparent text-white outline-none border-b-1 border-white' type="number"placeholder='Enter Your Number' required />
        <input  onChange={(e)=>{
            Setprofile(e.target.value)
          }} value={profile} className=' w-[80%] p-3 bg-transparent text-white outline-none border-b-1 border-white' type="text"placeholder='Enter Your ProfileUrl' required />
        <button className=' px-9 py-2 bg-gray-900 text-white rounded-2xl active:scale-95 cursor-pointer'>{edit!==null ? "Update":"Submit"}</button>
        </form>
      </div>
     <div className='w-[50%] h-[90%] bg-gray-700 rounded-3xl
max-sm:w-[90vw] flex flex-col items-center p-3 gap-3 overflow-y-auto '>

  {contact.map((item, index) => (
    <div
      key={index}
      className='min-h-[17%] w-[90%] bg-gray-500 rounded-2xl flex justify-between p-1.5 px-3 items-center  max-sm:gap-2 max-sm:w-[86vw]'>
         <img className=' object-cover h-16 w-16 rounded-full' src={item.profile || './assets/download.png'} alt="image" onError={(e) => {
    e.target.onerror = null
    e.target.src = './src/assets/download.png'
  }} />
         <div className=' flex flex-col '>
          <h1 className=' text-white font-bold'>{item.input}</h1>
          <p className=' text-white opacity-55'>{item.number}</p>
         </div>
        <div className=' flex justify-center gap-4 items-center'>
          <div onClick={()=>{
            EditContact(item,index)
          }} className='h-10 w-10 hover:text-blue-600 active:scale-85 cursor-pointer text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path></svg></div>
          <div onClick={()=>{
          deleteContact(index)
        }} className=' h-10 w-10 hover:text-red-600 active:scale-85 cursor-pointer text-white'> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>
        </div>
        </div>
    </div>
  ))}

</div>

    </div>
  )
}

export default App
