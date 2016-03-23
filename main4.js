var id = function(id){
    return document.getElementById(id);
};

var Name = React.createClass({
    render: function(){

        return <h2 style={{color:"blue"}}>{this.props.name}</h2>;
    }
});

var Link = React.createClass({
    render: function(){
        return <h3 style={{color:"green"}}>{this.props.link}</h3>;
    }
});

var WebSite = React.createClass({

    getDefaultProps: function(){

        return {
            defaultName: "",
            defaultLink: ""
        }
    },

    getInitialState: function(){

        return {
            name: this.props.name,
            link: this.props.link
        }
    },

    changeMsg: function(){
        this.setState({
            name: id("name").value.trim(),
            link: id("link").value.trim()
        });

        id("name").value = "";
        id("link").value = "";

    },

    render: function(){
        var cc = <Name name={this.state.name} />;
        return <div>
            <input type="text" id="name" />
            <br/>
            <input type="text" id="link" />
            cc
            <Link link={this.state.link} />
            <button onClick={this.changeMsg}>更改</button>
        </div>;
    }
});

var a = <WebSite name="1" link="2"/>;

ReactDOM.render(
    a
    ,
    id("box")
);
