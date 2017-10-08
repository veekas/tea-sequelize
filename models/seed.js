const { db, Tea } = require('./index');

const createTeas = () => db.Promise.map([
	{
		title: 'Earl Grey',
		description: 'British Prime Minister Earl Grey gave his name to this hugely popular tea back in the 1830s, and ever since it has been thought of as a classic English afternoon tea. It is not a type of tea, but a flavour, made up of a simple black tea flavoured with aromatic and stimulating oil of bergamot.',
		price: 525,
		category: 'black'
	},
	{
		title: 'Green Jasmine',
	  description: 'Dawn-picked jasmine flowers open towards the end of the day to release their heady scent. This carefully selected green tea is allowed to absorb this natural scent, producing an orangey-gold liquid with a delicate taste and alluring fragrance. A superbly fragrant tea.',
	  price: 425,
	  category: 'green'
	},
	{
		title: 'Camomile',
	  description: 'There is nothing so calming as camomile. Soothing and delicate, it is ideal at any time of day, and especially just before bedtime.',
	  price: 595,
	  category: 'herbal'
	},
  {
    title: 'Royal Blend',
    description: 'This classic Fortnum\'s blend, low-grown Flowery Pekoe from Ceylon lends an uplifting note to the maltier Assam to make a very traditional cup of tea. First blended for King Edward VII in the summer of 1902, Royal Blend has been popular ever since for its smooth, almost honey-like flavour.',
    price: 750,
    category: 'black'
  },
  {
    title: 'Peppermint Infusion',
    description: 'The classic digestif. Ours is especially clean and clear, with a pleasant and strong flavour.',
    price: 595,
    category: 'herbal',
  }
], tea => Tea.create(tea))
.then(teas => console.log(`${teas.length} teas created!`))
.catch(err => console.log(`Something went wrong while creating teas: ${err}`));

module.exports = { createTeas };
