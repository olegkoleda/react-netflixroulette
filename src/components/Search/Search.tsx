import React from "react";
import { Formik, FormikProps, Form, Field } from "formik";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { StyledInput } from "./styled.search";
import { Composition } from "atomic-layout";
import Button from "../Button";
import { setSearchQuery } from "../../store/actions/searchMovie";
import { connect } from "react-redux";
import { IAppState } from "../../store/reducers/rootReducer";

interface IFormValues {
  search: string;
}

interface ISearchProps extends RouteComponentProps {
  setSearchQueryProp: Function;
  searchQuery: string;
}

const Search: React.FC<ISearchProps> = (props) => (
  <Formik
    initialValues={{
      search: props.searchQuery,
    }}
    onSubmit={({ search }) => {
      if (search.trim().length) {
        props.setSearchQueryProp(search);
        props.history.push(`/search/${search}`);
      }
    }}
  >
    {(props: FormikProps<IFormValues>) => (
      <Form>
        <Composition
          gap={"1rem"}
          templateRows={"3.5rem 3.5rem"}
          templateCols={"none"}
          templateRowsMd={"none"}
          templateColsMd={"4fr 1fr"}
        >
          <Field as={StyledInput} type="text" name="search" />
          <Button type="submit">SEARCH</Button>
        </Composition>
      </Form>
    )}
  </Formik>
);

const mapStateToProps = (state: IAppState) => ({
  searchQuery: state.params.search,
});

const mapDispatchToProps = {
  setSearchQueryProp: (query: string) => setSearchQuery(query),
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
