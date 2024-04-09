import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function ContactInnerBranchSearch({
  location,
  updateLocation,
  data,
  setFilteredData,
  setMap,
}) {
  const [filteredStates, setFilteredStates] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredBrnaches, setFilteredBranches] = useState([]);

  const handleChangeCountry = (event) => {
    const selectedCountry = event.target.value;
    // Filter states based on the selected country
    const states = [
      ...new Set(
        data
          .filter((item) => item.country === selectedCountry)
          .map((item) => item.state)
      ),
    ];
    setFilteredStates(states);
    updateLocation({
      country: selectedCountry,
      state: "",
      city: "",
      branch: "",
    });

    const filteredData = data.filter(
      (item) => item.country === selectedCountry
    );
    setFilteredData(filteredData);
  };

  const handleChangeState = (event) => {
    const selectedState = event.target.value;
    // Filter cities based on the selected state
    const cities = [
      ...new Set(
        data
          .filter((item) => item.state === selectedState)
          .map((item) => item.city)
      ),
    ];
    setFilteredCities(cities);
    // Reset city and branch when state changes
    updateLocation({ state: selectedState, city: "", branch: "" });

    const filteredData = data.filter(
      (item) =>
        item.country === location.country && item.state === selectedState
    );
    setFilteredData(filteredData);
  };

  const handleChangeCity = (event) => {
    const selectedCity = event.target.value;
    // Filter branches based on the selected city
    const branches = [
      ...new Set(
        data
          .filter((item) => item.city === selectedCity)
          .map((item) => item.branch)
      ),
    ];
    setFilteredBranches(branches);
    // Reset branch when city changes
    updateLocation({ city: selectedCity, branch: "" });

    const filteredData = data.filter(
      (item) =>
        item.country === location.country &&
        item.state === location.state &&
        item.city === selectedCity
    );
    setFilteredData(filteredData);
  };

  const handleChangeBranch = (event) => {
    const selectedBranch = event.target.value;
    // Update branch when branch changes
    updateLocation({ branch: selectedBranch });

    const filteredData = data.filter(
      (item) =>
        item.country === location.country &&
        item.state === location.state &&
        item.city === location.city &&
        item.branch === selectedBranch
    );
    setMap(filteredData[0]?.gtag);
    setFilteredData(filteredData);
  };

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="country-label">Country</InputLabel>
        <Select
          labelId="country-label"
          id="country-select"
          label="Country"
          onChange={handleChangeCountry}
        >
          <MenuItem value="none" onClick={()=>{setMap("")}}>Headquarter</MenuItem>
          {[...new Set(data?.map((item) => item.country))].sort().map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="state-label">State</InputLabel>
        <Select
          labelId="state-label"
          id="state-select"
          label="State"
          value={location.state}
          onChange={handleChangeState}
          disabled={!location.country}
        >
          {filteredStates.sort().map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="city-label">City</InputLabel>
        <Select
          labelId="city-label"
          id="city-select"
          label="City"
          value={location.city}
          onChange={handleChangeCity}
          disabled={!location.state}
        >
          {filteredCities.sort().map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="city-label">Branch</InputLabel>
        <Select
          labelId="branch-label"
          id="branch-select"
          label="Branch"
          value={location.branch}
          onChange={handleChangeBranch}
          disabled={!location.city}
        >
          {filteredBrnaches.sort().map((branch) => (
            <MenuItem key={branch} value={branch}>
              {branch}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
