import {useState, useTransition} from 'react';
import Products from './components/Products';
import data from './data'

const filterHandler = (searchValue) => {
  if(!searchValue) {
    return data
  }

  return data.filter((d) => d.id.toString().includes(searchValue))
}

function App() {
  const [searchValue, setSearchValue] = useState('');
  // const [isPending, startTransition] = useTransition()

  const filterPosts  = filterHandler(searchValue)
  
  const searchHandler = (e) => {
  // startTransition(() => {
    setSearchValue(e.target.value)
  // })
  
  }
  
  return (
    <div className="flex flex-col">
      <input type='text' className="bg-white shadow-lg rounded-full px-3 mt-16 mx-auto w-full max-w-md py-2 outline-none" onChange={(e) => searchHandler(e)} value={searchValue} />
      {/* <p className={isPending ? 'mx-auto bg-blue-500 py-2 px-4 rounded-lg mt-5 text-white' : ''}>{isPending ? 'DATA IS FETCHING............' : ''}</p> */}
      <Products products={filterPosts} />
    </div>
  );
}

export default App;
