namespace $ {
	
	export function $mol_stub_strings( prefix = '' , count = 10 , length = 10 ) {
		if( prefix.length >= length ) return []
		
		let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split( '' )
		let strings : any[] = []
		
		for( let i = 0 ; i < count ; i++ ) {
			let text = prefix
			for( let j = prefix.length ; j < length ; j++ ) {
				text += $mol_array_lottery( possible )
			}
			strings.push( text )
		}
		
		return strings
	}
	
	export function $mol_stub_code( length = 8 ) {
		var max = Math.pow( 16 , length )
		var min = Math.pow( 16 , length - 1 )
		var value = min + Math.floor( Math.random() * ( max - min ) )
		return value.toString( 16 ).toUpperCase()
	}
	
	export function $mol_stub_price( max = 1000 ) {
		var min = Math.floor( max / 16 / 16 )
		var value = min + Math.floor( Math.random() * ( max - min ) )
		return new $mol_unit_money_usd( value )
	}
	
	export function $mol_stub_product_name() {
		var name = $mol_array_lottery(
			[
				'Monitor 15"' ,
				'Monitor 17"' ,
				'Monitor 19"' ,
				'Graphics card' ,
				'Frame grabber card'
			]
		)
		var port = $mol_array_lottery( [ 'D-SUB' , 'DVI' , 'HDMI' ] )
		var resolution = $mol_array_lottery( [ 'VGA' , 'Full HD' , '4K' ] )
		
		return [ name , port , resolution ].join( ', ' )
	}
	
	export function $mol_stub_company_name_big() {
		var product = $mol_array_lottery( [ 'Everything' , 'Something' , 'Anything' , 'Nothing' ] )
		var type = $mol_array_lottery( [ 'Company' , 'Corporation' , 'Holding' ] )
		
		return `A ${type} that makes ${product}`
	}
	
	export function $mol_stub_company_name_small() {
		return $mol_array_lottery( [ 'ACME inc.' , 'Dream Company' , 'Just Company' ] )
	}
	
	export function $mol_stub_company_name() {
		return $mol_array_lottery( [ $mol_stub_company_name_small , $mol_stub_company_name_big ] )()
	}
	
	export function $mol_stub_person_name() {
		var first = $mol_array_lottery( [ 'Ivan' , 'Petr' , 'Sidor', 'John', 'Sam' ] )
		var last = $mol_array_lottery( [ 'Ivanov' , 'Petrov' , 'Sidorov', 'Johnson', 'Smith' ] )
		return `${first} ${last}`
	}
	
	export function $mol_stub_person_avatar( size = 80 ) {
		const id = Math.random().toString( 16 ).slice( 2 )
		return `https://gravatar.com/avatar/${id}?d=robohash&s=${size}`
	}
	
	export function $mol_stub_city() {
		return $mol_array_lottery( [ 'Moscow' , 'London' , 'Washington' , 'Buenos Aires' ] )
	}
	
	export function $mol_stub_time( maxShift = 60 * 24 * 365 ) {
		return new $mol_time_moment().shift( { minute : Math.round( Math.random() * maxShift ) } )
	}
	
	export function $mol_stub_message( max_length : number ) {
		const text =' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.'
		return text.substring(
			0 ,
			Math.ceil( Math.random() * max_length - 5 ) + 5
		)
	}
	
}
