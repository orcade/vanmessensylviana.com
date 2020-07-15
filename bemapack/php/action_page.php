<?php
// define variables and set to empty values
$nom =  $prenom = $email  = $question  = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nom = test_input($_POST["nom"]);
  $prenom = test_input($_POST["prenom"]);
  $email = test_input($_POST["email"]);
  $question = test_input($_POST["question"]);
  
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<?php
echo "<h2>Your Input:</h2>";
echo $nom;
echo "<br>";
echo $prenom;
echo "<br>";
echo $email;
echo "<br>";
echo $question;
echo "<br>";

?>