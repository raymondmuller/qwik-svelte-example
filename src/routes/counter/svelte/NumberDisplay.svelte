<script>
  export let count = 0;
</script>

<div class="card">
  <h1>Total</h1>
  <div class="stat">{count}</div>
</div>

<style>
  .card {
    padding: 1rem;
    background-color: white;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
    border-radius: 0.5rem;
  }

  h1 {
    color: #6c757d;
  }

  .stat {
    font-size: 32px;
    font-weight: 700;
  }
</style>
