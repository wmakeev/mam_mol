namespace $.$$ {
	
	export class $mol_plot_demo extends $.$mol_plot_demo {
		@ $mol_mem
		series_x() {
			const next = [] as number[]
			for (let i = 0, count = this.count(); i < count; i++) next.push(i)
			return next
		}

		@ $mol_mem
		input_series() {
			const x = this.series_x()
			return x.map(i => Math.sin( i * 9 / x.length ) * 2)
		}

		@ $mol_mem
		output_series() {
			$mol_state_time.now( Math.floor( 1000 / this.frequency() ) )
			return this.input_series().map(input => input * Math.random())
		}
		
		@ $mol_mem
		saturation_series() {
			const input = this.output_series()
			const prev : number[] = $mol_mem_cached( ()=> this.saturation_series() ) ?? []
			return input.map( ( val , i )=> {
				const next = ( val + 9 * ( prev[ i ] || 0 ) ) / 10
				return ( Math.abs( next ) > Math.abs( val ) ) ? next : val
			} )
		}
		
	}
	
}
