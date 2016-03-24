var HelloMessage = React.createClass({

    handleChange: function(e){

        this.refs.ipt.disabled = this.refs.cb.checked;
    },

    render: function(){
        return (
            <div>
                <input type="text" ref="ipt" />
                <input type="checkbox" ref="cb" onChange={this.handleChange}/>
            </div>
        );
    }
});

ReactDOM.render(
    <HelloMessage />
    ,
    document.getElementById("box")
);