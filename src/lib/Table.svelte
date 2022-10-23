<script>
  export let fileData;

  let columns = fileData.columns;
  console.log(columns,'columns')
</script>

<style>
  table {
    width: 100%;
  }
  .section {
    padding: 0.5rem 1.5rem;
  }
</style>

<div class="section">
  <div class="container">
    <table class="collapse ba br2 b--black-10 pv2 ph3 mt4">
      <thead>
        <tr class="striped--near-white">
          {#each columns as column}
          <th class="pv2 ph3">{column}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each fileData as line}
          <tr class="striped--near-white">
            {#each line as compo}
            <td class="pv2 ph3">{line[compo]}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>