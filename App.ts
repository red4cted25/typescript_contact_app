interface Contact {
    id: number,
    name: string,
    email: string,
    phoneNumber: string,
    isFavorite: boolean
}

const contacts: Contact[] = [
    {id: 1, name: "Daniel Freeman", email: "danielfreem927@gmail.com", phoneNumber: "623-218-8463", isFavorite: true},
    {id: 2, name: "Alan Sanchez", email: "sanchez1.alan1@gmail.com", phoneNumber: "818-857-0343", isFavorite: false},
    {id: 3, name: "Sabrina Shafer", email: "sabrinashafer321@gmail.com", phoneNumber: "623-670-8905", isFavorite: false},
    {id: 4, name: "Angie Cote", email: "angiecote927@gmail.com", phoneNumber: "602-567-5013", isFavorite: false},
    {id: 5, name: "Audrey Geehan", email: "audreygeeha128@gmail.com", phoneNumber: "602-620-8102", isFavorite: false}
]

// Function to get the next ID for a new contact
// This function takes an array of contacts and returns the next ID to be used for a new contact
const getNextId = (contacts: Contact[]) =>
    contacts.length ? Math.max(...contacts.map(c => c.id)) + 1 : 1;

// Function to add a new contact
// This function takes a name, email, phone number, and favorite status as parameters and adds a new contact to the contacts array
function addNewContact (name: string, email: string, phoneNumber: string, isFavorite: boolean): void {
    const newContact: Contact = {
        id: getNextId(contacts),
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        isFavorite: isFavorite
    }
    contacts.push(newContact);
}

// Function to delete an existing contact
// This function takes an ID as a parameter and removes the contact with that ID from the contacts array
function deleteContact (id: number): void {
    const index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
    }
}

// Function to display contacts
function displayContacts(): void {
    console.log("Contacts List:");
    contacts.forEach(contact => {
        if (contact.isFavorite) {
            console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone Number: ${contact.phoneNumber}, Favorite: ${contact.isFavorite}`, 'background: #fff829;');
        } else {
            console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone Number: ${contact.phoneNumber}, Favorite: ${contact.isFavorite}`);
        }
    });
}

