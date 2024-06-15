	($.$mol_avatar_demo) = class $mol_avatar_demo extends ($.$mol_example_small) {
		avatar_id(next){
			if(next !== undefined) return next;
			return "$mol_avatar";
		}
		Avatar_id_value(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this?.avatar_id(next)));
			return obj;
		}
		Avatar_id_label(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Id");
			(obj.content) = () => ([(this?.Avatar_id_value())]);
			return obj;
		}
		Avatar(){
			const obj = new this.$.$mol_avatar();
			(obj.id) = () => ((this?.avatar_id()));
			return obj;
		}
		Avatar_label(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Avatar");
			(obj.content) = () => ([(this?.Avatar())]);
			return obj;
		}
		title(){
			return "Avatar uniquely-generated by id";
		}
		sub(){
			return [(this?.Avatar_id_label()), (this?.Avatar_label())];
		}
		tags(){
			return [
				"generated", 
				"identity", 
				"user"
			];
		}
		aspects(){
			return ["Widget/Draw", "Algorithm/Hash"];
		}
	};
	($mol_mem(($.$mol_avatar_demo.prototype), "avatar_id"));
	($mol_mem(($.$mol_avatar_demo.prototype), "Avatar_id_value"));
	($mol_mem(($.$mol_avatar_demo.prototype), "Avatar_id_label"));
	($mol_mem(($.$mol_avatar_demo.prototype), "Avatar"));
	($mol_mem(($.$mol_avatar_demo.prototype), "Avatar_label"));

//# sourceMappingURL=demo.view.tree.js.map