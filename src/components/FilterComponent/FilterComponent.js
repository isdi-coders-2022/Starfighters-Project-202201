const FilterPlanets = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter by planet
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>Tatooine</li>
        <li>Naboo</li>
        <li>Alderaan</li>
        <li>Stewjon</li>
        <li>Eriadu</li>
        <li>Nashyyyk</li>
        <li>Corellia</li>
        <li>Rodia</li>
        <li>Bestine</li>
        <li>Kamino</li>
        <li>Trandosha</li>
        <li>Socorro</li>
        <li>Bespin</li>
        <li>Mon Cala</li>
        <li>Chandrila</li>
        <li>Endor</li>
        <li>Sullust</li>
        <li>Coruscant</li>
        <li>Neimoida</li>
        <li>Toydaria</li>
        <li>Malastare</li>
        <li>Dathomir</li>
        <li>Ryloth</li>
        <li>Vulpter</li>
        <li>Troiken</li>
        <li>Tund</li>
        <li>Haruun Kal</li>
        <li>Cerea</li>
        <li>Quermia</li>
        <li>Glee Anselm</li>
        <li>Iktotch</li>
        <li>Concor Dawn</li>
        <li>Dorin</li>
        <li>Champala</li>
        <li>Geonosis</li>
        <li>Mirial</li>
        <li>Serenno</li>
        <li>Yavin 4</li>
        <li>Umbara</li>
        <li>Ojom</li>
        <li>Skako</li>
        <li>Zolan</li>
        <li>Shili</li>
        <li>Kalee</li>
        <li>Parnassos</li>
        <li>Utapau</li>
        <li>Jakku</li>
        <li>Scipio</li>
        <li>Nar Shaddaa</li>
      </ul>
    </div>
  );
};

const FilterSpecies = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter by species
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>Twi'lek</li>
        <li>Aleena</li>
        <li>Vulptereen</li>
        <li>Toydarian</li>
        <li>Dug</li>
        <li>Mon Calamari</li>
        <li>Humans</li>
        <li>Droid</li>
        <li>Hutt</li>
        <li>Wookiee</li>
        <li>Rodian</li>
        <li>Trandoshan</li>
        <li>Dathomirian Zabrak</li>
        <li>Ewook</li>
        <li>Sullustan</li>
        <li>Neimodian</li>
        <li>Gungan</li>
        <li>Xexto</li>
        <li>Tund</li>
        <li>Cerean</li>
        <li>Nautolan</li>
        <li>Iridonian Zabrak</li>
        <li>Tholothian</li>
        <li>Iktotchi</li>
        <li>Pau'an</li>
        <li>Kel Dor</li>
        <li>Chagrian</li>
        <li>Geonosian</li>
        <li>Mirialan</li>
        <li>Clawdite</li>
        <li>Besalisk</li>
        <li>Kaminoan</li>
        <li>Skakoan</li>
        <li>Muun</li>
        <li>Togruta</li>
        <li>Kaleesh</li>
        <li>Umbaran</li>
        <li>Quermian</li>
      </ul>
    </div>
  );
};

export { FilterSpecies, FilterPlanets };
