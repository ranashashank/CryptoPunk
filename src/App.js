
import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import PunkList from './components/PunkList';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Main from './components/Main';

function App() {
  
  const[punkListData,setPunkListData]= useState([]);
  const[selectedPunk, setSelectedPunk]=useState(0);
  useEffect(()=>{
    const getMyNfts= async () => {
      const openseaData= await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x536bC255bCA44b17A87DC5ef0112F8852d58c04d&order_direction=asc'
      )
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
      
    }
    return getMyNfts()
  },[])

  return (
    <div className='App'>
    <Header/>
    {punkListData.length > 0  &&(
      <>
        <Main  selectedPunk={selectedPunk} punkListData={punkListData}/>
        <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}  
            /> 
      </>
    )}
    </div>
  )
}

export default App;
