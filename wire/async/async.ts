namespace $ {
	
	/** Convert a pseudo-synchronous (Suspense API) API to an explicit asynchronous one (for integrating with external systems). */
	export function $mol_wire_async< Host extends object >( obj: Host ) {
		
		let fiber: $mol_wire_fiber< any, any, any >
		const temp = $mol_wire_task.getter( obj as ( ... args: any[] )=> any )
		
		return new Proxy( obj, {
			
			get( obj, field ) {
				
				const val = (obj as any)[ field ]
				if( typeof val !== 'function' ) return val
				
				let fiber: $mol_wire_fiber< any, any, any >
				const temp = $mol_wire_task.getter( val ) 
				
				return function $mol_wire_async( this: Host, ... args: any[] ) {
					fiber?.destructor()
					fiber = temp( obj, args )
					return fiber.async()
				}
				
			},
			
			apply( obj, self, args ) {
				fiber?.destructor()
				fiber = temp( self, args )
				return fiber.async()
			},
			
		} )  as unknown as ObjectOrFunctionResultPromisify<Host>
		
	}

	type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res
		? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res>
		: Some

	type MethodsResultPromisify<Host extends Object> = {
		[K in keyof Host]: FunctionResultPromisify<Host[K]>
	}

	type ObjectOrFunctionResultPromisify<Some> = (
		Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}
	) & ( Some extends Object ? MethodsResultPromisify<Some> : Some )

}
