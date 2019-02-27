use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Barry Rodgers",
    email: "Barry@hotmail.com",
    checkedin: true
  },
  {
    name: "Jamie Toodle",
    email: "toodles@gmail.com",
    checkedin: false
  },
  {
    name: "Samantha Sarti",
    email: "smartie@gmail.com",
    checkedin: true
  }
]);
