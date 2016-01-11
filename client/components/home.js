var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <div>
    <Header/>
    <Calculator/>
  </div>,
  document.getElementById('container')
);