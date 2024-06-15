# $mol_data_variant

Checks for some of given runtype or throws error.

	const Phone = $mol_data_variant(
		$mol_data_number,
		$mol_data_string,
	)
	const phone1 = Phone( 1234567890 ) // ✅
	const phone2 = Phone( '+1(23)456-78-90' ) // ✅
	
	Phone( null )
	// ❌ null is not any of variants
	// ❌ null is not a number
	// ❌ null is not a string
