/**
 * Ow!! you came here..
 */

function Profile() {

	// Instance Member.
	var fullName = 'John Lito Bardinas';
	var firstName = 'John Lito';
	var lastName = 'Bardinas';
	var dateOfBith = new Date('December 15, 1996');
	var nonProYear = new Date('May 1, 2016');
	var proYear = new Date('August 18, 2017');
	var title = 'Full Stack Web Developer';
	var fromLocation = 'Philippines';
	var availability = 'Weekends Only';

	/**
	 * Return the computed date
	 * @return Computed Age.
	 */
	this.computeAge = function () {
		var diff_ms = Date.now() - dateOfBith.getTime();
		var age_dt = new Date(diff_ms);
		return Math.abs(age_dt.getUTCFullYear() - 1970);
	}

	/**
	 * Return the computed Working Years.
	 * @param {boolean} isProfessionalYear Determine if Professional Year.
	 * @return COmputed Year.
	 */
	this.computeWorkingYear = function (isProfessionalYear) {
		if (isProfessionalYear) {
			return Math.abs(new Date().getFullYear() - proYear.getFullYear());
		}

		return Math.abs(new Date().getFullYear() - nonProYear.getFullYear());

	}

	// Define readonly properties.
	Object.defineProperties(this, {
		fullName: {
			value: fullName,
			writable: false
		},
		'firstName': {
			value: firstName,
			writtable: false
		},
		'lastName': {
			value: lastName,
			writtable: false
		},
		'title': {
			value: title,
			writable: false
		},
		'fromLocation': {
			value: fromLocation,
			writable: false
		},
		'availability': {
			value: availability,
			writable: false
		}
	});

}

$(function () {
	var johnLito = new Profile();
	$('#full-name').text(johnLito.firstName + ' ' + johnLito.lastName );
	$('#age').text(johnLito.computeAge() + ' years old');
	$('#title').text(johnLito.title);
	$('#from').text(johnLito.fromLocation);
	$('#exp_prof').text(johnLito.computeWorkingYear(true) + ' Years');
	$('#exp_nonprof').text(johnLito.computeWorkingYear() + ' Years');
});
