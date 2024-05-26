

let teachers = [
  {
    nationalId: "T12345678",
    title: "Mr",
    name: "John",
    surname: "Doe",
    dateOfBirth: "1980-01-01",
    teacherNumber: "TN123",
    salary: "50000",
  },
  {
    nationalId: "T87654321",
    title: "Mrs",
    name: "Jane",
    surname: "Smith",
    dateOfBirth: "1982-02-02",
    teacherNumber: "TN456",
    salary: "55000",
  },
  {
    nationalId: "T12398765",
    title: "Miss",
    name: "Emily",
    surname: "Johnson",
    dateOfBirth: "1985-03-03",
    teacherNumber: "TN789",
    salary: "52000",
  },
  {
    nationalId: "T45678912",
    title: "Dr",
    name: "Michael",
    surname: "Brown",
    dateOfBirth: "1979-04-04",
    teacherNumber: "TN101",
    salary: "60000",
  },
  {
    nationalId: "T78912345",
    title: "Prof",
    name: "Jessica",
    surname: "Williams",
    dateOfBirth: "1975-05-05",
    teacherNumber: "TN102",
    salary: "65000",
  },
  {
    nationalId: "T13579246",
    title: "Mr",
    name: "David",
    surname: "Jones",
    dateOfBirth: "1981-06-06",
    teacherNumber: "TN103",
    salary: "53000",
  },
  {
    nationalId: "T24681357",
    title: "Mrs",
    name: "Sarah",
    surname: "Miller",
    dateOfBirth: "1983-07-07",
    teacherNumber: "TN104",
    salary: "54000",
  },
  {
    nationalId: "T35792468",
    title: "Miss",
    name: "Laura",
    surname: "Wilson",
    dateOfBirth: "1984-08-08",
    teacherNumber: "TN105",
    salary: "56000",
  },
  {
    nationalId: "T46813579",
    title: "Dr",
    name: "James",
    surname: "Moore",
    dateOfBirth: "1986-09-09",
    teacherNumber: "TN106",
    salary: "57000",
  },
  {
    nationalId: "T57924680",
    title: "Prof",
    name: "Anna",
    surname: "Taylor",
    dateOfBirth: "1978-10-10",
    teacherNumber: "TN107",
    salary: "66000",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(teachers);
  } else if (req.method === "POST") {
    const {
      nationalId,
      title,
      name,
      surname,
      dateOfBirth,
      teacherNumber,
      salary,
    } = req.body;

    if (
      !nationalId ||
      !title ||
      !name ||
      !surname ||
      !dateOfBirth ||
      !teacherNumber
    ) {
      return res.status(400).json({ error: "Required fields are missing." });
    }

    const age = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();
    if (age < 21) {
      return res
        .status(400)
        .json({ error: "Teacher must be at least 21 years old." });
    }

    const newTeacher = {
      // id: uuidv4(),
      nationalId,
      title,
      name,
      surname,
      dateOfBirth,
      teacherNumber,
      salary,
    };

    teachers.push(newTeacher);
    res.status(201).json(newTeacher);
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
