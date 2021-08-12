<template>
  <div class="tbl">
  <div class="cell">
     <button class="btn"></button>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.btn {
  font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 24px;
  border: 0;
  display: inline-block;
  padding: 20px 40px;
  background-image: linear-gradient(-180deg, #fff 0, #c9e3e2 100%);
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2), 
              0 10px 20px 0 rgba(0,0,0,0.2);
  border-radius: 6px;
  color: #334659;
  font-weight: 700;
  transition: 0.4s;
  cursor: pointer;
  outline: none;
}

.btn:not(:active):hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2), 
              0 20px 30px 0 rgba(0,0,0,0.5);
}

.tbl {
  width: 100%;
  height: 100%;
}

.cell {
  vertical-align: middle;
  text-align: center;
}
</style>