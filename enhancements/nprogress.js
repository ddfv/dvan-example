import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

nprogress.configure({ showSpinner: false })

function progressbar(_f) {
  if (process.browser) nprogress[_f]()
}

export default ({ router }) => {
  router.beforeEach((t, f, next) => {
    progressbar('start')
    next()
  })

  router.afterEach(() => {
    progressbar('done')
  })
}
