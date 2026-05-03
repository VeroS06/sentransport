import './Statistique.css';

function Statistique1() {
    return (
        <div className="statistique">
            <span className="statistique-chiffre">10</span>
            <span className="statistique-libelle">lignes</span>
        </div>
    );
}

function Statistique2() {
    return (
        <div className="statistique">
            <span className="statistique-chiffre">150</span>
            <span className="statistique-libelle">arrêts</span>
        </div>
    );
}

function Statistique3() {
    return (
        <div className="statistique">
            <span className="statistique-chiffre">5000</span>
            <span className="statistique-libelle">voyageurs par jour</span>
        </div>
    );
}

export { Statistique1, Statistique2, Statistique3 };