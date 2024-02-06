export interface typeContact {
	fname: string;
	lname: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}

export interface typeSignup {
	email: string;
	password: string;
}

export interface typeLogin {
	email: string;
	password: string;
}

export interface typeVerify {
	email: string;
	otp: string;
}
