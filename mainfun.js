class Main {
    execute() {

            // Part one 
        function sayHi(language) {
            let spanish = 'hola';
            let english = 'hi';
            let arabic = 'Merhaba';

            if (language ==='spanish') {
                return spanish;
            }

            if (language === 'english') {
                return english;
            }

            if (language === 'arabic') {
                return arabic;
            }
        }

       let result1 = sayHi('spanish');
        let result2 = sayHi('english');
        let result3 = sayHi('arabic');
        console.log(result1);
        console.log(result2);
        console.log(result3);


        // part two
        function sayBye(language) {
            let spanish = 'adiós';
            let english = 'bye';
            let arabic = 'wadaeaan';

            if (language === 'spanish') {
                return spanish;
            }

            if (language === 'english') {
                return english;
            }

            if (language === 'arabic') {
                return arabic;
            }
        }

        let result1 = sayBye('spanish');
        let result2 = sayBye('english');
         let result3 = sayBye('arabic');
        console.log(result1);
        console.log(result2);
        console.log(result3);



        // ParT Three

        function sayHi() {
            console.log('hi');
            }
            function sayBye() {
            console.log ('bye');
            }
            function sayHiAndBye (){
            sayHi();
            sayBye();
            }
            
            sayHiAndBye();
// differ


        function sayAll(language) {
            let spanish = ' hola ' + ' adiós ';
            let english = ' hi ' + ' bye ';
            let arabic = ' merhaba ' + ' wadaeaan ';

            if (language === 'spanish') {
                return spanish;
            }

            if (language === 'english') {
                return english;
            }

            if (language === 'arabic') {
                return arabic;
            }
        }

        let result1 = sayAll('spanish');
        console.log(result1);

        let result2 = sayAll('english');
        console.log(result2);

        let result3 = sayAll('arabic');
        console.log(result3);



        function sayAll(language) {
            let spanish = ' hola ' + ' adiós ';
            let english = ' hi ' + ' bye ';
            let arabic = ' merhaba ' + ' wadaeaan ';

            if (language === 'spanish') {
                return spanish;
            }

            if (language === 'english') {
                return english;
            }

            if (language === 'arabic') {
                return arabic;
                            }
              else {
                  alert ('Unsupported language')
              }              
        }
sayAll('naggadef');




    }
}
new Main().execute();

