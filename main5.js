var id = function (id) {
    return document.getElementById(id);
};

var MyTitle = React.createClass({

    propTypes: {
        title: React.PropTypes.func.isRequired
    },

    render: function(){
        return <p>{this.props.title}</p>;
    }
});

ReactDOM.render(
    <MyTitle title={1212} />
    ,
    id("box")
);