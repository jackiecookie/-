/**
 * Run test specs in node environment
 * Usage:
 *   $ cd seajs
 *   $ node tests/runner-node.js
 */

require('../lib/sea.js')

define('../tests/node-runner', null, function(require) {
  
  var test = require('../tests/test')

  var suites = require('../tests/meta').map(function(suite) {
    return '../tests/' + suite + '/meta'
  })

  require.async(suites, function() {
    debugger;
    var args = [].slice.call(arguments)
    var specs = []

    args.forEach(function(meta, i) {
      specs = specs.concat(meta.map(function(spec) {
        return suites[i].split('/')[2] + '/' +suites[i].split('/')[3]+'/'+ spec
      }))
    })

    var total = specs.length
    var time = Date.now()
    test.run(specs)

    test.print('Summary')
    test.print(total + ' suites in ' + (Date.now() - time) / 1000 + 's')
    test.print('END')
  })

})
seajs.use('../tests/node-runner')

