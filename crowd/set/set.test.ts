namespace $ {
	$mol_test({
		
		'Add keys'() {
			
			$mol_assert_like(
				new $mol_crowd_set().fork(1).add( 'foo' ).add( 'bar' ).toJSON(),
				$mol_crowd_delta(
					[ 'foo', 'bar' ],
					[ +1001, +2001 ],
				),
			)
			
		},
		
		'Slice after version'() {
			
			const val = new $mol_crowd_set().fork(1).add( 'foo' ).add( 'bar' )
			
			$mol_assert_like( val.toJSON( +1001 ), $mol_crowd_delta(
				[ 'bar' ],
				[ +2001 ],
			 ) )
			
			$mol_assert_like( val.toJSON( +2001 ), $mol_crowd_delta([],[]) )
			
		},
		
		'Ignore existen keys'() {
			
			$mol_assert_like(
				new $mol_crowd_set().fork(1).add( 'foo' ).add( 'foo' ).toJSON(),
				$mol_crowd_delta(
					[ 'foo' ],
					[ +2001 ],
				),
			)
			
		},
		
		'Partial remove keys'() {
			
			$mol_assert_like(
				new $mol_crowd_set().fork(1).add( 'foo' ).add( 'bar' ).remove( 'foo' ).toJSON(),
				$mol_crowd_delta(
					[ 'foo', 'bar' ],
					[ -3001, +2001 ],
				),
			)
			
		},
		
		'Ignore already removed keys'() {
			
			$mol_assert_like(
				new $mol_crowd_set().fork(1).add( 'foo' ).remove( 'foo' ).remove( 'foo' ).toJSON(),
				$mol_crowd_delta(
					[ 'foo' ],
					[ -3001 ],
				),
			)
			
		},
		
		'Convert to native Set'() {
			
			const store = new $mol_crowd_set().fork(1).add( 'foo' ).add( 'xxx' ).remove( 'foo' )
			
			$mol_assert_like( [ ... store.items ], [ "xxx" ] )
			
		},
		
		'Merge different sets'() {
			
			const left = new $mol_crowd_set().fork(2).add( 'foo' ).add( 'bar' )
			const right = new $mol_crowd_set().fork(3).add( 'xxx' ).add( 'yyy' ).remove( 'xxx' )
			
			const left_event = left.toJSON()
			const right_event = right.toJSON()
			
			$mol_assert_like(
				[ ... left.apply( right_event ).items ].sort(),
				[ ... right.apply( left_event ).items ].sort(),
				[ 'bar', 'foo', 'yyy' ],
			)
			
		},
		
		'Merge branches with common base'() {
			
			const base = new $mol_crowd_set().fork(1).add( 'foo' ).add( 'bar' )
			
			const left = base.fork(2).add( 'xxx' )
			const right = base.fork(3).remove( 'foo' )
			
			const left_event = left.delta( base )
			const right_event = right.delta( base )
			
			$mol_assert_like(
				[ ... left.apply( right_event ).items ].sort(),
				[ ... right.apply( left_event ).items ].sort(),
				[ 'bar', 'xxx' ],
			)
			
		},
		
		'Concurrent Add and Remove'() {
			
			const base = new $mol_crowd_set().fork(1).add( 'foo' )
			
			const left = base.fork(2).add( 'bar' ).remove( 'xxx' )
			const right = base.fork(3).remove( 'bar' ).add( 'xxx' )
			
			const left_event = left.delta( base )
			const right_event = right.delta( base )
			
			$mol_assert_like(
				[ ... left.apply( right_event ).items ],
				[ ... right.apply( left_event ).items ],
				[ 'foo', 'xxx' ],
			)
			
		},
		
		'Number ids support'() {
			
			$mol_assert_like(
				new $mol_crowd_set().fork(1).add( 1 ).add( 2 ).add( 2 ).toJSON(),
				$mol_crowd_delta(
					[ 1, 2 ],
					[ +1001, +3001 ],
				),
			)
			
		},
		
	})
}
