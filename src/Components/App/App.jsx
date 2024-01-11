import Header from '../Header/Header'
import {useState} from "react";


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
    </>
  );
}

export default App;
