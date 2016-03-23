
var msg = "xxxx";

ReactDOM.render(
    <h3 data-msg={msg}>从这里开始</h3>
    ,
    document.getElementById("example")
);

var font = "这是一段文字";
var font_add = "文字的补充";

ReactDOM.render(
    <p>{font + " " + font_add}</p>
    ,
    document.getElementById("example2")
);

ReactDOM.render(
    <span>{100 + 200}</span>
    ,
    document.getElementById("example3")
);

var style = {
    height: "100px",
    backgroundColor: "red"
};


ReactDOM.render(
    <div>
        {/*<div style={{height:"20px", backgroundColor:"blue"}}></div>*/}
        <div style={style}></div>
    </div>
    ,
    document.getElementById("example4")
);

var onePStyle = {
    color: "green",
    lineHeight: "32px"
};

var twoPStyle = {
    color: "blue",
    lineHeight: "18px",
    fontSize: "18px"
};

var className = "ying jun";

var arrEls = [
    <p style={onePStyle} className="yang" htmlFor={100}>这里是第一段文字</p>,
    <p style={twoPStyle} className={className} htmlFor="200">这里是第二段文字</p>
];

ReactDOM.render(
    <div>
        {arrEls}
    </div>
    ,
    document.getElementById("example5")
);

var divEl = <div style={style}/>;

var a = ReactDOM.render(
    divEl
    ,
    document.getElementById("example6")
);

var MyName = React.createClass({

    clickEvent: function(e){

    },

    render: function(){
        return <p>
                <span onClick={this.clickEvent}>{this.props.name}</span>
               </p>;
    }
});

var b = ReactDOM.render(
    <MyName name="杨英俊"/>
    ,
    document.getElementById("example7")
);

