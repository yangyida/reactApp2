
var id = function(id){
    return document.getElementById(id);
};

var HelloMessage = React.createClass({
    render: function(){
        return <h1>{this.props.name}</h1>;
    }
});

ReactDOM.render(
    <HelloMessage name="span"/>
    ,
    id("box")
);

var Name = React.createClass({
    render: function(){
        return <h2>{this.props.name}</h2>;
    }
});

var Link = React.createClass({
    render: function(){
        return <a href={this.props.link} target="_blank">{this.props.link}</a>;
    }
});

var WebSite = React.createClass({
    render: function(){
        return <div>
                    <Name name={this.props.name}/>
                    <Link link={this.props.link} />
               </div>;
    }
});

var name = "腾讯";
var link = "http://www.qq.com/";

ReactDOM.render(
    <WebSite name={name} link={link}/>
    ,
    id("box2")
);