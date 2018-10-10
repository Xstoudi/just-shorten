'use strict'

const Schema = use('Schema')

class ShortEntrySchema extends Schema {
  up () {
    this.create('short_entries', (table) => {
      table.increments()
      table.string('original_url').nullable(false)
      table.string('url_discriminant').nullable(false)
      table.integer('click_counter').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('short_entries')
  }
}

module.exports = ShortEntrySchema
