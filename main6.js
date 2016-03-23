var id = function(id){
    return document.getElementById(id);
};

var Counter = React.createClass({

    getInitialState: function(){
        return {
            clickCount: 0
        };
    },

    handleClick: function(){

        this.setState(function(state){

            return {
                clickCount: state.clickCount + 1
            };
        });
    },

    render: function(){
        return <span onClick={this.handleClick}>{this.state.clickCount}</span>;
    }
});

ReactDOM.render(
    <Counter />
    ,
    id("box")
);

var ClickCount = React.createClass({

    getDefaultProps: function(){

        return {
            count: 0
        };
    },

    handleClick: function(){
        /*this.setProps({
            count: this.props.count + 1
        });*/

        console.log(this.getDOMNode());

        console.log(this.isMounted());
    },

    render: function(){
        return <span onClick={this.handleClick}>{this.props.count}</span>;
    }

});

var aa = <ClickCount />;

ReactDOM.render(
    aa
    ,
    id("box1")
);