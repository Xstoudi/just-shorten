'use strict'

const ShortEntry = use('App/Models/ShortEntry')

class ShortenedUrlController {
  async redirect ({ request, response, params, view }) {
    const { discriminant } = params

    const results = await ShortEntry.query()
      .where('url_discriminant', '=', discriminant)
      .fetch()

    if(results.rows.length === 0)
      return view.render('404')

    const shortEntry = results.rows[0]
    shortEntry.click_counter++
    await shortEntry.save()

    response.redirect(shortEntry.original_url)
  }
}

module.exports = ShortenedUrlController
