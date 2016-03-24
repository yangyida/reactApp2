var rf = require("fs");

var filePath = "C:\\Users\\Administrator\\Desktop\\ok - Copy.txt";
var outputPath = "C:\\Users\\Administrator\\Desktop\\ok - Copy_.txt";

rf.readFile(filePath, "utf-8",function(err, data){

    if(err){
        console.log("ERROR");
        console.log(err);
    }else{

        var lineArr = data.split(/\n/g);

        var length = lineArr.length;

        var outputStr = "";

        if(length > 1){

            outputStr += (lineArr[0].toString() + "\n");

            var prelineArr = lineArr[0].split(",");

            for(var i = 1; i < length; i++){

                var targetlineArr = lineArr[i].split(",");

                var len = targetlineArr.length;

                for(var j = 0; j < len; j++){
                    if(!targetlineArr[j] && prelineArr[j]){
                        targetlineArr[j] = prelineArr[j];
                    }
                }

                prelineArr = targetlineArr;

                outputStr += (targetlineArr.toString() + "\n");
            }

            rf.writeFile(outputPath, outputStr, function(err){
                if(err){
                    console.log(err);
                    console.log("写入失败");
                }else{
                    console.log("写入成功!!!");
                }
            });
        }

    }
});