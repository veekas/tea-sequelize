'use strict'

const chai = require('chai')
const expect = chai.expect
const db = require('./index.js')
const Tea = db.models.tea

describe('Tea Model', () => {
  beforeEach(() => db.sync({ force: true }))

  // Sequelize getter for price in dollars: 525 --> $5.25
  describe('Virtual: dollarPrice', () => {
    it('returns the price of the tea as a formatted string', () => {
      const tea = Tea.build({
        price: 500
      })

      expect(tea.dollarPrice).to.equal('$5.00');
    })
  })

  // Class method: Tea.findByCategory('black')
  describe('Class Method: findByCategory', () => {

  })

  // Sequelize instance method to find similar
  describe('Instance Method: findSimilar', () => {

  })

  // Sequelize hook - update?
  describe('Hook: price of all teas goes down everytime you add a new one', () => {

  })
})
