<script>
  import * as R from "ramda";

  const greet = R.replace("{name}", R.__, "Hello, {name}!");

  let greeting = greet("Alice");
</script>

<h1>{greeting}</h1>
