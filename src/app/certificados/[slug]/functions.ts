export const getConclusionDate = () => {
  const dateFormatter = Intl.DateTimeFormat("pt-br", {
    dateStyle: "short",
  });
  const timeFormatter = Intl.DateTimeFormat("pt-br", {
    timeStyle: "short",
  });
  const emissionDate = new Date();
  const conclusion = {
    date: dateFormatter.format(emissionDate),
    hour: timeFormatter.format(emissionDate),
  };
  return conclusion;
};
