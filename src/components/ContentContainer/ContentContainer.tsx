import React, { useEffect } from "react";
import { connect } from "react-redux";
import Footer from "../Footer";
import { Box } from "atomic-layout";
import { IMovie } from "../../interfaces/IMovie";
import { IAppState } from "../../store/reducers/rootReducer";
import { getMovie } from "../../store/selectors";
import { Route, Switch } from "react-router";
import PageNotFound from "../PageNotFound";
import DefaultPage from "../DefaultPage";

interface IProps {
  activeMovie: IMovie;
}

const ContentContainer: React.FC<IProps> = ({ activeMovie }) => {
  useEffect(() => {
    document.title = activeMovie ? activeMovie.title : "NetflixRoulette";
  }, [activeMovie]);

  return (
    <Box>
      <Switch>
        <Route
          exact
          path={["/", "/film/:id", "/search/:query"]}
          component={DefaultPage}
        />
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </Box>
  );
};

const mapStateToProps = (state: IAppState) => ({
  activeMovie: getMovie(state),
});

export default connect(mapStateToProps)(ContentContainer);
