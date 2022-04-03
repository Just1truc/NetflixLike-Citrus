import { Route, Routes, BrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Home from "./Home";
import Login from "./Login";

const App = () : JSX.Element => (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/browse" element={<Browse/>} />
                <Route path="/movies" element={<h1>movies</h1>} />
                <Route path="/profile" element={<h1>profile</h1>} />
                <Route path="/signup" element={<h1>signUp</h1>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/accounts" element={<h1>Accounts</h1>} />
            </Routes>
        </BrowserRouter>
    </>
);

export default App;
