

interface OsztalyAdatokProps {
    jelenlevok: number;
    hangulat: string;
};

export const OsztalyAdatok = ({ jelenlevok, hangulat }: OsztalyAdatokProps) => {
    return <>
        <div className="container">
            <h1>Osztáyladatok</h1>
            <p>jelenlévők száma: {jelenlevok}</p>
            <p>aktuális hangulat: {hangulat}</p>
        </div>
    </>
}