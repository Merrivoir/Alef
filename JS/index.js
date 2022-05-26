var app = new Vue({ 
    
    el: '#info',
    data: {
      itemname: 'Пижама для мальчиков',
      sku: '02640141/67',
      raiting: 4,
      reviews: 14,
      price: 1500,
      currency: '₽',
      discount: 36,
      promo: 20,
    },
    
    computed: {
        feedback: function() {
            let n = Math.abs(this.reviews);
            n %= 100;      
            if (n >= 5 && n <= 20) {
              return this.reviews + ' отзывов';
            }
            n %= 10;
            if (n === 1) {
              return this.reviews + ' отзыв';
            }
            if (n >= 2 && n <= 4) {
              return this.reviews + ' отзыва';
            } 
            return this.reviews + ' отзывов';
        },
        
        nonDiscountPrice: function() {
            return this.price + ' ' + this.currency;
        },

        currentPrice: function() {
            let p = this.price;
            let d = this.discount;
            let s = this.promo;
            p = Math.round((p - p * d/100) / 10) * 10;
            p = Math.round((p - p * s/100) / 10) * 10;
            return p + ' ' + this.currency;
        }
    }
});

var extra = new Vue({
  el: '#extra',
  data: {
    extraitem_1: 105,
    extraitem_2: 110,
    extraitem_3: 120,
    extraitem_4: 200,
    extraitem_5: 140,
  }
})
