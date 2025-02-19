import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import Public from "./pages/Public.tsx";
import NewNote from "./pages/NewNote.tsx";
import Archive from "./pages/Archive.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="public" element={<Public />}/>
          <Route path="new-note" element={<NewNote />} />
          <Route path="archive" element={<Archive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;