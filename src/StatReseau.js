function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((somme, ligne) => somme + ligne.arrets, 0);
  const ligneMax = lignes.reduce((max, ligne) => ligne.arrets > max.arrets ? ligne : max, lignes[0]);

  return (
    <div className="stat-reseau">
      <p>Nombre total de lignes : {totalLignes}</p>
      <p>Nombre total d'arrêts : {totalArrets}</p>
      <p>Ligne avec le plus d'arrêts : {ligneMax.numero} ({ligneMax.arrets} arrêts)</p>
    </div>
  );
}

export default StatReseau;