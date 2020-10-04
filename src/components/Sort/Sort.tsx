import React, { useCallback } from "react";
import {
  StyledLabel,
  StyledOption,
  StyledSelect,
  StyledSelectWrapper,
} from "./styled.sort";
import { Box } from "atomic-layout";
import { connect } from "react-redux";
import { IAppState } from "../../store/reducers/rootReducer";
import { sortMovies } from "../../store/actions/sortMovies";
import { loadMovies } from "../../store/actions/loadMovies";

interface ISortType {
  value: string;
  label: string;
}
interface ISortProps {
  sortValues: ISortType[];
  selectedSorValue: string;
  setSortBy: Function;
  loadMoviesProp: Function;
}

const Sort = ({
  sortValues,
  selectedSorValue,
  setSortBy,
  loadMoviesProp,
}: ISortProps) => {
  const changeValue = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    loadMoviesProp();
  }, []);

  return (
    <Box
      as={StyledSelectWrapper}
      flex
      justifyContentMd={"flex-end"}
      alignItems={"center"}
    >
      <StyledLabel htmlFor="sort-by">SORT BY</StyledLabel>
      <StyledSelect
        id="sort-by"
        onChange={changeValue}
        defaultValue={selectedSorValue}
      >
        {sortValues.map(({ value, label }) => (
          <StyledOption key={`sort-${value}`} value={value}>
            {label.toUpperCase()}
          </StyledOption>
        ))}
      </StyledSelect>
    </Box>
  );
};

const mapState = (state: IAppState) => ({
  selectedSorValue: state.params.sortBy,
});

const mapDispatch = {
  setSortBy: (sort: string) => sortMovies(sort),
  loadMoviesProp: () => loadMovies(),
};

export default connect(mapState, mapDispatch)(Sort);
