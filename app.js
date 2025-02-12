function calculateMarks() {
  let yourName = prompt("Name");
  let rollNo = prompt("Roll Number");
  let age = prompt("Age");
  let Biology = Number(prompt("Biology (Out of 100)"));
  let Chemistry = Number(prompt("Chemistry (Out of 100)"));
  let Physics = Number(prompt("Physics (Out of 100)"));
  let obtain_marks = Biology + Chemistry + Physics;
  let total_marks = 300;
  let percentage;
  percentage = (obtain_marks / total_marks) * 100;
  alert(
    "Name : " +
      yourName +
      "\nYour Roll Number : " +
      rollNo +
      "\nBiology Marks : " +
      Biology +
      "\nChemistry Marks : " +
      Chemistry +
      "\nPhysics Marks : " +
      Physics +
      "\nObtain Marks : " +
      obtain_marks +
      "/" +
      total_marks +
      "\nYour Percentage : " +
      percentage +"%"
  );
  console.log(
    "Name : " +
      yourName +
      "\nYour Roll Number : " +
      rollNo +
      "\nBiology Marks : " +
      Biology +
      "\nChemistry Marks : " +
      Chemistry +
      "\nPhysics Marks : " +
      Physics +
      "\nObtain Marks : " +
      obtain_marks +
      "/" +
      total_marks +
      "\nYour Percentage : " +
      percentage
  );
}
