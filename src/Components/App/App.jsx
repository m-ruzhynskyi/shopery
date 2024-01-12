import Header from '../Header/Header'
import {useState} from "react";
import Main from "../Main/Main";


function App() {
    const [page, setPage] = useState("home");
    function changePage(page) {
        setPage(page.textContent.toLowerCase())
        for(const p of page.parentElement.children){
            (p.textContent === page.textContent) ? p.classList.add('active'): p.classList.remove('active')
        }
    }
  return (
    <>
        <Header setPage={(current) => changePage(current)} />
        <Main page={page} />
    </>
  );
}

export default App;
