import CountryCard from "./CountryCard";

function Country({ country }) {
  let firstPropertyOfNativeName;

  let countryCallingCode;

  countryCallingCode =
    country.idd?.suffixes?.[0] === ""
      ? country.idd?.root
      : country.idd?.suffixes?.[0].length <= 2
      ? country.idd?.root + country.idd?.suffixes[0]
      : country.idd?.root + "-" + country.idd?.suffixes?.[0];

  const keys = country.name?.nativeName
    ? Object.keys(country.name.nativeName)
    : [];

  if (keys?.length > 0) {
    const firstProperty = country.name?.nativeName?.[keys[0]];
    firstPropertyOfNativeName = firstProperty;
  } else {
    firstPropertyOfNativeName = null;
  }

  return (
    <>
      <CountryCard
        officialName={country.name?.official}
        nativeName={firstPropertyOfNativeName?.official}
        altSpellings={country?.altSpellings}
        image={country.flags?.png}
        cca2={country?.cca2}
        cca3={country?.cca3}
        countryCallingCode={countryCallingCode}
      />
    </>
  );
}

export default Country;
