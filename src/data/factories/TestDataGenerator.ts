import { randomUUID } from 'crypto';

export class TestDataGenerator {


    static generateUniqueEmail(): string {
        return `test-${randomUUID().slice(0, 8)}@healthcare.local`;
    }

    static generateUniquePhoneNumber(): string {
        return `9${Math.floor(100000000 + Math.random() * 900000000)}`
    }

    static generateUniqueDoctorCode(): string {
        return `DOC-${randomUUID().slice(0, 8).toUpperCase()}`;
    }

    static generateUniqueLicenseNumber(): string {
        return `MEDLIC-${randomUUID().slice(0, 8).toUpperCase()}`;
    }

    static generateFirstName(): string {
        const firstNames = [
    
    'Aarav', 'Arjun', 'Vikram', 'Rohan', 'Kiran',
    'Rahul', 'Amit', 'Suresh', 'Ramesh', 'Mahesh',
    'Rajesh', 'Dinesh', 'Ganesh', 'Naresh', 'Mukesh',
    'Vikas', 'Deepak', 'Rakesh', 'Sanjay', 'Vijay',
    'Anil', 'Sunil', 'Kapil', 'Sachin', 'Rohit',
    'Shubham', 'Ankit', 'Nikhil', 'Gaurav', 'Varun',
    'Harsh', 'Rishabh', 'Pranav', 'Kartik', 'Akash',
    'Yash', 'Tushar', 'Manish', 'Lokesh', 'Devesh',
    'Pankaj', 'Sandeep', 'Pradeep', 'Naveen', 'Praveen',

    
    'Priya', 'Pooja', 'Anjali', 'Sneha', 'Neha',
    'Riya', 'Divya', 'Kavya', 'Shreya', 'Meera',
    'Ananya', 'Nisha', 'Rekha', 'Sunita', 'Geeta',
    'Sonia', 'Mona', 'Tina', 'Rina', 'Lina',
    'Aarti', 'Swati', 'Jyoti', 'Kiran', 'Shweta',
    'Archana', 'Vandana', 'Sarita', 'Mamta', 'Sudha',
    'Radha', 'Sita', 'Gita', 'Lata', 'Usha',
    'Isha', 'Disha', 'Nidhi', 'Ridhi', 'Aditi',
    'Aisha', 'Zara', 'Fatima', 'Ayesha', 'Sana',

    
    'James', 'John', 'Robert', 'Michael', 'William',
    'David', 'Richard', 'Joseph', 'Thomas', 'Charles',
    'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark',
    'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua',
    'Kenneth', 'Kevin', 'Brian', 'George', 'Timothy',
    'Mary', 'Patricia', 'Jennifer', 'Linda', 'Barbara',
    'Susan', 'Jessica', 'Sarah', 'Karen', 'Lisa',
    'Nancy', 'Betty', 'Ashley', 'Emily', 'Michelle',
    'Amanda', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca',

    
    'Lucas', 'Leon', 'Felix', 'Jonas', 'Elias',
    'Noah', 'Luca', 'Finn', 'Matteo', 'Marco',
    'Alessandro', 'Lorenzo', 'Giovanni', 'Francesco', 'Antonio',
    'Pierre', 'Jacques', 'Henri', 'Louis', 'Marcel',
    'Sophie', 'Emma', 'Mia', 'Hannah', 'Laura',
    'Elena', 'Isabella', 'Giulia', 'Chiara', 'Valentina',
    'Marie', 'Claire', 'Camille', 'Amelie', 'Chloe',
    'Lars', 'Erik', 'Sven', 'Bjorn', 'Magnus',
    'Freya', 'Astrid', 'Ingrid', 'Sigrid', 'Helga',

   
    'Carlos', 'Miguel', 'Jose', 'Juan', 'Luis',
    'Pedro', 'Ricardo', 'Fernando', 'Eduardo', 'Roberto',
    'Diego', 'Alejandro', 'Sebastian', 'Andres', 'Felipe',
    'Maria', 'Ana', 'Carmen', 'Rosa', 'Isabel',
    'Sofia', 'Lucia', 'Valentina', 'Gabriela', 'Daniela',
    'Camila', 'Mariana', 'Paula', 'Andrea', 'Monica',

    
    'Omar', 'Ali', 'Hassan', 'Ahmed', 'Mohammed',
    'Ibrahim', 'Yusuf', 'Khalid', 'Tariq', 'Bilal',
    'Fatima', 'Aisha', 'Zainab', 'Maryam', 'Noor',
    'Layla', 'Sara', 'Hana', 'Rania', 'Dina',

    
    'Wei', 'Ming', 'Jian', 'Yang', 'Fang',
    'Hiroshi', 'Kenji', 'Takashi', 'Yuki', 'Haruto',
    'Ji-ho', 'Min-jun', 'Seo-jun', 'Hyun', 'Jae',
    'Mei', 'Ling', 'Xia', 'Yuna', 'Sakura',
    'Hana', 'Yuki', 'Aiko', 'Emi', 'Rin',

    
    'Kwame', 'Kofi', 'Ama', 'Abena', 'Yaw',
    'Chidi', 'Emeka', 'Ngozi', 'Amara', 'Zara',
    'Tendai', 'Tariro', 'Farai', 'Tafadzwa', 'Rudo',
    'Amina', 'Fatou', 'Mariama', 'Kadiatou', 'Binta',
];
        return firstNames[Math.floor(Math.random() * firstNames.length)];
    }

    static generateLastName(): string {
        const lastNames = [
   
    'Sharma', 'Verma', 'Gupta', 'Patel', 'Singh',
    'Kumar', 'Shah', 'Mehta', 'Joshi', 'Chopra',
    'Malhotra', 'Khanna', 'Kapoor', 'Bose', 'Das',
    'Mishra', 'Tiwari', 'Pandey', 'Dubey', 'Shukla',
    'Yadav', 'Chauhan', 'Rajput', 'Thakur', 'Nair',
    'Menon', 'Pillai', 'Iyer', 'Rao', 'Reddy',
    'Naidu', 'Chowdhury', 'Banerjee', 'Chatterjee', 'Mukherjee',
    'Ghosh', 'Sen', 'Roy', 'Dutta', 'Saha',
    'Saxena', 'Agarwal', 'Garg', 'Bajaj', 'Taneja',
    'Ahuja', 'Bhatia', 'Sethi', 'Arora', 'Anand',

    
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones',
    'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
    'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
    'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
    'Lee', 'Perez', 'Thompson', 'White', 'Harris',
    'Sanchez', 'Clark', 'Lewis', 'Robinson', 'Walker',
    'Young', 'Allen', 'King', 'Wright', 'Scott',
    'Hill', 'Green', 'Adams', 'Nelson', 'Baker',
    'Hall', 'Campbell', 'Mitchell', 'Carter', 'Roberts',
    'Turner', 'Phillips', 'Evans', 'Collins', 'Parker',

    
    'Mueller', 'Schmidt', 'Schneider', 'Fischer', 'Weber',
    'Meyer', 'Wagner', 'Becker', 'Hoffmann', 'Richter',
    'Rossi', 'Ferrari', 'Russo', 'Romano', 'Colombo',
    'Ricci', 'Marino', 'Bruno', 'Greco', 'Esposito',
    'Dupont', 'Durand', 'Lefebvre', 'Moreau', 'Laurent',
    'Simon', 'Michel', 'Leroy', 'Roux', 'David',
    'Andersen', 'Hansen', 'Johansen', 'Olsen', 'Larsen',
    'Lindqvist', 'Bergstrom', 'Lindgren', 'Eriksson', 'Karlsson',

    
    'Gonzalez', 'Rodriguez', 'Fernandez', 'Lopez', 'Martinez',
    'Sanchez', 'Ramirez', 'Torres', 'Flores', 'Rivera',
    'Gomez', 'Diaz', 'Cruz', 'Reyes', 'Morales',
    'Ortiz', 'Gutierrez', 'Chavez', 'Ramos', 'Mendoza',
    'Vargas', 'Castillo', 'Jimenez', 'Moreno', 'Romero',

   
    'Al-Rashid', 'Al-Farsi', 'Al-Amin', 'Al-Hassan', 'Al-Ahmed',
    'Khan', 'Sheikh', 'Malik', 'Qureshi', 'Mirza',
    'Siddiqui', 'Ansari', 'Farouk', 'Hakim', 'Karimi',
    'Sultani', 'Abbasi', 'Hashmi', 'Bukhari', 'Naqvi',

   
    'Wang', 'Li', 'Zhang', 'Liu', 'Chen',
    'Yang', 'Huang', 'Zhao', 'Wu', 'Zhou',
    'Tanaka', 'Suzuki', 'Sato', 'Watanabe', 'Yamamoto',
    'Nakamura', 'Kobayashi', 'Kato', 'Ito', 'Saito',
    'Kim', 'Lee', 'Park', 'Choi', 'Jung',
    'Nguyen', 'Tran', 'Le', 'Pham', 'Hoang',

    
    'Okafor', 'Okonkwo', 'Adeyemi', 'Adesanya', 'Olawale',
    'Mensah', 'Asante', 'Boateng', 'Owusu', 'Acheampong',
    'Ndlovu', 'Dlamini', 'Khumalo', 'Mokoena', 'Mahlangu',
    'Diallo', 'Toure', 'Camara', 'Traore', 'Coulibaly',
];
        return lastNames[Math.floor(Math.random() * lastNames.length)];
    }
    static generateRandomNumber(): number {
        return Math.floor(Math.random() * 50) + 1;
    }
    static generateDoctorSpecialization(): string {
        const specializations = [
            'Cardiologist',
            'Dermatologist',
            'Neurologist',
            'Orthopedic Surgeon',
            'Pediatrician',
            'Psychiatrist',
            'General Physician',
            'Gynecologist',
            'Oncologist',
            'Ophthalmologist'
        ];

        return specializations[
            Math.floor(Math.random() * specializations.length)
        ];
    }
}