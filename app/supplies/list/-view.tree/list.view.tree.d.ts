declare namespace $ {

	type $mol_code__hint__UKN5R3PB = $mol_type_enforce<
		ReturnType< $mol_app_supplies_list['search_hint'] >
		,
		ReturnType< $mol_code['hint'] >
	>
	type $mol_code__value__46GD3Y92 = $mol_type_enforce<
		ReturnType< $mol_app_supplies_list['search_query'] >
		,
		ReturnType< $mol_code['value'] >
	>
	type $mol_list__rows__BOPDOAU4 = $mol_type_enforce<
		ReturnType< $mol_app_supplies_list['supply_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_app_supplies_card__supply__6R6SRWG5 = $mol_type_enforce<
		ReturnType< $mol_app_supplies_list['supply'] >
		,
		ReturnType< $mol_app_supplies_card['supply'] >
	>
	type $mol_app_supplies_card__arg__0I8QXWI1 = $mol_type_enforce<
		ReturnType< $mol_app_supplies_list['supply_arg'] >
		,
		ReturnType< $mol_app_supplies_card['arg'] >
	>
	export class $mol_app_supplies_list extends $mol_page {
		search_hint( ): string
		search_query( next?: string ): string
		Search( ): $mol_code
		supply_rows( ): readonly($mol_view)[]
		Supply_rows( ): $mol_list
		supply( id: any): any
		supply_id( id: any): string
		supply_arg( id: any): ({ 
			'supply': ReturnType< $mol_app_supplies_list['supply_id'] >,
		}) 
		supplies( ): readonly($mol_app_supplies_domain_supply)[]
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
		Supply_row( id: any): $mol_app_supplies_card
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map