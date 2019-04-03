function Main (){
	this.execute = function (){ 
		//this is one comment
		//your code
		//console.log("Hello world");

		/*let shoes = {     
			name: "airforce1",
			size: 9.5,     
		  };
		  
		  console.log(shoes);
		  console.log(shoes.name);*/

		  let user1 = {
			  name: 'David',
			  age: 25,
			  hobbies: [ 'watching tv','playing football','Videogames',],
			  legalAge:true,
			  employed:false,
			  hasChildren:false,
			  istalented: true,
		  };

		  let user2 = {
			name: 'Jonay',
			age: 35,
			hobbies: [ 'Traveling','Coding','Testing'],
			legalAge:true,
			employed:false,
			hasChildren:false,
			istalented: true,	
		};
		let sum = (user1.age + user2.age)/2;
		console.log('excercise 3 result:' + sum);

		function getHobbies (user){
			return user.hobbies;
		}
		getHobbies(user1);



	}
}
new Main().execute();