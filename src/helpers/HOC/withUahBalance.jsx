export const withUahBalance = (Component) => {
  return (props) => {
    const { balance } = props;
    const uahBalance = balance * 38;
    return <Component {...props} uahBalance={uahBalance} />;
  };
};
