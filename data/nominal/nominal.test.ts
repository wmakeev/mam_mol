namespace $ {
	$mol_test({

		'Nominal typing' () {

			const Weight = $mol_data_nominal({ Weight : $mol_data_integer })
			const Length = $mol_data_nominal({ Length : $mol_data_integer })
			
			let len = Length( 10 )
			len = Length( 20 ) // Validate
			
			len = 20 // Implicit Cast
			let num: number = len // Implicit Cast
			len = Weight( 20 ) as typeof Length.Value // Explicit Cast
			
			// len = Weight( 20 ) // Compile time error
			// len = Length( 20.1 ) // Run time error

		} ,

	})
}
