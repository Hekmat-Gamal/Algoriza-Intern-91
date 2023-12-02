<template>
  <div class="roomCard">
    <div class="bg-primary-col rounded-t-md flex items-center pl-5">
      <img src="../assets/imgs/security-user.png" alt="Icon" />
      <p class="text-lg font-medium p-[12px] text-white">Rooms</p>
    </div>
    <div class="bg-white pl-8 pb-10 pt-8 rounded-b-md">
      <div class="flex">
        <div>
          <label class="block w-60">First name</label>
          <input type="text" />
        </div>
        <div>
          <label class="block w-60">Last name </label>
          <input type="text" />
        </div>
      </div>
      <p></p>
      <label class="block mt-5 mr-5 w-60">Mobile number</label>
      <div class="flex">
        <div>
          <select type="text" class="w-[150px] mr-3"></select>
          <input type="text" class="w-[338px]" />
        </div>
      </div>
      <div class="flex items-center mt-5">
        <input type="checkbox" id="reciveAlert" class="w-5 h-5 mr-2" />
        <label for="reciveAlert" class="text-sm font-normal"
          >Receive text alerts about this trip.</label
        >
      </div>
    </div>
  </div>
  <div class="paymentCard">
    <div class="bg-primary-col rounded-t-md flex items-center pl-5">
      <img src="../assets/imgs/card-payment-tick1.png" alt="Icon" />
      <p class="text-lg font-medium p-[12px] text-white">Payment options</p>
    </div>
    <div class="bg-white payOp pl-8 pb-10 rounded-b-md">
      <p class="w-fit text-sm border-b-4 p-2 border-primary-col">Debit/Credit Card</p>
      <hr />
      <div class="images flex pt-10 pb-8">
        <img src="../assets/imgs/card1.png" alt="credit card" />
        <img src="../assets/imgs/cars2.png" alt="credit card" />
        <img src="../assets/imgs/card3.png" alt="credit card" />
        <img src="../assets/imgs/card4.png" alt="credit card" />
      </div>
      <label class="block">Name on card</label>
      <input class="block w-[500px] mb-5" type="text" />
      <label class="block">Debit/Credit card number</label>
      <input class="block w-[500px] mb-5" maxlength="16" type="text" />
      <label class="block">Expiration Date</label>
      <select name="" id="" class="mr-4 mb-5">
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">Augest</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12" selected>December</option>
      </select>
      <select name="years" id="years">
        <option value="">2023</option>
        <option value="">2024</option>
        <option value="">2025</option>
        <option value="">2026</option>
        <option value="">2027</option>
        <option value="">2028</option>
        <option value="">2029</option>
        <option value="">2030</option>
        <option value="">2031</option>
      </select>
      <div class="flex gap-5 mt-5">
        <div>
          <label class="block mr-5">Secutiy Code</label>
          <input type="text" maxlength="3" />
        </div>
        <div>
          <label class="block">Billing Zip Code</label>
          <input type="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.roomCard,
.paymentCard {
  @apply w-[810px] my-7 rounded-md;
}
.roomCard label,
.payOp label {
  @apply text-sm font-medium;
}
.roomCard input,
.roomCard select,
.payOp input,
.payOp select {
  @apply bg-input-bg h-11 rounded p-3 text-[15px];
}
/* .roomCard input:focus,
.payOp input:focus,
.roomCard select:focus,
.payOp select:focus {
  @apply border-2 border-primary-col bg-white;
} */
.images img {
  @apply m-[6px] bg-input-bg rounded-[5px] p-2;
}
</style>
