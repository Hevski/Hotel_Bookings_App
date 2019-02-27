use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Barry Rodgers",
    email: "Barry@hotmail.com",
    checkedIn: true
  },
  {
    name: "Jamie Toodle",
    email: "toodles@gmail.com",
    checkedIn: false
  },
  {
    name: "Samantha Sarti",
    email: "smartie@gmail.com",
    checkedIn: true
  }
]);
