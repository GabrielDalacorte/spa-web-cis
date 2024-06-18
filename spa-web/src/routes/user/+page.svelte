<script>
  let email = '';
  let username = '';
  let password = '';
  let confirmPassword = '';
  let firstName = '';
  let lastName = '';

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    const user = { email, username, password, firstName, lastName };
    console.log("Usuário criado:", user);
  }
</script>

<main>
  <h1>Criar Usuário</h1>
  <form on:submit={handleSubmit}>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" bind:value={email} required>
    </div>
    <div>
      <label for="username">Username</label>
      <input type="text" id="username" bind:value={username} required>
    </div>
    <div>
      <label for="password">Senha</label>
      <input type="password" id="password" bind:value={password} required>
    </div>
    <div>
      <label for="confirmPassword">Confirmar Senha</label>
      <input type="password" id="confirmPassword" bind:value={confirmPassword} required>
    </div>
    <div>
      <label for="firstName">Nome</label>
      <input type="text" id="firstName" bind:value={firstName} required>
    </div>
    <div>
      <label for="lastName">Sobrenome</label>
      <input type="text" id="lastName" bind:value={lastName} required>
    </div>
    <button type="submit">Criar Usuário</button>
  </form>
</main>

<style>
  main {
    max-width: 600px;
    margin: auto;
    padding: 1rem;
  }
  div {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>
