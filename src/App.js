import './App.css';

import SignIn from "./auth/signin";
import SignUp from "./auth/signup";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import VineryLayout from "./vinery/layout"
import VDashboard from "./vinery/dashboard";
import {Vineyard} from "./vinery/components/vineyard";
import {Grape} from "./vinery/components/grape";
import {Ferment} from "./vinery/components/ferment";
import {Press} from "./vinery/components/press";
import {Fill} from "./vinery/components/fill";
import {Bottle} from "./vinery/components/bottle";
import VineyardSummary from "./vinery/components/vineyard_summary";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route index element={<VineryLayout/>} />
                        <Route element={<VineryLayout/>}>
                            <Route path="/dashboard" element={<VDashboard/>}/>

                            <Route path="/vineyard" element={<Vineyard/>}/>
                            <Route path="/vineyard/:id" element={<VineyardSummary/>}/>

                            <Route path="/grape" element={<Grape/>}/>
                            <Route path="/ferment" element={<Ferment/>}/>
                            <Route path="/press" element={<Press/>}/>
                            <Route path="/fill" element={<Fill/>}/>
                            <Route path="/bottle" element={<Bottle/>}/>
                        </Route>
                        <Route path="signin" element={<SignIn/>}/>
                        <Route path="signup" element={<SignUp/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
