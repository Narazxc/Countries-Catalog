function CountryDetail({ country }) {
  return (
    <div className="">
      <div>
        <img
          src={country.flags.png}
          className="object-fit w-full"
          alt={country.name.official}
        />
      </div>
      <p className="text-2xl font-bold">{country.name.official}</p>
      <p>
        Area: <span>{country?.area}</span>
      </p>
      <p>
        Borders:{" "}
        <span>
          {country.borders ? (
            country.borders.map((border, index) => (
              <span key={index}>{border}, </span>
            ))
          ) : (
            <span>none</span>
          )}
        </span>
      </p>
      <p>
        Capital:
        {country.capital &&
          country.capital.map((capital, index) => (
            <span key={index}> {capital}</span>
          ))}
      </p>
      <p>
        Latlng:
        {country.capitalInfo && country.capitalInfo.latlng
          ? country.capitalInfo.latlng.map((latlng, index) => (
              <span key={index}> {latlng}</span>
            ))
          : ""}
      </p>

      <p>
        Car:{" "}
        {country.car && country.car.side ? <span>{country.car.side}</span> : ""}
      </p>

      <div className="flex gap-3">
        <span>Coat of Arms:</span>{" "}
        {country.coatOfArms && (
          <img
            className="h-12 w-12"
            src={country.coatOfArms.png}
            alt={country.name.official}
          />
        )}
      </div>

      <p>
        Continent:{" "}
        {country.continents
          ? country.continents.map((continent) => (
              <span key={country.name.official}>{continent}</span>
            ))
          : "none"}
      </p>

      <p>
        Currencies:{" "}
        {country.currencies ? (
          <span>
            {country.currencies[Object.keys(country.currencies)[0]].name}
          </span>
        ) : (
          "none"
        )}
      </p>

      <p>
        Currencies symbol:{" "}
        {country.currencies ? (
          <span>
            {country.currencies[Object.keys(country.currencies)[0]].symbol}
          </span>
        ) : (
          "none"
        )}
      </p>

      <p>
        Demonym:{" "}
        {country.demonyms ? (
          <span>{country.demonyms[Object.keys(country.demonyms)[0]].f}</span>
        ) : (
          "none"
        )}
      </p>

      <p>Fifa: {country.fifa ? <span>{country.fifa}</span> : "none"}</p>

      <p>
        Independent:{" "}
        {country.independent && country.independent ? (
          <span>True</span>
        ) : (
          <span>False</span>
        )}
      </p>

      <p>
        Land Locked:{" "}
        {country.landlocked && country.landlocked ? (
          <span>True</span>
        ) : (
          <span>False</span>
        )}
      </p>

      <p>
        Languages:{" "}
        {country.languages
          ? Object.values(country.languages).map((lang, index) => (
              <span key={index}>{lang}, </span>
            ))
          : "none"}
      </p>

      <p>
        Map:{" "}
        {country.maps && (
          <a
            target="_blank"
            rel="noreferrer"
            className="outline-none hover:text-purple-600"
            href={country.maps.googleMaps}
          >
            {country.maps.googleMaps}
          </a>
        )}
      </p>

      <p>
        Population: {country.population && <span>{country.population}</span>}
      </p>

      <p>Region: {country.region && <span>{country.region}</span>}</p>
      <p>Sub-region: {country.subregion && <span>{country.subregion}</span>}</p>

      <div className="flex gap-2">
        <div>Timezones: </div>
        {country.timezones && (
          <div className="flex flex-wrap gap-2">
            {country.timezones.map((timezone, index) => (
              <span key={index} className="bg-pink-100">
                {timezone}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryDetail;
