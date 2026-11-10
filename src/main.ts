// ------------------------------------------
// Built-in Utility Types Practice
// ------------------------------------------

// 1. Make all properties optional

type User = {
	id: number;
	name: string;
	email: string;
};

// TODO:
// Use a built-in utility to make a type where all properties in the User type are optional.
// Create a variable `draftUser` of this new type
// and assign only one property to it.

// const draftUser: ??? = { name: "Draft" };

// 2. Make all fields required

type Settings = {
	darkMode?: boolean;
	fontSize?: number;
};

// TODO:
// Use a built-in utility to make sure all fields are required.
//  Create a variable `strictSettings` of this new type
// and provide all the properties.

// const strictSettings: ??? = { darkMode: true, fontSize: 16 };

// 3. Make an object immutable

type Book = {
	title: string;
	author: string;
};

// TODO:
// Make a Book object that cannot be edited after creation.
// Use a built-in utility to make the book immutable.
// Try changing a property and see the error.

// const book: ??? = { title: "1984", author: "George Orwell" };
// book.title = "Animal Farm"; // ❌ Should be a compile error

// 4. Record
// You’re building a key-value map of scores per user.
// Keys are usernames (string), values are numbers.

// TODO:
// Use the Record built-in utility to type this object

// const scores: ??? = {
//   alice: 42,
//   bob: 36
// };

// 5. Create a new type with only the specified keys

type Contact = {
	id: number;
	name: string;
	email: string;
	phone: string;
};

// TODO:
// Create a type ContactInfo using a built-in utility
// Pick only the name and email from the User type.
// Then create a variable `contactInfo` with only those props.

// const contactInfo: ??? = { name: "Grace", email: "grace@example.com" };

// 6. Remove specified keys from a type

// TODO:
// Now do the reverse: remove the phone from Contact.
// Create a type ContactNoPhone using Omit
// Then try assigning a variable with a `phone` property and see the error.

// const contactNoPhone: ??? = {
//   id: 1,
//   name: "Alan",
//   email: "alan@example.com",
//   phone: "should not be allowed" // ❌
// };
