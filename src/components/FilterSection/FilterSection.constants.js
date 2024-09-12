import styles from "./FilterSection.module.scss";

const populationOptions = [
  { label: "< 1M", value: 1_000_000 },
  { label: "< 5M", value: 5_000_000 },
  { label: "< 10M", value: 10_000_000 },
];

export const filterConfig = [
  {
    type: "input",
    name: "name",
    placeholder: "Country Name",
    className: styles.countryNameInput,
  },
  {
    type: "select",
    name: "population",
    options: populationOptions,
    placeholder: "Population",
  },
];
