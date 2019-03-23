class Main {
    execute() {
        // Exercise I

        let cities = ["Paris", "Madrid", "Barcelona", "London", "Berlin"];


        // Exercise II.
        let cities = ['Paris', 'Madrid', 'Barcelona', 'London', 'Berlin'];
        function getCity(index) {
            return cities[index];
        }
        getCity(4);

        // Execise III.

        let cities = ['Paris', 'Madrid', 'Barcelona', 'London', 'Berlin'];

        function countLetters(num) {
            const city = cities[num];
            return city.length
        }
        countLetters(2);


        // Exercise IV 
        function getCityInfo(num) {
            const city = cities[num];
            console.log ('cityname' + cities[num] + 'number of letters');

        }
        getCityInfo(2);
    }
}
new Main().execute();
