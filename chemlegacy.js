G.AddData({
name:'chemlegacy',
author:'matthyno',
desc:'Chemistry mod for NEL.',
engineVersion:1,
manifest:'https://raw.githack.com/MatthyPlayz/ChemLegacy/master/manifest.js',
requires:['Default dataset*'],
sheets:{'data':'https://raw.githack.com/MatthyPlayz/ChemLegacy/master/ChemlegacySheet.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{	
	var saltwater = new G.Res({
		name:'saltwater',
		desc:'[saltwater] is gained from @[gatherer]s, who gather salt water from lakes and ponds. [saltwater] is not very healthy, and dehydrates you quickly.',
		icon:[0,0,'data'],
		turnToByContext:{'eat':{'health':-1,'happiness':0.03},'decay':{'spoiled food':0.5}},
		partOf:'advanced building materials'
	});
	G.getRes(saltwater).gainedBy[1] = "Gatherer"
	new G.Tech({
		name:'gathering saltwater',
		desc:'@[gatherer]s can be gathered from lakes or ponds.\nAlso starts the Hydrochloric Acid quest chain in the ChemLegacy mod.',
		icon:[0,0,'data'],
		cost:{'insight':20}
	});
}
});
