'use strict'

const moment = use('moment')
const Database = use('Database')
const View = use('View')
const ShortEntry = use('App/Models/ShortEntry')

View.global('momentElapsedTime', function (date) {
  return moment(date).fromNow()
})

/**
 * Resourceful controller for interacting with links
 */
class LinkController {
  /**
   * Show a list of all links.
   * GET links
   */
  async index ({ request, response, view }) {

    const { page = 1 } = request.get()

    const shortEntries = await Database
      .table('short_entries')
      .orderBy('id', 'desc')
      .offset(9 * (page - 1))
      .limit(9)

    const totalPages = Math.ceil((await Database
      .table('short_entries')
      .count('* as totalPages'))[0].totalPages / 9)

    return view.render('links', {
      pagination: {
        page: parseInt(page),
        totalPages
      },
      shortEntries,
      appUrl: process.env.APP_URL
    })
  }

  /**
   * Render a form to be used for creating a new link.
   * GET links/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new link.
   * POST links
   */
  async store ({ request, response }) {
    const { url } = request.post()

    const shortEntry = new ShortEntry()
    shortEntry.original_url = url
    shortEntry.url_discriminant = Math.random().toString(36).substr(2, 6);
    await shortEntry.save()

    response.redirect('/links')
  }

  /**
   * Display a single link.
   * GET links/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing link.
   * GET links/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update link details.
   * PUT or PATCH links/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a link with id.
   * DELETE links/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = LinkController
