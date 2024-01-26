import CountryDetail from "./CountryDetail";
import { Modal } from "./Modal";

function CountryCard({
  country,
  officialName,
  nativeName,
  altSpellings,
  image,
  cca2,
  cca3,
  countryCallingCode,
  onOpenModal,
  isOpenModal,
}) {
  return (
    <>
      <div className="max-w-sm rounded-lg bg-orange-200 hover:shadow-2xl">
        <div className="h-50 w-full">
          <img className="h-full w-full object-cover" src={image} alt="" />
        </div>

        <div className="p-5">
          <h5
            onClick={onOpenModal}
            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:cursor-pointer hover:text-gray-500 dark:text-white"
          >
            {officialName}
          </h5>

          <p className="mb-1 font-normal text-gray-700">
            2 character Country Code: <span>{cca2}</span>
          </p>
          <p className="mb-1 font-normal text-gray-700">
            3 character Country Code: <span>{cca3}</span>
          </p>

          <div className="text-black">
            <h4>{nativeName}</h4>
          </div>

          <div className="flex flex-wrap gap-1">
            {altSpellings.map((altSpelling, index) => (
              <div
                key={index}
                className="inline-block rounded-md bg-blue-100 p-1 text-black"
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

      <Modal isOpenModal={isOpenModal} onOpenModal={onOpenModal}>
        <CountryDetail country={country} />
      </Modal>
    </>
  );
}

export default CountryCard;
