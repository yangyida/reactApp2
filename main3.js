var id = function(id){
    return document.getElementById(id);
};

var MyShow = React.createClass({

    getInitialState: function(){
        return {
            flag : false
        };
    },

    handleClick: function(){
        this.setState({
            flag : !this.state.flag
        });
    },

    render: function(){

        var flag = this.state.flag ? "正确" : "错误";

        return <div>
                    <p>{flag}</p>
                    <button onClick={this.handleClick}>点我切换</button>
               </div>;
    }
});

ReactDOM.render(
    <MyShow />
    ,
    id("box")
);