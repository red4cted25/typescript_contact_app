import * as fs from 'fs';

interface Contact {
    id: number,
    name: string,
    email: string,
    phoneNumber: string,
    relationship: string,
    isFavorite: boolean
}

const contacts: Contact[] = [
    {id: 1, name: "Daniel Freeman", email: "danielfreem927@gmail.com", phoneNumber: "623-218-8463", relationship: "Personal", isFavorite: true},
    {id: 2, name: "Alan Sanchez", email: "sanchez1.alan1@gmail.com", phoneNumber: "818-857-0343", relationship: "Work", isFavorite: false},
    {id: 3, name: "Sabrina Shafer", email: "sabrinashafer321@gmail.com", phoneNumber: "623-670-8905", relationship: "Personal", isFavorite: false},
    {id: 4, name: "Angie Cote", email: "angiecote927@gmail.com", phoneNumber: "602-567-5013", relationship: "Personal", isFavorite: true},
    {id: 5, name: "Audrey Geehan", email: "audreygeeha128@gmail.com", phoneNumber: "602-620-8102", relationship: "Personal", isFavorite: false}
]

class ContactManager {
    private contacts: Contact[] = [];

    constructor(contacts: Contact[]) {
        this.contacts = contacts;
    }

    // Function to get the next ID for a new contact
    // This function takes an array of contacts and returns the next ID to be used for a new contact
    private getNextId(): number {
        return this.contacts.length ? Math.max(...this.contacts.map(c => c.id)) + 1 : 1;
    }
    // Function to add a new contact
    // This function takes a name, email, phone number, and favorite status as parameters and adds a new contact to the contacts array
    addNewContact (name: string, email: string, phoneNumber: string, relationship: string, isFavorite: boolean = false): void {
        const newContact: Contact = {
            id: this.getNextId(),
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            relationship: relationship,
            isFavorite: isFavorite
        }
        this.contacts.push(newContact);
    }

    // Function to delete an existing contact
    // This function takes an ID as a parameter and filters out the contact with that ID from the contacts array
    deleteContact (id: number): void {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
    }

    // Function to display contacts
    displayContacts(): void {
        console.log("Contacts List:");
        this.contacts.forEach(contact => {
            console.log(`${contact.isFavorite ? '\x1b[33m' : ''} ID: ${contact.id}, \n Name: ${contact.name}, \n Email: ${contact.email}, \n Phone Number: ${contact.phoneNumber}, \n Relationship: ${contact.relationship} \n \x1b[0m`);
        });
    }

    // Function to search for a contact by name or email
    searchContacts (searchTerm: string): Contact[] {
        return this.contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || contact.email.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Saving contacts to a JSON file
    saveContactsToFile(fileName: string): void {
        fs.writeFileSync(fileName, JSON.stringify(this.contacts, null, 2), 'utf-8');
        console.log(`Contacts saved to ${fileName}`);
    }
} 

const contactManager = new ContactManager(contacts);
contactManager.addNewContact("New Person", "new@email.com", "555-555-5555", "Personal", false);
contactManager.displayContacts();

contactManager.deleteContact(6);
contactManager.displayContacts();
contactManager.saveContactsToFile('contacts.json');

const searchResults = contactManager.searchContacts("Daniel");
console.log("Search Results: \n", searchResults);