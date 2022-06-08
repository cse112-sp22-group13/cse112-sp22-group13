import timer30 from "./media/timer30.png";
import timer45 from "./media/timer45.png";
import timer60 from "./media/timer60.png";
import bread from "./icons/bread.png";
import muffin from "./icons/muffin.png";
import fish from "./icons/fish.png";
import milk from "./icons/milk.png";
import spices from "./icons/spices.png";
import cheese from "./icons/cheese.png";
import steak from "./icons/steak.png";
import chicken from "./icons/chicken.png";
import ethnic from "./icons/ethnic.png";
import banana from "./icons/banana.png";
import carrot from "./icons/carrot.png";
//all country flag icons from https://www.flaticon.com/packs/countrys-flags
import brazil from "./icons/flags/brazil.png";
import china from "./icons/flags/china.png";
import europe from "./icons/flags/european-union.png";
import france from "./icons/flags/france.png";
import germany from "./icons/flags/germany.png";
import india from "./icons/flags/india.png";
import israel from "./icons/flags/israel.png";
import italy from "./icons/flags/italy.png";
import jamaica from "./icons/flags/jamaica.png";
import palestine from "./icons/flags/palestine.png";
import southAfrica from "./icons/flags/south-africa.png";
import southKorea from "./icons/flags/south-korea.png";
import spain from "./icons/flags/spain.png";
import norway from "./icons/flags/norway.png";
import thailand from "./icons/flags/thailand.png";
import ukraine from "./icons/flags/ukraine.png";
import uk from "./icons/flags/united-kingdom.png";
import us from "./icons/flags/united-states.png";
import vietnam from "./icons/flags/vietnam.png";

/**
 * Constants defining cuisine category cards.
 */
const cuisineMockData = [
    {
        name: "African",
        img: southAfrica
    },
    {
        name: "American",
        img: us
    },
    {
        name: "British",
        img: uk
    },
    {
        name: "Cajun",
        img: us
    },
    {
        name: "Caribbean",
        img: jamaica
    },
    {
        name: "Chinese",
        img: china
    },
    {
        name: "Eastern European",
        img: ukraine
    },
    {
        name: "European",
        img: europe
    },
    {
        name: "French",
        img: france
    },
    {
        name: "German",
        img: germany
    },
    {
        name: "Indian",
        img: india
    },
    {
        name: "Italian",
        img: italy
    },
    {
        name: "Jewish",
        img: israel
    },
    {
        name: "Korean",
        img: southKorea
    },
    {
        name: "Latin American",
        img: brazil
    },
    {
        name: "Mediterranean",
        img: palestine
    },
    {
        name: "Nordic",
        img: norway
    },
    {
        name: "Spanish",
        img: spain
    },
    {
        name: "Thai",
        img: thailand
    },
    {
        name: "Vietnamese",
        img: vietnam
    }
];

/**
 * Constants defining ingredient category cards.
 */
const ingredientsImg = [
    {
        name: "Bread",
        img: bread
    },
    {
        name: "Baking",
        img: muffin
    },
    {
        name: "Health Foods",
        img: banana
    },
    {
        name: "Seafood",
        img: fish
    },
    {
        name: "Beverages",
        img: milk
    },
    {
        name: "Spices and Seasonings",
        img: spices
    },
    {
        name: "Canned and Jarred",
        img: steak
    },
    {
        name: "Oil, Vinegar, Salad Dressing",
        img: chicken
    },
    {
        name: "Milk, Eggs, Other Dairy",
        img: cheese
    },
    {
        name: "Ethnic Foods",
        img: ethnic
    },
    {
        name: "Produce",
        img: carrot
    }
];

/**
 * Constants defining prep time category cards.
 */
const prepTimeImg = [
    {
        name: "Less Than 30 Minutes",
        img: timer30
    },
    {
        name: "30 to 60 Minutes",
        img: timer45
    },
    {
        name: "60 Minutes or More",
        img: timer60
    }
];

export {
    cuisineMockData, ingredientsImg, prepTimeImg
};