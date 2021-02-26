import Course from './Course.js';

export default class Student {
	constructor(firstName = "", lastName = "") {
		this.firstName = firstName;
		this.lastName = lastName;
		this.course = new Course();
	}
};