window.Calculator = React.createClass({

  getInitialState: function() {
    return {
      mortPayment: 0
    }
  },

  calcIt: function() {
    console.log('called',this);
    var intRate = this.refs.ir.value/1200;
    var x = Math.pow(1+intRate, 12*this.refs.years.value);
    var loan = this.refs.price.value - this.refs.dp.value;
    var monthlyPayment = '$' + Math.round(loan*(intRate*x)/(x-1));
    this.setState({
      mortPayment: monthlyPayment
    })
  },

  render: function() {
    return <div className='container'>
      <div className='row'>
        <div className='col-md-4 col-md-offset-4'>
          <form className="form-horizontal" role='form'>
            <div className='form-group'>
            Home price<input className='form-control' lang='nb' type='number' ref='price'></input>
            </div>
            <div className='form-group'>
            Down Payment<input className='form-control' type='number' ref='dp'></input>
            </div>
            <div className='form-group'>
            Interest Rate<input className='form-control' type='number' ref='ir'></input>
            </div>
            <div className='form-group'>
            Years<input className='form-control' type='number' ref='years'></input>
            </div>
          </form>
          <button onClick={this.calcIt}>Calculate my mortgage payment!</button>
          <div>Monthly Payment: {this.state.mortPayment}</div>
        </div>
      </div>
    </div>;
  }
});

