/*var HelloMessage = React.createClass({

    getInitialState: function(){
        return {
            value: 123
        }
    },

    handleChange: function(e){
        this.setState({
            value: e.target.value
        });
    },

    render: function(){

        var value = this.state.value;

        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange}/>
                <h3>{value}</h3>
            </div>
        );
    }

});

ReactDOM.render(
    <HelloMessage />
    ,
    document.getElementById("box")
);*/


/*
var Content = React.createClass({
    render: function(){
        return (
            <div>
                <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
                <h4>{this.props.myDataProp}</h4>
            </div>
        );
    }
});

var HelloMessage = React.createClass({

    getInitialState: function(){
        return {
            value: "Hello Runoob!"
        }
    },

    handleChange: function(){
        this.setState({
            value: event.target.value
        });
    },

    render: function(){
        var value = this.state.value;

        return (
            <div>
                <Content myDataProp={value} updateStateProp={this.handleChange}/>
            </div>
        );
    }

});

ReactDOM.render(
    <HelloMessage />
    ,
    document.getElementById("box")
);*/


var HelloMessage = React.createClass({

    getInitialState: function(){
        return {
            value: "Hello RRR"
        };
    },

    handleChange: function(e){
        this.setState({
            value: "xxxxx"
        });
    },

    render: function(){
        var value = this.state.value;

        return (
            <div>
                <button onClick={this.handleChange}>play</button>
                <h4>{value}</h4>
            </div>
        );
    }
});

ReactDOM.render(
    <HelloMessage />
    ,
    document.getElementById("box")
);