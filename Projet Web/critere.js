const Bdd = {
    france: [
        {
            type: 'airbnb',
            price: 25,
            ville: 'Lyon',
        },
        {
            type: 'airbnb',
            price: 25,
            ville: 'Bordeaux',
        },
        {
            type: 'airbnb',
            price: 61,
            ville: 'Deauville',
        },
        {
        	type: 'hôtel',
        	price: 108,
        	ville: 'Paris',
        },
        {
        	type: 'hôtel',
        	price: 114,
        	ville: 'Saint-Rapahël',
        },
        {
        	type:'hôtel',
        	price:53,
        	ville:'Perpignan',
        }
    ],
    espagne:[
    	{
        	type:'hôtel',
        	price:107,
        	ville:'Empuriabrava',
        },
        {
        	type:'appartement',
        	price:76,
        	ville:'Blanes',
        },
        {
        	type:'appartement',
        	price:202,
        	ville:'Begur',
        },
        {
        	type:'appartement',
        	price:66,
        	ville:'Puerto Alcudia',
        },
        {
        	type:'hôtel',
        	price:103,
        	ville:'Salou',
        },
        {
        	type:'hôtel',
        	price:159,
        	ville:'Tossa de Mar',
        },
    ],
    italie:[
    	{
    		type:'hôtel',
    		price: 97,
    		ville:'Florence',
    	},
    	{
    		type:'hôtel',
    		price: 60,
    		ville:'Rome',
    	},
    	{
    		type:'hôtel',
    		price: 70,
    		ville:'Venise',
   	 	},
    	{
    		type:'airbnb',
    		price: 37,
    		ville:'Verone',
    	},
    	{
    		type:'airbnb',
    		price: 29,
    		ville:'Sienne',
    	},
    	{
    		type:'airbnb',
    		price: 99,
    		ville:'Cinque Terre',
    	},
    ],
    portugal:[
    	{
    		type:'hôtel',
    		price: 60,
    		ville:'Lisbonne',
    	},
    	{
    		type:'hôtel',
    		price: 90,
    		ville:'Tavira',
    	},
    	{
    		type:'hôtel',
    		price: 100,
    		ville:'Evora',
    	},
   	 	{
    		type:'airbnb',
    		price: 32,
    		ville:'Porto',
    	},
    	{
    		type:'appartement',
   	 		price: 38,
    		ville:'Lagos',
    	},
    	{
    		type:'appartement',
    		price: 40,
    		ville:'Vila Nova de Milfontes',
    	},
    ],
    maroc:[
    	{
    		type:'hôtel',
    		price: 51,
    		ville:'Marrakech',
    	},
    	{
    		type:'hôtel',
    		price: 59,
    		ville:'Essaouira',
    	},
    	{
    		type:'hôtel',
    		price: 161,
    		ville:'Casablanca',
    	},
    	{
   	 		type:'appartement',
    		price: 10,
    		ville:'Agadir',
   	 	},
    	{
    		type:'appartement',
    		price: 20,
    		ville:'Fés',
    	},
    	{
    		type:'appartement',
    		price: 25,
    		ville:'Tanger',
    	},
    ],
    angleterre:[
	    {
	    	type:'hôtel',
	    	price: 36,
	    	ville:'Londres',
	    },
	    {
	    	type:'hôtel',
	    	price: 38,
	    	ville:'Bringhton',
	    },
	    {
	    	type:'hôtel',
	    	price: 190,
	    	ville:'Oxford',
	    },
	    {
	    	type:'appartement',
	    	price: 22,
	    	ville:'Bath',
	    },
	    {
	    	type:'appartement',
	    	price: 18,
	    	ville:'Bristol',
	    },
	    {
	    	type:'appartement',
	    	price: 44,
    		ville:'Birmingham',
    	},
    ]
}


function changeCountry(target) {
    country = target.value
}

function changePrice(target) {
    price = target.value
}

function changeType(target) {
    type = target.value
}
let country="";
let price= null;
let type="";

function filter() {
    return Bdd[country].filter((elem) => 
        elem.price < price && elem.type === type
    )
}

function show(res) {
  			var result = document.getElementById("result_search");
  			result.innerHTML = "";
  			res.forEach((elem) => {
  				const text= document.createElement("tr");
  				const countryCap = country.charAt(0).toUpperCase()+country.slice(1);
  				var cell1 = document.createElement("td");
    			var cell2 = document.createElement("td");
    			var cell3 = document.createElement("td");
    			var cell4 = document.createElement("td");
    			cell1.appendChild(document.createTextNode(countryCap));
   		 		cell2.appendChild(document.createTextNode(elem.ville));
    			cell3.appendChild(document.createTextNode(elem.price+'€/nuit'));
    			cell4.appendChild(document.createTextNode(elem.type));
    			text.appendChild(cell1);
    			text.appendChild(cell2);
   				text.appendChild(cell3);
    			text.appendChild(cell4);
    			result.appendChild(text);
  		});
		}

function search(){
	show(filter())
	console.log(filter())
}