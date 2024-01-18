// export const findOfficialName = (obj) => {
//   for (const key in obj) {
//     if (obj[key]?.official) {
//       return obj[key].official;
//     } else if (typeof obj[key] === "object") {
//       const result = findOfficialName(obj[key]);
//       if (result) return result;
//     }
//   }
//   return null;
// };

// export const findNativeName = (obj) => {
//   for (const key in obj) {
//     if (key === "nativeName" && obj[key]?.official) {
//       return obj[key].official;
//     } else if (typeof obj[key] === "object") {
//       const result = findNativeName(obj[key]);
//       if (result) return result;
//     }
//   }
//   return null;
// };

// export const getCountryCode = (country) => {
//   // console.log(country?.idd?.root + country?.idd?.suffixes[0])
//   return country?.idd?.root + country?.idd?.suffixes[0];
// };
