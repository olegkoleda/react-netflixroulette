import React, { ChangeEvent, useCallback, useState } from "react";
import { StyledRadioButton } from "./styled.radioButton";
import { Box } from "atomic-layout";
import { IAppState } from "../../store/reducers/rootReducer";
import { connect } from "react-redux";
import { filterMovie } from "../../store/actions/filterMovie";
import { loadMovies } from "../../store/actions/loadMovies";

interface IFilterType {
  value: string;
  label: string;
}

interface IFilterProps {
  filters: Array<IFilterType>;
  activeFilter: string;
  setFilter: Function;
  loadMoviesProp: Function;
}

const Filter: React.FC<IFilterProps> = ({
  filters,
  activeFilter,
  setFilter,
  loadMoviesProp,
}) => {
  const changeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    loadMoviesProp();
  }, []);

  return (
    <Box flex onChange={changeValue}>
      {filters.map(({ label, value }: IFilterType) => {
        const checked = value === activeFilter;
        const filterId = `filter_${label}`;
        return (
          <StyledRadioButton checked={checked} key={filterId}>
            <input
              defaultChecked={checked}
              type="radio"
              name="filter"
              value={value}
              id={filterId}
            />
            <label htmlFor={filterId}>{label.toUpperCase()}</label>
          </StyledRadioButton>
        );
      })}
    </Box>
  );
};

const mapState = (state: IAppState) => ({
  activeFilter: state.params.filter,
});

const mapDispatch = {
  setFilter: (filter: string) => filterMovie(filter),
  loadMoviesProp: () => loadMovies(),
};

export default connect(mapState, mapDispatch)(Filter);
