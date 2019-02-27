/* this must be included!! */
const johnObj = {
	age: 		  (dt.getFullYear()-1996),
	fname: 		  'John Lito',
	lname: 		  'Bardinas',
	title: 		  'Full Stack Developer',
	exp_nonprof:  '4 Years',
	exp_prof:  	  '2 Years',
	from:  		  'Makati, Philippines',
	availability: 'Weekends only'

}

document.getElementById('age').textContent = johnObj.age;
document.getElementById('from').textContent = johnObj.from;
document.getElementById('exp_prof').textContent = johnObj.exp_prof;
document.getElementById('exp_nonprof').textContent = johnObj.exp_nonprof;
document.getElementById('availability').textContent = johnObj.availability;


