export default {
	name: 'career',
	title: 'career',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'email',
			title: 'Email',
			type: 'string'
		},
		{
			name: 'qualifications',
			title: 'Qualifications',
			type: 'string'
		},
		{
			name: 'number',
			title: 'Number',
			type: 'string'
		},
		
		{
			name: 'message',
			title: 'Message',
			type: 'string'
		},
        {
			name: 'resume',
			title: 'Resume',
			type: 'file'
		}
	]
}