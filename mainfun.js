class Main {
    execute() {

        function sayHi(language) {
            let spanish = 'hola';
            let english = 'hi';
            let arabic = 'Merhaba';

            if (languages = 'spanish') {
                return spanish;
            }

            if (languages = 'english') {
                return english;
            }

            if (languages = 'arabic') {
                return arabic;
            }
        }

        let result = sayHi('spanish');
        console.log(result);

        let result = sayHi('english');
        console.log(result);

        let result = sayHi('arabic');
        console.log(result);

        function sayBye(language) {
            let spanish = 'adiós';
            let english = 'bye';
            let arabic = 'wadaeaan';

            if (languages = 'spanish') {
                return spanish;
            }

            if (languages = 'english') {
                return english;
            }

            if (languages = 'arabic') {
                return arabic;
            }
        }

        let result = sayBye('spanish');
        console.log(result);

        let result = sayBye('english');
        console.log(result);

        let result = sayBye('arabic');
        console.log(result);


        function sayAll(language) {
            let spanish = 'hola' + 'adiós';
            let english = 'hi' + 'bye';
            let arabic = 'merhaba' + 'wadaeaan';

            if (languages = 'spanish') {
                return spanish;
            }

            if (languages = 'english') {
                return english;
            }

            if (languages = 'arabic') {
                return arabic;
            }
        }

        let result = sayAll('spanish');
        console.log(result);

        let result = sayAll('english');
        console.log(result);

        let result = sayAll('arabic');
        console.log(result);



    }
}
new Main().execute();

