import React from "react";
import Header from "./Header";

class Layout extends React.Component {
  render() {
    const { children, title, image } = this.props;

    return (
      <>
        <Header title={title} image={image} />
        <main className="relative">{children}</main>
      </>
    );
  }
}

export default Layout;
