const test = require('tape')

const crocks = require('./crocks')

const composeB      = require('./combinators/composeB')
const constant      = require('./combinators/constant')
const flip          = require('./combinators/flip')
const identity      = require('./combinators/identity')
const reverseApply  = require('./combinators/reverseApply')
const substitution  = require('./combinators/substitution')

const compose     = require('./funcs/compose')
const curry       = require('./funcs/curry')
const inspect     = require('./funcs/inspect')
const liftA2      = require('./funcs/liftA2')
const liftA3      = require('./funcs/liftA3')
const mconcat     = require('./funcs/mconcat')
const mconcatMap  = require('./funcs/mconcatMap')

const map     = require('./pointfree/map')
const ap      = require('./pointfree/ap')
const chain   = require('./pointfree/chain')
const concat  = require('./pointfree/concat')

const either      = require('./pointfree/either')
const log         = require('./pointfree/log')
const maybe       = require('./pointfree/maybe')
const option      = require('./pointfree/option')
const read        = require('./pointfree/read')
const reduceLog   = require('./pointfree/reduceLog')
const mreduceLog  = require('./pointfree/mreduceLog')
const run         = require('./pointfree/run')
const runWith     = require('./pointfree/runWith')
const value       = require('./pointfree/value')

const Either    = require('./crocks/Either')
const Identity  = require('./crocks/Identity')
const IO        = require('./crocks/IO')
const Maybe     = require('./crocks/Maybe')
const Reader    = require('./crocks/Reader')
const Writer    = require('./crocks/Writer')

const All     = require('./monoids/All')
const Any     = require('./monoids/Any')
const Assign  = require('./monoids/Assign')
const Compose = require('./monoids/Compose')
const Flip    = require('./monoids/Flip')
const Min     = require('./monoids/Min')
const Max     = require('./monoids/Max')
const Prod    = require('./monoids/Prod')
const Sum     = require('./monoids/Sum')

test('entry', t => {
  t.equal(crocks.toString(), '[object Object]', 'is an object')

  t.equal(crocks.composeB, composeB, 'provides the B combinator')
  t.equal(crocks.constant, constant, 'provides the K combinator')
  t.equal(crocks.flip, flip, 'provides the C combinator')
  t.equal(crocks.identity, identity, 'provides the I combinator')
  t.equal(crocks.reverseApply, reverseApply, 'provides the T combinator')
  t.equal(crocks.substitution, substitution, 'provides the S combinator')

  t.equal(crocks.compose, compose, 'provides the compose function')
  t.equal(crocks.curry, curry, 'provides the curry function')
  t.equal(crocks.inspect, inspect, 'provides the inspect function')
  t.equal(crocks.liftA2, liftA2, 'provides the liftA2 function')
  t.equal(crocks.liftA3, liftA3, 'provides the liftA3 function')
  t.equal(crocks.mconcat, mconcat, 'provides the mconcat function')
  t.equal(crocks.mconcatMap, mconcatMap, 'provides the mconcatMap function')

  t.equal(crocks.map, map, 'provides the map point-free function')
  t.equal(crocks.ap, ap, 'provides the ap point-free function')
  t.equal(crocks.chain, chain, 'provides the chain point-free function')
  t.equal(crocks.concat, concat, 'provides the concat point-free function')

  t.equal(crocks.either, either, 'provides the either point-free function')
  t.equal(crocks.log, log, 'provides the log point-free function')
  t.equal(crocks.maybe, maybe, 'provides the maybe point-free function')
  t.equal(crocks.option, option, 'provides the option point-free function')
  t.equal(crocks.reduceLog, reduceLog, 'provides the reduceLog point-free function')
  t.equal(crocks.mreduceLog, mreduceLog, 'provides the mreduceLog point-free function')
  t.equal(crocks.read, read, 'provides the read point-free function')
  t.equal(crocks.run, run, 'provides the run point-free function')
  t.equal(crocks.runWith, runWith, 'provides the runWith point-free function')
  t.equal(crocks.value, value, 'provides the value point-free function')

  t.equal(crocks.Either, Either, 'provides the Either function')
  t.equal(crocks.Identity, Identity, 'provides the Identity function')
  t.equal(crocks.IO, IO, 'provides the IO function')
  t.equal(crocks.Maybe, Maybe, 'provides the Maybe function')
  t.equal(crocks.Reader, Reader, 'provides the Reader function')
  t.equal(crocks.Writer, Writer, 'provides the Writer function')

  t.equal(crocks.All, All, 'provides the All monoid')
  t.equal(crocks.Any, Any, 'provides the Any monoid')
  t.equal(crocks.Assign, Assign, 'provides the Assign monoid')
  t.equal(crocks.Compose, Compose, 'provides the Compose monoid')
  t.equal(crocks.Flip, Flip, 'provides the Flip monoid')
  t.equal(crocks.Min, Min, 'provides the Min monoid')
  t.equal(crocks.Max, Max, 'provides the Max monoid')
  t.equal(crocks.Prod, Prod, 'provides the Prod monoid')
  t.equal(crocks.Sum, Sum, 'provides the Sum monoid')

  t.end()
})
