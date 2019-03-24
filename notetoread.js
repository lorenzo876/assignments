class Main {
    execute() {



        //this is one comment
        // JavaScript goes here
        alert("Third way | Good way");
        console.log("Third way | Use Template");

        alert('Hello World!');
        console.log('Secret message');

        // i love coding it is amazing //#endregion
        alert('Hello World!');
        console.log('Hello World!');
        document.write('Hello World!');


        var numberOfBoys = 5;
        var numberOfGirls = 4;
        var numberOfpersons = numberOfBoys + numberOfGirls;
        console.log(numberOfpersons);
       

        //Receipt
        var billPreTip = 10;
        var tipPercent = 4.75;
        var billTip = billPreTip * tipPercent;
        var receipt = 'your total bill, with " ' + billPreTip + ' Tip: ' + billTip +
            ' Total: ' + (billPreTip + billTip);


        // ex two
        let cars = ["vm", "land rover", "toyota", "bmw", "buggy", "mark X"];
        function typeOfcars(num) {
            return cars[num];
        }

        typeOfcars(3);


    }
}
new Main().execute();