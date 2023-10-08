import { useEffect, useState } from "react";
import "./App.css";

const CAT_FACT_RANDOM = "https://catfact.ninja/fact";
// const CAT_IMAGE_URL = `https://cataas.com/cat/says/{firstWord}?size=50&color=red&json=true`;

const CAT_IMAGE_URL = "https://cataas.com/";
function App() {
    const [fact, setFact] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const getCatFact = () => {
        fetch(CAT_FACT_RANDOM)
            .then((response) => response.json())
            .then((data) => {
                const { fact } = data;
                setFact(fact);
            });
    };

    // this effect runs when the fact is gathered
    useEffect(getCatFact, []);
    // () => {
        
        // async function getCatFact() {
        //     const res = await fetch(CAT_FACT_RANDOM);
        //     const data = await res.json();
        //     setFact(data.fact);
        // }
        // fetch(CAT_FACT_RANDOM)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         const { fact } = data;
        //         setFact(fact);
        //     });
    // }, []);

    // this effect runs when the image is gathered

    useEffect(() => {
        if (!fact) return;

        const firstWords = fact.split(" ", 5).join(" ");

        fetch(
            `https://cataas.com/cat/says/${firstWords}?size=50&color=red&json=true`
        )
            .then((res) => res.json())
            .then((data) => {
                const { url } = data;
                setImageUrl(url);
            });
    }, [fact]);

    const handleClick = () => {
        getCatFact();
    }

    return (
        <main>
            <h1>Kitten app</h1>
            <button onClick={handleClick}>Get a new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && (
                <img
                    src={`${CAT_IMAGE_URL}${imageUrl}`}
                    alt={`Image fetch from API ${fact}`}
                />
            )}
        </main>
    );
}

export default App;
