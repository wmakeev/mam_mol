declare namespace $ {

	type $mol_password__value__F8JVXH0A = $mol_type_enforce<
		ReturnType< $mol_password_demo['pass'] >
		,
		ReturnType< $mol_password['value'] >
	>
	type $mol_password__value__ASM5T45W = $mol_type_enforce<
		ReturnType< $mol_password_demo['pass2'] >
		,
		ReturnType< $mol_password['value'] >
	>
	type $mol_password__hint__FJSMBUOL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_password['hint'] >
	>
	export class $mol_password_demo extends $mol_example_small {
		pass( next?: string ): string
		Simple( ): $mol_password
		pass2( next?: string ): string
		Hint( ): $mol_password
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map