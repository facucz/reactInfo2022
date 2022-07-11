import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import NoticesList from "./NoticesList";
import '../styles/searchBar.css';

function SearchBar() {
    const [inputText, setInputText] = useState("");
    const [isSearchDisable, setIsSearchDisable] = useState(true);
    const [query, setQuery] = useState("");

    let inputHandler = (e) => {
        //convert input text to lower case
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        if (lowerCase.length > 3) {
            setIsSearchDisable(false);
        } else {
            setIsSearchDisable(true);
        }
    };

    let clickHandler = () => {
        setQuery(inputText)
    };

    return(
        <div className="main">
            <h1>Ingrese la noticia que desea buscar</h1>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={inputHandler}
                    fullWidth
                    label="Ingrese noticia a buscar"
                />
            </div>
            <Button 
                variant="outlined"
                disabled={isSearchDisable}
                onClick={clickHandler}
                >Buscar
            </Button>
            <NoticesList input={query} />
        </div>
    )
}

export default SearchBar;