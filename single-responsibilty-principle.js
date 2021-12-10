import logMessage from "./logger";

class CalaroieTracker{
   constructor(maxCalories){
       this.maxCalories=maxCalories;
       this.currentCalories=0
   }

   trackCalories(calroieCount){
       this.currentCalories+=calroieCount
       if(this.currentCalories>this.maxCalories){
           logMessage('Max calorie exceeded')
       }
   }
}

const calaroieTracker=new CalaroieTracker(50)
calaroieTracker.trackCalories(100)
calaroieTracker.trackCalories(200)
calaroieTracker.trackCalories(300)