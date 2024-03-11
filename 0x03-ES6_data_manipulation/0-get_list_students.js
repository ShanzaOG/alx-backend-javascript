/**
 * Retrieves a list of students.
 * @author Shanza Allan
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'Jmaes', location: 'Columbia' },
    { id: 3, firstName: 'Serena', location: 'San Francisco' },
  ];
}
