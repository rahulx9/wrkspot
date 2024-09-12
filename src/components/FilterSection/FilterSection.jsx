import React from "react";
import styles from "./FilterSection.module.scss";
import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";
import { filterConfig } from "./FilterSection.constants";

const FilterSection = ({
  filter,
  handleFilterChange,
  handleClearFilter,
  setShowAll
}) => {
  const handleShowAllCountries = () => {
    setShowAll(true);
    handleClearFilter();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    handleFilterChange(name, value);
  };

  const handleFilterClear = () => {
    setShowAll(false);
    handleClearFilter();
  };

  return (
    <section className={styles.filterSection}>
      {filterConfig.map((config) => {
        const filterName = config.name;
        switch (config.type) {
          case "input":
            return (
              <Input
                key={filterName}
                type="text"
                name={filterName}
                value={filter[filterName] || ""}
                onChange={handleChange}
                className={config.className}
                placeholder={config.placeholder}
              />
            );
          case "select":
            return (
              <Select
                key={filterName}
                name={filterName}
                options={config.options}
                value={filter[filterName] || ""}
                onChange={handleChange}
                placeholder={config.placeholder}
              />
            );
          default:
            return null;
        }
      })}
      <Button onClick={handleFilterClear} variant="link">
        Clear
      </Button>
      <Button
        className={styles.showAllCountries}
        onClick={handleShowAllCountries}
      >
        Show all Countries
      </Button>
    </section>
  );
};

export default FilterSection;
