class Main {
    execute() {

        let colors = []; {
            colors.push('Red,', 'black', 'Blue');
            console.log(colors);
        }
        let colors = ['Red', 'Green', 'Blue'];{
            colors.splice(1);
            console.log(colors);
           }
         
        
        let ages = [18, 19, 20, 51, 5, 25, 14, 31, 40, 26, 99];
        let result = 0;
        for (let i = 0; i < ages.length; i++) {
            result = result + ages[i];
        }
            console.log(result)
        
        let ages = [18, 19, 20, 51, 5, 25, 14, 31, 40, 26, 99]; {
            let odd = [19, 51, 5, 25, 31, 99]
            let result = 0;
            for (let i = 0; i < odd.length; i++)
                result = result + odd[i];
            console.log(result)
            
        let results = 0;
            for (let i =0; i < ages.length; i++) {
            if ( ages [i] % 2) {
            results = results + ages [i];
        }
            console.log(results)
        }

        }
        let colors1 = ["blue","white"];
        let colors2 = ["green","red"];
        
        for(let i = 0; i<colors1.length; i++ ){
         colors2.push(colors1[i]);
         console.log(colors2);
        }
               
        let colors1 = ["blue","white"];
        let colors2 = ["green","red"];
        
        for(let i = 0; i<colors2.length; i++ ){
         colors1.push(colors2[i]);
         console.log(colors1)
        }
        

    }
}
new Main().execute();
