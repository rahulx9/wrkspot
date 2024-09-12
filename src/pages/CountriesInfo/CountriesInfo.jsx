import { useCallback, useEffect, useState } from "react";
import FilterSection from "../../components/FilterSection";
import Heading from "../../components/Heading";
import Table from "../../components/CountryInfoTable";
import { getAllCountries } from "../../services/api/countryService";
import { hasValidValues } from "../../utils/commonUtils";
import ErrorBoundary from "../../utils/ErrorBoundary";

const CountriesInfo = () => {
  const [allCountriesData, setAllCountriesData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [filter, setFilter] = useState({});
  const [showAll, setShowAll] = useState(false);

  const fetchAllCountriesData = async () => {
    const data = await getAllCountries();
    setAllCountriesData(data);
  };

  const handleFilterChange = useCallback((key, value) => {
    setShowAll(false);
    setFilter((_filter) => ({
      ..._filter,
      [key]: value,
    }));
  }, []);

  const handleClearFilter = useCallback(() => {
    setFilter({});
  }, []);

  useEffect(() => {
    fetchAllCountriesData();
  }, []);

  useEffect(() => {
    if (showAll) {
      setTableData(allCountriesData);
      return;
    }

    const nameFilter = filter?.name?.toLowerCase() || "";
    const populationFilter = filter?.population || 0;

    if (!hasValidValues(filter)) {
      setTableData([]);
      return;
    }

    const newCountriesData = allCountriesData
      .filter((country) => country.name?.toLowerCase().includes(nameFilter))
      .filter((country) => country.population >= populationFilter);

    setTableData(newCountriesData);
  }, [filter, allCountriesData, showAll]);

  return (
    <div>
      <Heading />
      <FilterSection
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleClearFilter={handleClearFilter}
        setShowAll={setShowAll}
      />
      <ErrorBoundary>
        <Table tableData={tableData} />
      </ErrorBoundary>
    </div>
  );
};

export default CountriesInfo;
