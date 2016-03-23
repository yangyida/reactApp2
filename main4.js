var id = function(id){
    return document.getElementById(id);
};

var Name = React.createClass({

    clickEvt: function(e){
        console.log(this.props.name);
    },

    render: function(){
        return <h2 onClick={this.clickEvt} style={{color:"blue"}}>{this.props.name}</h2>;
    }
});

var Link = React.createClass({

    clickEvt: function(e){
       console.log(this.props.link);
    },

    render: function(){
        return <h3 onClick={this.clickEvt} style={{color:"green"}}>{this.props.link}</h3>;
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
            <Name name={this.state.name} />
            <Link link={this.state.link} />
            <button onClick={this.changeMsg}>更改</button>
        </div>;
    }
});

ReactDOM.render(
    <WebSite name="1" link="2"/>
    ,
    id("box")
);
