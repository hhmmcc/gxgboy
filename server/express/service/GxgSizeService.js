let SizeModel = require("../model/SizeModel");
class GxgSizeService{
    constructor(){    
    }
    getSizeDate1(callBack){
        let sizeModel = new SizeModel();
        sizeModel.getSize(function(size){
            console.log();
            callBack(size);
        });
          
    }
}
module.exports = GxgSizeService;