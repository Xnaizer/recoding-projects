import 'remixicon/fonts/remixicon.css';

import { RouterProvider } from 'react-router-dom'
import { router } from './routers/AdoptPets';




function App() {


  return (
    <>
      {/* <div className="scrollbar-thin scrollbar-thumb-linearBlue scrollbar-thumb-rounded-lg text-black"> */}
      <RouterProvider router={router} />

    </>
  )
}

export default App
