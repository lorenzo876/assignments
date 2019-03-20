class Main {
    execute() {
        // Exercise I
        function cities() {
            cities = ["Paris", "Madrid", "Barcelona", "London", "Berlin"];
        }
        console.log(cities);

        //1.b
        function cities() {
            var europecities = ["Paris", "Madrid", "Barcelona", "London", "Berlin"];
        }

        // Exercise II.
        const cities = ['Paris', 'Madrid', 'Barcelona', 'London', 'Berlin'];

        function getCity(num) {
            return [num];
            let i = 0;
            for (let i = 0; i < cities.length; i++) {
                const num = num[i];
            }
        }
        console.log(cities[4]);
        getCity();

        // Execise III.

        const cities = ['Paris', 'Madrid', 'Barcelona', 'London', 'Berlin'];

        function countLetters(total) {
            return total;
        }
        console.log(cities[4].length);
        countLetters();


        // Exercise IV 
        const cityName = ['Paris', 'Madrid', 'Barcelona', 'London', 'Berlin'];

        function getCityInfo(info) {
            return info;

        }
        console.log(cityName[3].length)
        getCityInfo('London');
    }
}
new Main().execute();