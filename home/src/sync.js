const debug = require('debug')('sync-sites')

const GIT_HOST='http://onedev:6610'
const SITES_ROOT='/usr/share/nginx/html/sites'

const gitPullOrClone = require('git-pull-or-clone')
gitPullOrClone(`${GIT_HOST}/test`,
  `${SITES_ROOT}/test`,
  (err) => {
    if (err) throw err
    debug('Success!')
  }
)
