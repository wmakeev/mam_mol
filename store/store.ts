namespace $ {

	export class $mol_store< Data > extends $mol_object2 {

		constructor(
			public data_default? : Data
		) {
			super()
		}

		@ $mol_mem
		data( next? : Data ) {
			return next === undefined ? this.data_default! : next
		}

		snapshot( next? : string ) {
			return JSON.stringify( this.data( next === undefined ? next : JSON.parse( next ) ) )
		}

		value< Key extends keyof Data >( key : Key , next? : Data[ Key ] ) {
			
			const data = this.data()
			if( next === undefined ) return data && data[ key ]!

			const Constr = Reflect.getPrototypeOf( data as any )!.constructor as new ()=> {}
			
			this.data( Object.assign( new Constr , data , { [ key ] : next } ) )

			return next!
		}

		@ $mol_mem_key
		selection<
			Key extends keyof Data
		>( key: Key, next = [ 0, 0 ] ) {
			return next
		}
			
		sub<
			Key extends keyof Data ,
			Lens extends $mol_store< Data[ Key ] > = $mol_store< NonNullable<Data[ Key ]> >
		>( key : Key , lens? : Lens ) {

			if( !lens ) lens = new $mol_store< Data[ Key ] >() as any

			const data = lens!.data
			lens!.data = next => {
				if( next == undefined ) {
					return this.value( key ) ?? lens!.data_default!
				}
				return this.value( key , next )
			}

			return lens!

		}

		reset() {
			this.data( this.data_default! )
		}

		active() {
			return true
		}

	}

}
