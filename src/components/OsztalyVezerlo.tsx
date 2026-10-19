
interface OsztalyVezerloPros {
    jelenletNovelese: () => void;
    jelenletCsokkentese: () => void;
    hangulatValtoztatas: () => void;
}
// gomb a jelenlévők számának növelésére;
// gomb a jelenlévők számának csökkentésére;
// gomb az osztály hangulatának megváltoztatására.

export const OsztalyVezerlo = ({ jelenletNovelese, jelenletCsokkentese, hangulatValtoztatas }: OsztalyVezerloPros) => {
    return <>
        <div className="container">
            <h1 >Osztály vezérlő</h1>
            <button className="btn btn-success" onClick={jelenletNovelese}>Jelenlét növelése</button> 
            <button className="btn btn-danger" onClick={jelenletCsokkentese}>Jelenlét csökkenése</button>
            <button className="btn btn-warning" onClick={hangulatValtoztatas}>Hangulat változtatása</button>
        </div>
    </>
}