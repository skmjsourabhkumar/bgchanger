import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const[color,setColor]=useState('#f0abfc')
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
         <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
              <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"blue"}} onClick={()=> setColor('blue')}>Blue</button>
                            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"black"}} onClick={()=> setColor('black')}>Black</button>
                            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"red"}} onClick={()=> setColor('red')}>Red</button>
                            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"orange"}} onClick={()=> setColor('orange')}>Orange</button>
                            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"green"}} onClick={()=> setColor('green')}>Green</button>
                            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"#84cc16"}} onClick={()=> setColor('#84cc16')}>Lime</button>
              <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"#881337"}} onClick={()=>setColor('#881337')}>Rose</button>
              
            </div>
          </div> 
    </div>
  );
}

export default App;
