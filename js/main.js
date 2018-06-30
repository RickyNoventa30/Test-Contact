new Vue({
	el: '#app',
	data: {
		users: {
			result: []
		}
	},
	created () {
		var vm = this
		
		// Send a GET request
		axios
			.get('http://dev.nostratech.com:10093/api/v1/person')
			.then(function (response) {
				vm.users = response.data
			}),
			
		// Perform POST request
		axios
		.post('http://dev.nostratech.com:10093/api/v1/person', {
			name: 'Alex',
			address: 'Jl.Suatu Jalan',
			phone: '08123456789',
			email: 'abc@email.com'
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		}),
		
		// Perform EDIT request
		axios
		.put(
			"http://dev.nostratech.com:10093/api/v1/person/67913e80-7df7-464a-b14a-98514569d331", 
			{headers: {"key": "Content-Type",
						"value": "application/json"}}
		)
		.then(r => console.log(r.status))
		.catch(e => console.log(e)),
		
		// Perform DELETE request
		axios
		.delete('http://dev.nostratech.com:10093/api/v1/person/b00a6cb4-c176-44ce-b23a-c6befb43c59e')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	},
	methods: {
		addContact(){
			// Send a POST request
			axios({
				method: 'post',
				url: 'http://dev.nostratech.com:10093/api/v1/person',
				data: {
					name: 'Alex',
					address: 'Jl.Suatu Jalan',
					phone: '08123456789',
					email: 'abc@email.com'
				}
			});
		},
		delContact(){
			// Send a DELETE request
			axios({
				method: 'delete',
				url: 'http://dev.nostratech.com:10093/api/v1/person/b00a6cb4-c176-44ce-b23a-c6befb43c59e'
			});
      	}
	}
})