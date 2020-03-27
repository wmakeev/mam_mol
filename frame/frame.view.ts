namespace $.$$ {
	export class $mol_frame extends $.$mol_frame {

		dom_node : ( next? : HTMLIFrameElement )=> HTMLIFrameElement
		
		@$mol_mem
		window() {

			const node = this.dom_node()
			
			this.uri();
			
			return $mol_fiber_sync(() => new Promise((done, fail) => {
				node.onload = () => done( node.contentWindow )
				node.onerror = ( event : ErrorEvent ) => fail( event.error )
			}))()
			
		}

		render() {
			this.window();
			return super.render();
		}
		
	}
}
