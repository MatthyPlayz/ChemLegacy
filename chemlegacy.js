G.AddData({
name:'chemlegacy',
author:'matthyno',
desc:'Chemistry mod for NEL.',
engineVersion:1,
manifest:'modManifest.js',
requires:['Default dataset*'],
sheets:{'data':'https://raw.githack.com/MatthyPlayz/ChemLegacy/master/ChemlegacySheet.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
	//The idea in this simple example mod is to add a few elements focused around hot sauce, because hot sauce is great and I use that stuff everywhere.

	//First we create a couple new resources :
	new G.Res({
		name:'saltwater',
		desc:'[saltwater] is gained from @[gatherer]s, who gather salt water from lakes and ponds. [saltwater] is not very healthy, and dehydrates you quickly.',
		icon:[0,0,'data'],
		turnToByContext:{'eat':{'health':-1,'happiness':0.03},'decay':{'spoiled food':0.5}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'Crafting & Construction',
		category:'Crafting & Construction',
	});

	//Then we augment the base data to incorporate our new resources :
		//adding hot pepper as something that can be gathered from grass
	G.getDict('water').res['gather']['saltwater']=3;
		//adding a new mode to artisans so they can make hot sauce from hot peppers

	//Then we add a new technology which is required by the artisans to gain access to the "hot sauce" mode :
	new G.Tech({
		name:'gathering saltwater',
		desc:'@[gatherer]s can be gathered from lakes or ponds.\nAlso starts the Hydrochloric Acid quest chain in the ChemLegacy mod.',
		icon:[0,0,'spicySheet'],
		cost:{'insight':20}
	});

	//Finally, we add a trait that amplifies the benefits of consuming hot sauce; it will take on average 20 years to appear once the conditions (knowing the "Hot sauce preparing" tech) is fulfilled

	//There are many other ways of adding and changing content; refer to /data.js, the default dataset, if you want to see how everything is done in the base game. Good luck!
}
});
