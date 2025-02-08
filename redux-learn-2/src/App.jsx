import {useSelector} from 'react-redux'
import './App.css'

function App() {
  const {products} = useSelector((state) => state.product)
  console.log(products);
  

  return (
    <>
      {products.map((item,ind) => (
        <div key={ind}>{item.name}</div>
      ))}
    </>
  )
}

export default App
