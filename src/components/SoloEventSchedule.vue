<template>
  <div class="schedule">
    <div class="row-1">
      <div class="heading">
        <h3 class="copy__para--medium-dark">When can people book this event?</h3>
        <p class="copy__para--small">30 min, 60 rolling calendar days</p>
      </div>
      <div class="actions">
        <button class="btn-tertiary--plain">Cancel</button>
        <button @click="checkNextClick" class="btn">Next</button>
      </div>
    </div>
    <div class="row-2 row">
      <div class="heading">
        <h3>Date range</h3>
        <p>Set a range of dates when you can accept meetings.</p>
      </div>

      <!-- <div class="range"> -->
      <!--   <h4>Invitees can schedule...</h4> -->
      <!--   <div class="range__options"> -->
      <!--     <div class="range__options--option"> -->
      <!--       <input name="days" type="radio"> -->
      <!--       <div> -->
      <!--         <input type="text"> -->
      <!--       </div> -->
      <!--     </div> -->
      <!--     <div class="range__options--option"> -->
      <!--       <input name="range" type="radio"> -->
      <!--       <div> -->
      <!--         <input type="text"> -->
      <!--       </div> -->
      <!--     </div> -->
      <!--   </div> -->
      <!-- </div> -->

    </div>
    <div class="row-3 row">
      <div class="heading">
        <h3>Duration</h3>
        <p>Define how long your event will be. It can be as long as 12 hours.</p>
      </div>
      <select>
        <option value="15">15 min</option>
        <option value="30">30 min</option>
        <option value="45">45 min</option>
        <option value="60">60 min</option>
      </select>
    </div>
  </div>
</template>

<script>
// code...
</script>

<style scoped lang="scss">
.schedule {
  border: 2px solid var(--color-secondary-dark);
  margin-bottom: 4rem;
  border-radius: 6px;
}

.row{
  padding: 2rem 2rem;
  .heading{
    display: flex;
    justify-content: space-between;
    width: 100%;
    h3{
      font-size: 1.6rem;
    }
    p{
      width: 40%;
      font-size: 1.6rem;
    }
  }
}
.row-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;

  .actions {
    display: flex;
    column-gap: 1.5rem;
    align-items: center;
  }
}
</style>
