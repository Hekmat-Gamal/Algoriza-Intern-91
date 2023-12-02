<template>
  <p class="text-lg font-semibold my-5 pl-5">Filter by</p>
  <div class="filterContent w-[300px] rounded-md border-gray2 border-2">
    <div class="rounded-md bg-input-bg px-5 py-4">
      <p class="font-medium text-base">Your budget per day</p>
    </div>
    <div class="yourBudget py-2">
      <div class="p-3 text-sm flex">
        <input class="w-5 h-5 mr-2" type="checkbox" name="" id="zeroToTwoHundred" />
        <label for="zeroToTwoHundred">$ 0 - $ 200</label>
      </div>
      <div class="p-3 text-sm flex">
        <input class="w-5 h-5 mr-2" type="checkbox" name="" id="twoHundredsToFive" />
        <label for="twoHundredsToFive">$ 200 - $ 500</label>
      </div>
      <div class="p-3 text-sm flex">
        <input class="w-5 h-5 mr-2" type="checkbox" name="" id="fiveHundredsTo1000" />
        <label for="fiveHundredsTo1000">$ 500 - $ 1,000</label>
      </div>
      <div class="p-3 text-sm flex">
        <input class="w-5 h-5 mr-2" type="checkbox" name="" id="oneThousandsTo2000" />
        <label for="oneThousandsTo2000">$ 1,000 - $ 2,000</label>
      </div>
      <div class="p-3 text-sm flex">
        <input class="w-5 h-5 mr-2" type="checkbox" name="" id="twoThousandsTo5000" />
        <label for="twoThousandsTo5000">$ 2,000 - $ 5,000</label>
      </div>
      <p class="p-5 text-sm text-gray">Set your own budget</p>
      <div class="border-dotted border-gray3 w-[256px] pt-5 mx-auto border">
        <div class="flex justify-evenly text-sm">
          <input
            class="w-[103px] h-10 rounded border border-gray2 shadow text-xs text-center"
            type="text"
            placeholder="Min budget"
          />
          <input
            class="w-[103px] h-10 rounded border border-gray2 shadow text-xs text-center"
            type="text"
            placeholder="Max budget"
          />
        </div>
        <p class="p-3 text-xs font-light text-slate-400">Press Enter to filter</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
