class MyAppText extends Components {
  render() {
    return (
      <MyAppText>
        <Text style={{ fontSize: 20 }}>{this.props.children}</Text>
      </MyAppText>
    );
  }
}
