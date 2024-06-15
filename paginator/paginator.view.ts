namespace $.$$ {

	/**
	 * Paginator UI component
	 * @see https://mol.hyoo.ru/#!section=demos/demo=mol_paginator_demo
	 */
	export class $mol_paginator extends $.$mol_paginator {
		
		backward( event: Event ) {
			if( event.defaultPrevented ) return
			event.preventDefault()
			this.value( this.value() - 1 )
		}
		
		forward( event: Event ) {
			if( event.defaultPrevented ) return
			event.preventDefault()
			this.value( this.value() + 1 )
		}

	}

}
