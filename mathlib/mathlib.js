module.exports = function(){
	return{
	    greet: function(){
	        console.log("Welcome Math library");
	    },
	    add: function(num1, num2){
	        console.log("the sum is:", num1 + num2);
	    },
	    multiply: function(num1, num2){
	        console.log("the multiplacation result is:", num1 * num2);
	    },
	    square: function(num){
	        console.log("the square is:", num * num);
	    },
	}
}

// module.exports = {
//     greet: function(){
//         console.log("Welcome Math library");
//     },
//     add: function(num1, num2){
//         console.log("the sum is:", num1 + num2);
//     },
//     multiply: function(num1, num2){
//         console.log("the multiplacation result is:", num1 * num2);
//     },
//     square: function(num){
//         console.log("the square is:", num * num);
//     },
// }

