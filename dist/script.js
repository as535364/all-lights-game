var vm = new Vue({
  el: "#app",
  data: {
    blocks: [],
    block_area_size: '800px',
    block_size: "33.3%",
    n: 3 },

  mounted() {
    this.restart();
  },
  methods: {
    restart() {
      this.blocks = Array.from({ length: this.n * this.n }, function () {
        return {
          type: false };

      });
      this.block_size = `${100 / this.n}%`;
      this.block_area_size = `800px`;
    },
    reverse(bid) {
      this.blocks[bid].type = !this.blocks[bid].type;
    },
    block_click(block, bid) {
      if (bid + 1 <= this.n * this.n - 1 && Math.floor(bid / this.n) == Math.floor((bid + 1) / this.n)) {
        this.reverse(bid + 1);
      }
      if (bid + this.n <= this.n * this.n - 1) {
        this.reverse(bid + this.n);
      }
      if (bid - 1 >= 0 && Math.floor(bid / this.n) == Math.floor((bid - 1) / this.n)) {
        this.reverse(bid - 1);
      }
      if (bid - this.n >= 0) {
        this.reverse(bid - this.n);
      }
      this.reverse(bid);
    } },

  computed: {
    check() {
      res = true;
      for (block of this.blocks) {
        res = res && block.type;
      }
      if (res) return "恭喜完成關卡 !";else
      return "";
    } } });