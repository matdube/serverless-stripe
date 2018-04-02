## Comment accepter des paiements Stripe en 5 minutes gr­ace aux Azure Functions

...

### Ouvrir un compte Stripe

...

### Créer la fonction serverless

...

#### Code back-end:

...

#### Code front-end:

index.html
```html
<form action="{serverless_function_url}" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js"
    class="stripe-button"
    data-key="{stripe_public_key}"
    data-image="assets/whatever.png"
    data-name="name..."
    data-description="description..."
    data-amount="250"
    data-locale="auto"
    data-panel-label="panel-label..."
    data-label="label...">
  </script>
</form>
```

### Résultat:

<form action="https://serverless-stripe.azurewebsites.net/api/HttpTriggerJS1?code=yVmocxR62ilBxFq1wEPbupEjFnVEqouj56AHHPdr6b1I7g3aaCNXcw==" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js"
    class="stripe-button"
    data-key="pk_test_WMYV3w0Be1UNRelW2j3dtbvQ"
    data-image="assets/mathieu.jpg"
    data-name="Blog de Mathieu"
    data-description="Un petit encouragement?"
    data-amount="250"
    data-locale="auto"
    data-panel-label="2.50$ pour m'encourager"
    data-label="2.50$ pour m'encourager">
  </script>
</form>

Note: Vous pouvez essayer le bouton avec une carte de crédit de test (ex: 4242 4242 4242 4242).
