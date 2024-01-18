function CountryCard({
  officialName,
  nativeName,
  altSpellings,
  image,
  cca2,
  cca3,
  countryCallingCode,
}) {
  return (
    <div className="max-w-sm bg-orange-200 border border-gray-200 rounded-lg shadow ">
      <div className="w-full h-50">
        <img className="object-cover w-full h-full" src={image} alt="" />
      </div>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {officialName}
          </h5>
        </a>

        <p className="mb-1 font-normal text-gray-700">
          2 character Country Code: <span>{cca2}</span>
        </p>
        <p className="mb-1 font-normal text-gray-700">
          3 character Country Code: <span>{cca3}</span>
        </p>

        <div className="text-black">
          <h4>{nativeName}</h4>
        </div>

        <div className="flex gap-1 flex-wrap">
          {altSpellings.map((altSpelling, index) => (
            <div
              key={index}
              className="bg-blue-100 inline-block rounded-md text-black p-1"
            >
              {altSpelling}
            </div>
          ))}
        </div>

        <p className="mb-1 font-normal text-gray-700">
          Country Calling Codes: <span>{countryCallingCode}</span>
        </p>
      </div>
    </div>
  );
}

export default CountryCard;