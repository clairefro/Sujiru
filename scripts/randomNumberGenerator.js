var finalresult;
      var thousand    = 1000;
      var hunthousand = 100000;
      var million     = 1000000;
      var hunmillion  = 100000000;
      var billion     = 1000000000;
      var hunbillion  = 100000000000;
      var trillion    = 1000000000000;

      function generateRan(){
       var result;
       var head = Math.floor((Math.random()*999)+1);
       var tail = Math.floor((Math.random()*9)+1);
       var caseNum = Math.floor((Math.random()*6)+1);

       //add tail? yes (=1), no (=0)
       var tailBoolean = Math.random()<0.5;

       //generate "clean" (somewhat easy to translate) random numbers
       switch(caseNum) {
        //1-1000
        case 1:
          result = Math.floor((Math.random()*thousand)+1);
          break;
        //1001-10,000
        case 2:
          result = Math.floor((Math.random()*10000)+1001);
          break;
        //10,000-999,000
        case 3:
          result = head * 10000;
          if (tailBoolean == true){
            result += (tail * 1000);
          }
          break;
        //100,000-100,000,000
        case 4:
          result = head * million;
          if (tailBoolean == true){
            result += (tail * hunthousand);
          }
          break;
        case 5:
          result = head * billion;
          if (tailBoolean == true){
            result += (tail * hunmillion);
          }
          break;
        case 6:
          result = head * trillion;
          if (tailBoolean == true){
            result += (tail * hunbillion);
          }
          break;
       } 

       //console.log(tailBoolean + "\n");

       return result;
      }