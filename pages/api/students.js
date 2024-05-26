

let students = [
  {
    nationalId: "S12345678",
    name: "Alice",
    surname: "Johnson",
    dateOfBirth: "2002-01-01",
    studentNumber: "SN123",
  },
  {
    nationalId: "S87654321",
    name: "Bob",
    surname: "Smith",
    dateOfBirth: "2001-02-02",
    studentNumber: "SN456",
  },
  {
    nationalId: "S12398765",
    name: "Charlie",
    surname: "Brown",
    dateOfBirth: "2003-03-03",
    studentNumber: "SN789",
  },
  {
    nationalId: "S45678912",
    name: "David",
    surname: "Williams",
    dateOfBirth: "2002-04-04",
    studentNumber: "SN101",
  },
  {
    nationalId: "S78912345",
    name: "Ella",
    surname: "Jones",
    dateOfBirth: "2001-05-05",
    studentNumber: "SN102",
  },
  {
    nationalId: "S13579246",
    name: "Fiona",
    surname: "Miller",
    dateOfBirth: "2003-06-06",
    studentNumber: "SN103",
  },
  {
    nationalId: "S24681357",
    name: "George",
    surname: "Wilson",
    dateOfBirth: "2002-07-07",
    studentNumber: "SN104",
  },
  {
    nationalId: "S35792468",
    name: "Hannah",
    surname: "Moore",
    dateOfBirth: "2001-08-08",
    studentNumber: "SN105",
  },
  {
    nationalId: "S46813579",
    name: "Ian",
    surname: "Taylor",
    dateOfBirth: "2002-09-09",
    studentNumber: "SN106",
  },
  {
    nationalId: "S57924680",
    name: "Jane",
    surname: "Anderson",
    dateOfBirth: "2003-10-10",
    studentNumber: "SN107",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(students);
  } else if (req.method === "POST") {
    const { nationalId, name, surname, dateOfBirth, studentNumber } = req.body;

    if (!nationalId || !name || !surname || !dateOfBirth || !studentNumber) {
      return res.status(400).json({ error: "Required fields are missing." });
    }

    const age = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();
    if (age > 22) {
      return res
        .status(400)
        .json({ error: "Student must be 22 years old or younger." });
    }

    const newStudent = {
      // id: uuidv4(),
      nationalId,
      name,
      surname,
      dateOfBirth,
      studentNumber,
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
