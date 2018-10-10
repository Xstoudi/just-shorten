'use strict'

const Env = use('Env')

class SessionController {
  async getLogin ({ request, response, view }) {
    return view.render('login')
  }

  async login ({ request, response, session }) {
    const { password } = request.post()

    console.log(password)

    if(password !== Env.get('LOGIN_PASSWORD'))
      return response.redirect('/')

    session.put('login', true)
    response.redirect('/links')
  }
}

module.exports = SessionController
