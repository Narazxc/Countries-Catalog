function ErrorMessage({ message }) {
  // Split the sentence into an array of words
  const words = message.split(/\s+/);

  // Get the last word using array indexing
  const countryName = words[words.length - 1];

  // Join the words before the last word to create the first part
  const firstPart = words.slice(0, words.length - 1).join(" ");

  return (
    <p className="error">
      <span>⛔ </span>
      {firstPart} <span className="italic">{countryName}</span>
    </p>
  );
}

export default ErrorMessage;
