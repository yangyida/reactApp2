var TestTag = React.createClass({

    //渲染前
    componentWillMount: function(){
        console.log("componentWillMount");
    },

    //第一次渲染后调用,已生成DOM结构
    componentDidMount: function(){
        console.log("componentDidMount");
    },

    //在接收到一个新的prop时调用,在初始化render时不会被调用
    componentWillReceiveProps: function(){
        console.log("componentWillReceiveProps");
    },

    componentWillUpdate: function(){

    },

    //返回一个布尔值，在组件接收到新的props和state时调用，在初始化或者使用forceUpdate时不被调用
    shouldComponentUpdate: function(){
        console.log("shouldComponentUpdate");
    },

    //在组件完成更新后立即调用，初始化时不被调用(调用forceUpdate后调用)
    componentDidUpdate: function(){
        console.log("componentDidUpdate");
    },

    //组件从DOM中移除的时候立即被调用
    componentWillUnmount: function(){
        console.log("componentWillUnmount");
    },

    handleClick: function(){

        this.forceUpdate();

        /*this.setProps({
            clickCount: this.props.clickCount + 1
        });*/
    },

    render: function(){
        return <button onClick={this.handleClick} data-count={this.props.clickCount}>点我</button>;
    }
});

ReactDOM.render(
    <TestTag clickCount={0}/>
    ,
    document.getElementById("box")
);

var Hello = React.createClass({

    componentDidMount: function(){

        var This = this;

        setInterval(function(){

            var val = This.state.opacity;

            var flag = This.state.flag;

            var o = {};

            if(val <= 0 || val >= 10){
                if(val <= 0){
                    flag = true;
                }else{
                    flag = false;
                }
            }

            if(flag){
                o.opacity = val + 1;
                o.flag = flag;
            }else{
                o.opacity = val - 1;
                o.flag = flag;
            }

            This.setState(o);

        }, 200);
    },

    getInitialState: function(){
        return {
            opacity: 10,
            flag: false //+为true
        };
    },

    render: function(){
        return <div style={{opacity: this.state.opacity / 10}}>
                    Hello{this.state.opacity}
               </div>;
    }
});

/*
ReactDOM.render(
    <Hello />
    ,
    document.getElementById("box")
);*/


var Button = React.createClass({
    getInitialState: function(){
        return {
            data: 0
        };
    },

    setNewNumber: function(){
        this.setState({
            data: this.state.data + 1
        });
    },

    render: function(){
        return (
            <div>
                <button onClick={this.setNewNumber}>+++</button>
                <Content myNumber={this.state.data}/>
            </div>
        );
    }
});

var Content = React.createClass({
    //渲染前
    componentWillMount: function(){
        console.log("componentWillMount");
    },

    //第一次渲染后调用,已生成DOM结构
    componentDidMount: function(){
        console.log("componentDidMount");
    },

    //在接收到一个新的prop时调用,在初始化render时不会被调用
    componentWillReceiveProps: function(newProps){
        console.log("componentWillReceiveProps");
    },

    //返回一个布尔值，在组件接收到新的props和state时调用，在初始化或者使用forceUpdate时不被调用
    shouldComponentUpdate: function(newProps, newState){
        console.log("shouldComponentUpdate");
        return true;
    },

    //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    componentWillUpdate: function(nextProps, nextState){
        console.log("componentWillUpdate");
    },

    //在组件完成更新后立即调用，初始化时不被调用
    componentDidUpdate: function(prevProps, prevState){
        console.log("componentDidUpdate");
    },

    //组件从DOM中移除的时候立即被调用
    componentWillUnmount: function(){
        console.log("componentWillUnmount");
    },

    render: function(){
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
});

ReactDOM.render(
    <Button />
    ,
    document.getElementById("box2")
);