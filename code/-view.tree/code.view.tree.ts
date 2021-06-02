namespace $ {
	export class $mol_code extends $mol_view {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Manual
		 * 	<= Scan
		 * ```
		 */
		sub() {
			return [
				this.Manual(),
				this.Scan()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * value?val \
		 * ```
		 */
		@ $mol_mem
		value(val?: any) {
			if ( val !== undefined ) return val
			return ""
		}
		
		/**
		 * ```tree
		 * format \
		 * ```
		 */
		format() {
			return ""
		}
		
		/**
		 * ```tree
		 * hint <= format
		 * ```
		 */
		hint() {
			return this.format()
		}
		
		/**
		 * ```tree
		 * Manual $mol_search
		 * 	query?val <=> value?val
		 * 	hint <= hint
		 * ```
		 */
		@ $mol_mem
		Manual() {
			const obj = new this.$.$mol_search()
			
			obj.query = (val?: any) => this.value(val)
			obj.hint = () => this.hint()
			
			return obj
		}
		
		/**
		 * ```tree
		 * event_scan?val null
		 * ```
		 */
		@ $mol_mem
		event_scan(val?: any) {
			if ( val !== undefined ) return val
			return null as any
		}
		
		/**
		 * ```tree
		 * scan_label @ \Scan
		 * ```
		 */
		scan_label() {
			return this.$.$mol_locale.text( '$mol_code_scan_label' )
		}
		
		/**
		 * ```tree
		 * Scan $mol_button
		 * 	event_click?val <=> event_scan?val
		 * 	sub / <= scan_label
		 * ```
		 */
		@ $mol_mem
		Scan() {
			const obj = new this.$.$mol_button()
			
			obj.event_click = (val?: any) => this.event_scan(val)
			obj.sub = () => [
				this.scan_label()
			] as readonly any[]
			
			return obj
		}
	}
	
}
