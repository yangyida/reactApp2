var MyTag = React.createClass({

    getInitialState: function(){
        return {
            secondsElapsed: 0
        }
    },

    tick: function(){
        this.interval = this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    },

    componentDidMount: function(){
        setInterval(this.tick, 5000);
    },

    componentWillUnmount: function(){
        clearInterval(this.interval);
    },

    render: function(){
        return (
            <span>{this.state.secondsElapsed}</span>
        );
    }
});

React.render(
    <MyTag />
    ,
    document.getElementById("box")
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var TodoList = React.createClass({
    render: function(){

        var createItem = function(itemText){
            return <li>{itemText}</li>;
        };

        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            items: [],
            text: ""
        }
    },

    onChange: function(e){
        this.setState({
            text: e.target.value
        });
    },

    handleSubmit: function(e){
        e.preventDefault();
        var item = this.state.items.concat([this.state.text]);
        this.setState({
            items: item
        });
    },

    render: function(){
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text} />
                    <button>{"Add #" + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }
});

React.render(
    <TodoApp />
    ,
    document.getElementById("box2")
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
var converter = new Showdown.converter();

var MarkdownEditor = React.createClass({
    getInitialState: function(){
        return {
            value: "Type some *markdown* here!"
        };
    },

    handleChange: function(){
        this.setState({
            value: this.refs.textarea.getDOMNode().value
        });
    },

    render: function(){
        return (
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <textarea onChange={this.handleChange} ref="textarea" defaultValue={this.state.value} />
                <h3>Output</h3>
                <div className="content" dangerouslySetInnerHTML={{_html: converter.makeHtml(this.state.valuef)}} />
            </div>
        );
    }
});*/


var HelloTag = React.createClass({

    getInitialState: function(){
        return {
            clickCount: 0
        };
    },

    handleClick: function(){
        console.log(this.refs.btn.getDOMNode() == this.refs.btn);
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    },

    render: function(){
        return (
            <div>
            <button onClick={this.handleClick} ref="btn">{"# " + this.state.clickCount}</button>
            </div>
        );
    }
});

React.render(
    <HelloTag />
    ,
    document.getElementById("box4")
);