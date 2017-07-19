var fs=require("fs");
console.log(1);
console.log(fs.readFileSync("../01/01.txt","utf-8"));
console.log(2);

//fs里面所有的异步时间  ===》  同步  末尾 +Sync


