import React, { ReactNode } from "react";

interface IState {
  hasError: boolean;
}

import StyledError from "./styled.error";

interface IProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: Object) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <StyledError>Something went wrong.</StyledError>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
