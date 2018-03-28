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
<form action="{postback_url_to_my_backend}" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js"
    class="stripe-button"
    data-key="pk_test_WMYV3w0Be1UNRelW2j3dtbvQ"
    data-image="assets/mathieu.jpg"
    data-name="name..."
    data-description="description..."
    data-amount="250"
    data-locale="auto"
    data-panel-label="panel-label..."
    data-label="2.50$ pour un café">
  </script>
</form>
```

### Résultat:

<form action="{postback_url_to_my_backend}" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js"
    class="stripe-button"
    data-key="pk_test_WMYV3w0Be1UNRelW2j3dtbvQ"
    data-image="assets/mathieu.jpg"
    data-name="name..."
    data-description="description..."
    data-amount="250"
    data-locale="auto"
    data-panel-label="panel-label..."
    data-label="2.50$ pour un café">
  </script>
</form>

Note: Vous pouvez essayer le bouton avec une carte de crédit de test (ex: 4242 4242 4242 4242).
