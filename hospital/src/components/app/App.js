
import {BrowserRouter, Route, Routes} from "react-router-dom";

import LoginPage  from '../../pages/LoginPage/LoginPage'
import ListPage from "../../pages/ListPage/ListPage";
import Doctor from "../../pages/doctor/doctors";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path="/list-page" element={<ListPage></ListPage>}></Route>
          <Route path="/doctor-page" element={<Doctor></Doctor>}></Route>
        </Routes>

      </BrowserRouter>
  );
}

export default App;