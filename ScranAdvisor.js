// has restaurants

const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// can count the number of restaurants

ScranAdvisor.prototype.canCountResturants = function() {
    return this.restaurants.length;
}

// can find Happy Lamb Hot Pot restaurant by full name

ScranAdvisor.prototype.findRestaurantByName = function(name) {
    const foundResturantName = this.restaurants.find((restaurant) => {
        return restaurant.name === name;
    })

    return foundResturantName;
}

// can find the name of all restaurants

ScranAdvisor.prototype.allRestaurantName = function() {
    const resturantName = this.restaurants.map((restaurant) => {
        return restaurant.name;
    })
    return resturantName;
    
}

// can find all restaurants from Glasgow

ScranAdvisor.prototype.resturantsInGlasgow = function() {
    const resturantGlasglow = this.restaurants.filter((restaurant) => {
        return restaurant.postcode.startsWith('G');
    })
    return resturantGlasglow;
}


// EXTENSION: can find the most common cuisine type (incomplete)

ScranAdvisor.prototype.findMostCommonCuisine = function() {
    const cuisinesInResturant = this.restaurants.flatMap((restaurant) => {
        return restaurant.cusine;
    })
    return cuisinesInResturant;

    for (let i = 0; i < cuisinesInResturant.length; i++){

        // if cuisin present,  add 1
    }

    //  highest count = most common cuisine

    // const MostCommonCuisineType = 

    return MostCommonCuisineType;
}




// EXTENSION: can find restaurant with substring (incomplete)

  // use .include and .filter function 

ScranAdvisor.prototype.findRestaurantWithSubstring = function() {
    const sameResturantName = this.restaurants.filter(function(restaurant){

    return this.restaurants.name.includes()}

    );

 return SameResturantName;

};


module.exports = ScranAdvisor;